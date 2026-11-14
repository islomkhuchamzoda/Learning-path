  let day = 3;
  switch ( day ) {
    case 1: console.log("ponidelnik");break;
    case 2: console.log("vtornik");break;
    case 3: console.log("sereda");break;
    case 4: console.log("jetverg");break;
    case 5: console.log("piyatnitsa");break;
    case 6: console.log("subota");break; 
    case 7: console.log("voscrseni");break; 
    default: console.log("net tolka den"); 
  }
  const a = 12;
  const b = 4;
  const operation = "*";
  let result ;

  switch ( operation ){
    case "+": result = a + b ; break;
    case "-": result = a - b ; break;
    case "*": result = a * b ; break;
    case "/": result = a / b ; break;
    default : result = " nnzesna "
  }
  console.log(result);

  let balans = 5000;
const shoice = 2 ;
const ammount = 1500;

switch ( caches) {
    case 1 :
        console.log("balans:" + balans );
        break;
    case 2 :
        balans = balans - ammount;
        console.log("balans:" + balans );
        break;
    case 3 :
        balans = balans + ammount;
        console.log("balans:" + balans );
        break;

        default : 
        console.log ( "never punt meny " );    
}



const step = 2; 

switch ( step ) {
    case 1 :
        console.log("shag 1");
    case 2 :
        console.log("shag 2");    
    case 3 :
        console.log("shag 3");
    default :
        console.log("gotova");
        
}







