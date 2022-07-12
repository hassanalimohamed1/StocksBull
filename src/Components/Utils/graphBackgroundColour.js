export default function graphBackgroundColour(price) {
  if (price > 0) {
    price = "#95e4b0";
  } else if (price < 0) {
    price = "#fc8068";
  } else {
    price = "#d4d3d3";
  }
  return price;
}
