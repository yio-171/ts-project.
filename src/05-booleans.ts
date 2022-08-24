(()=>{
  let isEnable= true; //inferencia de datos typescript
  let isNew : boolean= false;

  console.log('enable',isEnable);
  console.log('new',isNew);

  const random = Math.random();
  console.log('random',random);

  isNew = random > 0.5 ? true : false;

  console.log('isNew',isNew);
})();
