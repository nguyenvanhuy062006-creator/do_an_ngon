import type { Language, LocalizedText } from './types.ts';
export function getText(text: LocalizedText, language: Language): string {
  return text[language];
}
export function formatPrice(price: number): string {
  return price.toLocaleString('vi-VN') + '₫';
}