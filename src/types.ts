
export type Language = 'vi' | 'en';
export interface LocalizedText {
  vi: string;
  en: string;
}
export interface Category {
  id: string;
  name: LocalizedText;
  icon: string;
}
export interface MenuItem {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  price: number;
  categoryId: string;
  icon: string;
}
export interface BannerSlide {
  id: string;
  title: LocalizedText;
  emoji: string;
}
