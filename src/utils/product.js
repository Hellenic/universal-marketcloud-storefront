export function hasStock(product) {
  switch (product.stock_type) {
    case 'status':
      return (product.stock_status === 'in_stock');
    default:
      console.warn('Unhandled stock type, add it to utils/product.js', product.stock_type);
      return true;
  }
}
