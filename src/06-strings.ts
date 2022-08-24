(()=>{
  let productTitle : string = 'My amazing product';
  productTitle = 'My amazing product change';
  console.log('productTitle',productTitle);

  const productDescription = "I'm giovanni arevalo";
  console.log('productDescription',productDescription);

  let productPrice= 100;
  let isNew: boolean = false;

  const sumary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

   console.log(sumary);

})();
