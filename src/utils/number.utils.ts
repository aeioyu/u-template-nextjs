export function formatPrice(price: number) {
  return new Intl.NumberFormat("th-TH").format(price) + " บาท";
}
