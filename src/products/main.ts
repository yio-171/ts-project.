import {addProduct, calcStock, products} from './product.service';

addProduct({
  title: 'Prod1',
  createAt: new Date(),
  stock: 5
});

addProduct({
  title: 'Prod2',
  createAt: new Date(),
  stock: 5,
  size: 'XL'
});

console.log(products);
let total_Stock = calcStock();
console.log('total stock:',total_Stock);
