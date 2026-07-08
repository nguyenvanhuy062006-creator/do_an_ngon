import { useState } from 'react';
import type { Language } from './types';
import './App.scss';

function App() {
  const [language, setLanguage] = useState<Language>('vi');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);

  function toggleLanguage() {
    setLanguage(language === 'vi' ? 'en' : 'vi');
    console.log("Đã đổi ngôn ngữ người dùng:",language == 'vi'?'en':'vi');
  }

  function handleAddToCart() {
    setCartCount(cartCount + 1);
    console.log("Số lượng giỏ hàng hiện tại: ",cartCount +1);
  }

  return (
    <div className="app">
      <div style ={{padding: '30px', borderBottom: '1px solid var(--color-border)'}}>
        <h1>Bếp Nhà Huy</h1>
        <p>Ngôn ngữ hiện tại: <strong>{language.toUpperCase()}</strong></p>
        <p>Danh mục đang chọn: <strong>{activeCategory}</strong></p>
        <p>Từ khoá tìm kiếm: <strong>{searchTerm || 'Chưa có gì'}</strong></p>
        <p>Số món trong giỏ: <strong>{cartCount}</strong></p>

        <hr style={{borderColor: 'var(--color-border)',margin:'20px 0'}}></hr>

        <button onClick={toggleLanguage} style={{padding: '8px 16px', marginRight:'10px'}}>VI/EN</button>
        <button onClick={handleAddToCart} style={{padding: '8px 16px'}}>Thêm vào giỏ hàng</button>
      </div>
    </div>
  );
}

export default App;
