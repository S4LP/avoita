'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('subscription-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background placeholder - in production, use Unsplash image */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Avoita — твой AI, который звонит вместо тебя
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Просто скажи, что нужно сделать — и Avoita сама позвонит, поговорит и решит задачу. Никаких очередей звонков, неловких разговоров и траты времени.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Отмени подписку', 'Запиши к врачу', 'Уточни статус заказа', 'Перезвони в поддержку'].map((task, index) => (
              <motion.span
                key={task}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm hover:bg-white/20 transition-colors"
              >
                {task}
              </motion.span>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={scrollToForm}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Оформить предзаказ
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
