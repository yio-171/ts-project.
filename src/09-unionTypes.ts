(()=>{
  type UserID = string | number |boolean;
  let userId : UserID;
  type shirtSize = 'S' | 'M' | 'L' | 'XL';
  function greeting(myText : UserID, shirtsize : shirtSize){
    if(typeof myText === 'string'){
      console.log(`string: ${myText.toLowerCase()}`);
    }
  }
  greeting('124','M');
})();
