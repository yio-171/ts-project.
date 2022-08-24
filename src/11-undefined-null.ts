(()=>{

  type Sizes = 'S'|'M'|'L'|'XL';

  const createProductToJSON= (title:string,createdAt:Date,stock:number,size?:Sizes)=>{
    return {
      title,
      createdAt,
      stock,
      size
    };
  }
  const createProductToJSON2= (title:string,createdAt:Date,stock:number,size?:Sizes)=>{
    return {
      title,
      createdAt,
      stock,
      size
    };
  }

  console.log(createProductToJSON('New saga',new Date(),3000,'L'));
  console.log(createProductToJSON2('New time',new Date(),2000,));
})();
