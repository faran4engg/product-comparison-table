export const toCamelCase = str => {
  return str.replace(/^([A-Z])|\s(\w)/g, (match, p1, p2) => {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  });
};
