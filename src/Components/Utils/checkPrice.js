export default function checkPrice(price) {
  if (price > 0) {
    price = "#2fcc71";
  } else if (price < 0) {
    price = "#e74b3c";
  } else {
    price = "black";
  }

  return price;
}
