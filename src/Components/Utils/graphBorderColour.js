export default function graphBorderColour(price) {
  if (price > 0) {
    price = "#7ddfa3";
  } else if (price < 0) {
    price = "#fa3e0f";
  } else {
    price = "black";
  }

  return price;
}
