import { useState } from 'react';
import type { Language, Category } from '../types';
import { uiText } from '../data/translation';
import { getText } from '../utils';
import './Header.scss';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  cartCount: number;
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

function Header({
  language,
  onToggleLanguage,
  cartCount,
  categories,
  activeCategory,
  onSelectCategory,
  searchTerm,
  onSearchChange,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleSelectCategory(id: string) {
    onSelectCategory(id);
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header-row header-row-top">
        <div className="header-logo">
          <span className="header-logo-circle"><img src='src/assets/Gemini_Generated_Image_qgzqlyqgzqlyqgzq.png' alt='logo' width={65} height={55}/></span>
          <div>
            <p className="header-logo-name">{getText(uiText.brandName, language)}</p>
            <p className="header-logo-tagline">{getText(uiText.tagline, language)}</p>
          </div>
        </div>

        <div className="header-top-actions">
          <div className="header-pill header-hotline">
            <span>📞</span>
            <span>0329 500 326</span>
          </div>

          <div className="header-pill header-cart">
            <span>🛒</span>
            <span>{getText(uiText.cartLabel, language)}</span>
            {cartCount > 0 && <span className="header-cart-badge">{cartCount}</span>}
          </div>

          <button className="header-lang-btn" onClick={onToggleLanguage}>
            {language === 'vi' ? 'VI/EN' : 'EN/VI'}
          </button>
        </div>
      </div>

      <div className="header-row header-row-bottom">
        <div className="header-menu">
          <button className="header-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span>☰</span>
            <span>{getText(uiText.categoriesLabel, language)}</span>
          </button>

          {isMenuOpen && (
            <ul className="header-menu-dropdown">
              <li>
                <button
                  className={activeCategory === 'all' ? 'active' : ''}
                  onClick={() => handleSelectCategory('all')}
                >
                  {getText(uiText.allCategory, language)}
                </button>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    className={activeCategory === category.id ? 'active' : ''}
                    onClick={() => handleSelectCategory(category.id)}
                  >
                    {category.icon} {getText(category.name, language)}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <input
          type="text"
          className="header-search"
          placeholder={getText(uiText.searchPlaceholder, language)}
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>
    </header>
  );
}

export default Header;
