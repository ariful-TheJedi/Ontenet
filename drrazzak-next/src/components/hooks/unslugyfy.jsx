export default function unslugify(str) {
  if (!str) return "";
  return str
    .split("-") // split by dash
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each word
    .join(" "); // join back with space
}
