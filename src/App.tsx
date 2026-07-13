import { useState } from 'react';
import type { Language } from './types';
import { categories } from './data/menuData';
import Header from './components/Header';
import Banner from './components/Banner';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';

import './App.scss';


function App() {
  const [language, setLanguage] = useState<Language>('vi');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);

  function toggleLanguage() {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  }

  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="app">
      <Header
        language={language}
        onToggleLanguage={toggleLanguage}
        cartCount={cartCount}
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <Banner language={language} />

      <MenuSection
        language={language}
        activeCategory={activeCategory}
        searchTerm={searchTerm}
        onAddToCart={handleAddToCart}
      />

      <Footer language={language} />
    </div>
  );
}

export default App;