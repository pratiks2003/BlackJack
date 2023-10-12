
let message =""
let cards =[]
let sum = 0
let isalive = false ;
// console.log(cards);


let cardsel= document.getElementById("cardEl");
let sumel=document.getElementById("sumEl")
 
function randomNumber(){

   let randomnumber = Math.floor(Math.random()*11)+1;
   
//    console.log(randomnumber)
   if(randomnumber===1){
       return 11
    }
    else{
        
        return randomnumber
        
    }
//    return randomnumber
}
 randomNumber()

 function startGame(){
    
     
     let firstCard =  randomNumber();
     let secondCard =  randomNumber();
     cards = [firstCard,secondCard]
     sum = firstCard + secondCard ;
     isalive = true ;
     rendergame()
 }

function rendergame(){
   
    
    cardsel.textContent= "cards : " 
    
    sumel.textContent="SUM : "+ sum
    
    for (i=0;i<cards.length;i++){
        
        cardsel.textContent +=  cards[i] + " "
    }
    
    if(sum===0){
        
        message = " start game first "
        
    }
    else if(sum<21){
        message  = "do you want to pick next card ?"
    }
    
    else if(sum===21){
        
        message = "you got a BLack Jack !"
    }
    
    else if(sum>21){
        
        message ="better luck next time "
    }
    document.getElementById("msg").innerText = message
}

function nextcard(){
    
    // let thirdCard = randomNumber() ;
    // sum =  sum + thirdCard
    // cards.push(thirdCard)
    // cardsel.textContent= "cards : " + firstCard + "-" +secondCard + "-" + thirdCard; 
    // sumel.textContent="SUM : "+ sum
if (sum<21 && isalive===true){
    let thirdCard = randomNumber() ;
    sum =  sum + thirdCard
    if(sum===0){
        document.getElementById("msg").innerText  =" start game first "
    }
    cards.push(thirdCard)
}
    rendergame()


    
}