export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Avoita</h3>
            <p className="text-gray-300 mb-4">
              Artificial VOIce Task Assistant — твой AI, который звонит вместо тебя
            </p>
            <div className="flex space-x-4">
              {/* Placeholder social links */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">📷</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">💼</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Особенности</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Как это работает</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Цены</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2026 Avoita. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
