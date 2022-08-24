(()=>{
  type Sizes = 'S'|'M'|'L'|'XL';

  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  };

  const products:Product[] = [];

  const addProduct= (data:Product)=>{
    products.push(data);
  }

  addProduct({
    title: 'test1',
    createAt: new Date(1994,6,27),
    stock: 12
  })

  console.log(products);
})();
