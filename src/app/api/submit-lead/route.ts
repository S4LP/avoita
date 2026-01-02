import { NextRequest, NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, telegram, otherContact, preferredContact, monthlyPrice, message } = await request.json();

    // Basic validation
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatIdsString = process.env.TELEGRAM_CHAT_IDS;

    if (!token || !chatIdsString) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Parse comma-separated chat IDs into array
    const chatIds = chatIdsString.split(',').map(id => id.trim()).filter(id => id.length > 0);

    if (chatIds.length === 0) {
      return NextResponse.json({ error: 'No valid chat IDs configured' }, { status: 500 });
    }

    // Initialize bot with polling disabled (we only send messages)
    const bot = new TelegramBot(token, { polling: false });

    const text = `Новый лид с лендинга!\nИмя: ${name || 'Не указано'}\nEmail: ${email}\nТелефон: ${phone || 'Не указано'}\nTelegram: ${telegram || 'Не указано'}\nДругой контакт: ${otherContact || 'Не указано'}\nПредпочитаемый метод связи: ${preferredContact || 'Не указано'}\nГотов платить ежемесячно: ${monthlyPrice || 'Не указано'}\nСообщение: ${message || 'Нет'}`;

    const sendMessage = async (chatId: string) => {
      try {
        await bot.sendMessage(chatId, text);
        return true;
      } catch (error) {
        console.error(`Failed to send message to ${chatId}:`, error);
        return false;
      }
    };

    // Send messages to all chat IDs
    const results = await Promise.all(chatIds.map(chatId => sendMessage(chatId)));

    // Check if all messages were sent successfully
    const allSuccessful = results.every(success => success);

    if (!allSuccessful) {
      return NextResponse.json({ error: 'Failed to send notification to some chats' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in submit-lead:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
