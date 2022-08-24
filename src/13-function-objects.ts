(()=>{
  const login =(data: {usuario:string, password:number}):void=>{
      console.log(`${data.usuario} ${data.password}`);
  }

  login({
    usuario: 'giovanni',
    password: 12345
  });

  type Sizes= 'S'|'M'|'L'|'XL';
  let products:any[]=[];

  const addProduct= (data:{
      title: string,
      createAt: Date,
      stock: number,
      size?: Sizes
  })=>{
    products.push(data);
  }

  addProduct({title:'first test',createAt:new Date(8,10,2022),stock:1,size:'S'})
})();
