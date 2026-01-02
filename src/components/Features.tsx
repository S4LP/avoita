'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '📞',
    title: 'Выполняет телефонные звонки за тебя',
    description: 'Avoita берет на себя все рутинные звонки, от отмены подписок до записи к врачу.'
  },
  {
    icon: '🎤',
    title: 'Полностью голосовое управление',
    description: 'Просто говори в приложении, что нужно сделать — никаких текстовых команд.'
  },
  {
    icon: '🌍',
    title: 'Поддержка немецкого, русского и английского',
    description: 'Общайся с Avoita на удобном языке при выполнении задач.'
  },
  {
    icon: '🔒',
    title: 'Полное соответствие GDPR',
    description: 'Твои данные защищены, конфиденциальность на первом месте.'
  },
  {
    icon: '🧠',
    title: 'Умный диалог',
    description: 'Avoita понимает ответы собеседника и доводит задачу до конца.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Почему Avoita?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Твой персональный AI-ассистент для решения любых задач по телефону
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
