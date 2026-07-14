import type { Language } from '../types';
import { uiText } from '../data/translation';
import { getText } from '../utils';
import './Footer.scss';

interface FooterProps {
  language: Language;
}

function Footer({ language }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="footer-logo-circle"><img src='src/assets/Gemini_Generated_Image_qgzqlyqgzqlyqgzq.png' alt='logo' width={65} /></span>
        <p className="footer-brand-name">{getText(uiText.brandName, language)}</p>
      </div>

      <div className="footer-info">
        <p>{getText(uiText.addressLabel, language)}: 67 Nguyễn Văn Cừ, Long Biên, Hà Nội</p>
        <p>{getText(uiText.hotlineLabel, language)}: 0329 500 326</p>
        <p>Email: huynv326@gmail.com</p>
        <p>{getText(uiText.branchLabel, language)}: Nguyễn Sơn, Ngọc Lâm, Long Biên, Hà Nội</p>
      </div>
    </footer>
  );
}

export default Footer;
