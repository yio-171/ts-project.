(()=>{
  let myUndefined : string | undefined;
  let myNull : number | null;

  function hi(name: string | null){
    let hi = 'hola';
    if(name){
      hi += name;
      console.log('HI 1',hi);
    }else{
      console.log('nobody');
    }
  }

  function hiV2(name: string | null){
    let hi = 'hola';
    hi += name?.toLocaleLowerCase();
    console.log('hiV2',hi);
  }

  hi('giovanni');
  hiV2(null);
})();
