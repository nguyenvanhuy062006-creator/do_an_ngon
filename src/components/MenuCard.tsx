import type { Language, MenuItem as MenuItemType } from '../types';
import { uiText } from '../data/translation';
import { getText, formatPrice } from '../utils';

interface MenuCardProps {
    item: MenuItemType;
    language: Language;
    onAddToCart: () => void;
}
function MenuCard({ item, language, onAddToCart }: MenuCardProps) {
    return (
        <div className='menu-card'>
            <div className='menu-card-image'>{item.icon}</div>
            <h3 className='menu-card-name'>{getText(item.name, language)}</h3>
            <p className='menu-card-price'>{formatPrice(item.price)}</p>

            <div className='menu-card-actions'>
                <button className='menu-card-add' onClick={onAddToCart}>
                    {getText(uiText.addToCart, language)}
                </button>
                <button className='menu-card-buy'>{getText(uiText.buyNow, language)}</button>
            </div>
        </div>
    )
}
export default MenuCard;
