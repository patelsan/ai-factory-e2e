export function slugify(text) {
  return text.toLowerCase().trim().split(/\s+/).join("-");
}
