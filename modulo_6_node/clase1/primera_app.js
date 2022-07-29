// si es multiplo de 3 => FIZZ 
// si es multiplo de 5 => BUZZ 
// si es multiplo de 3 Y 5 => FIZZBUZZ 

function fizzbuzz(limit){
  for(let i = 0; i <= limit; i++){
    if(i%3 == 0 && i%5 == 0){
      console.log('FIZZBUZZ');
    } else if (i%3 == 0){
      console.log('FIZZ');
    } else if (i%5 == 0){
        console.log('BUZZ');
    } else {
      console.log(i)
    }
  }
}

fizzbuzz(100);