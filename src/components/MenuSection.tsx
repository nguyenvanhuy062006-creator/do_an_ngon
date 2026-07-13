import { useState } from 'react';
import type { Language } from '../types';
import { menuItems } from '../data/menuData';
import { uiText } from '../data/translation';
import { getText } from '../utils';
import MenuCard from './MenuCard';
import './MenuSection.scss';

interface MenuSectionProps {
  language: Language;
  activeCategory: string;
  searchTerm: string;
  onAddToCart: () => void;
}
const ITEMS_PER_PAGE = 4;

function MenuSection({ language, activeCategory, searchTerm, onAddToCart }: MenuSectionProps) {
  const [showAll, setShowAll] = useState(false);

  const keyword = searchTerm.trim().toLowerCase();

  const filteredItems = menuItems.filter((item) => {
    const matchCategory = activeCategory === 'all' || item.categoryId === activeCategory;
    const matchSearch =
      keyword === '' ||
      item.name.vi.toLowerCase().includes(keyword) ||
      item.name.en.toLowerCase().includes(keyword);
    return matchCategory && matchSearch;
  });

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, ITEMS_PER_PAGE);

  return (
    <section className="menu-section">
      {filteredItems.length === 0 ? (
        <p className="menu-section-empty">{getText(uiText.noResults, language)}</p>
      ) : (
        <>
          <div className="menu-section-grid">
            {visibleItems.map((item) => (
              <MenuCard key={item.id} item={item} language={language} onAddToCart={onAddToCart} />
            ))}
          </div>

          {!showAll && filteredItems.length > ITEMS_PER_PAGE && (
            <button className="menu-section-viewall" onClick={() => setShowAll(true)}>
              {getText(uiText.viewAll, language)}
            </button>
          )}
        </>
      )}
    </section>
  );
}

export default MenuSection;