'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: 1,
    title: 'Открой приложение Avoita',
    description: 'Запусти приложение и будь готов к голосовому управлению.'
  },
  {
    step: 2,
    title: 'Скажи голосом, какую задачу нужно решить',
    description: 'Например: «Позвони в банк и назначь встречу.»'
  },
  {
    step: 3,
    title: 'Avoita сообщит детали задания',
    description: 'Она укажет номер телефона, источник номера и суть задачи. Спросит подтверждение.'
  },
  {
    step: 4,
    title: 'Avoita звонит и выполняет задачу',
    description: 'Ты можешь слушать диалог в реальном времени.'
  },
  {
    step: 5,
    title: 'Получи отчет с результатом',
    description: 'Avoita сообщит об окончании задачи голосом или уведомлением.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Простой процесс в 5 шагов к решению твоих задач
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {step.description}
                </p>
              </div>
              <div className="flex-1">
                {/* Placeholder for illustration - in production, add SVG or image */}
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-48 flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
