export function repeatText(text, n) {
  return Array.from({ length: n }, () => text).join(" ");
}
