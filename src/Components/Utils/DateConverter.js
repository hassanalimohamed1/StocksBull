export default function dateConverter(date) {
  return date.toISOString().split("T")[0];
}
