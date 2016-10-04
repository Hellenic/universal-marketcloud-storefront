export function getColumnCount(minColumnWidth = 250, defaultCount = 2) {
  if (typeof window !== 'undefined') {
    return Math.floor(window.screen.availWidth / minColumnWidth);
  }

  return defaultCount;
}
