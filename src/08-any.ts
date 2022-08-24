(()=>{
  let myDynamicVar : any;
  myDynamicVar = 10;
  myDynamicVar = 'hola';
  myDynamicVar = true;
  myDynamicVar = [10,'letras',true];
  myDynamicVar = {};

  myDynamicVar = 'hola';
  const newValue = (myDynamicVar as string).toLocaleUpperCase();
  console.log(newValue);

  myDynamicVar = 123;
  const newNumber = (<number>myDynamicVar).toFixed();
  console.log(newNumber);
})();
