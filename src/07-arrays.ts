(()=>{
  let prices = [1,2,3,1,2,3,'hola',true];
  // prices.push(false);
  // prices.push('hola');
  // prices.push(222);

  let product = ['hola',true];
  product.push(false);

  let mixed : (number|boolean|string|Object) [] = [500,true];
  mixed.push(123);
  mixed.push(true);
  mixed.push('hi');
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,3,4,5,6,,7];
  console.log(numbers.map(item => item * 2));
})();
