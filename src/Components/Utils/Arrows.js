export default function Arrows(pricechange) {
  if (pricechange > 0) {
    return "↑";
  } else if (pricechange < 0) {
    return "↓";
  }
}
