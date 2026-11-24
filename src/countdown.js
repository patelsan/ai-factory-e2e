export function countdown(n) {
  const values = [];
  for (let i = n; i >= 1; i -= 1) {
    values.push(i);
  }
  return values.join(", ");
}
