
let playerOneName = prompt("Miner 1 name:")
document.getElementById("player1").innerHTML = playerOneName;

let playerTwoName = prompt("Miner 2 name:")
document.getElementById("player2").innerHTML = playerTwoName;

let audio = new Audio();
audio.src = "/pics/dicesound.mp3"; 



let btnStart = document.getElementById("btn-start")

btnStart.addEventListener("click",function() {
     rolldice = setInterval(myTimer,100);
    function myTimer () {
        

        let playerOneRandomNumber = 
        Math.floor(Math.random() * 6) + 1; 

        let playerTwoRandomNumber = 
        Math.floor(Math.random() * 6) + 1; 
        
        let playerOneDiceImage = 
        `pics/diceface` + playerOneRandomNumber + `.png`;

        let playerTwoDiceImage = 
        `pics/diceface` + playerTwoRandomNumber + `.png`;
        
        document.querySelectorAll(`img`)[0].setAttribute
        (`src` , playerOneDiceImage);
        
        document.querySelectorAll(`img`)[1].setAttribute
        (`src` , playerTwoDiceImage);
        
        document.querySelector(`h2`).style.opacity = `0`;
        document.querySelector("#player1").style.opacity = `0`;
        document.querySelector("#player2").style.opacity = `0`;
        
        
        if (playerOneRandomNumber>playerTwoRandomNumber){
            document.querySelector("h2").innerHTML = 
            `⛏️${playerOneName} has found more golden nuggets!!!⛏️`;
            document.querySelector("#player1").style.color = "rgb(248,197,0)"
            document.querySelector("#player2").style.color = "white"
        }else if (playerTwoRandomNumber>playerOneRandomNumber){
            document.querySelector(`h2`).innerHTML = 
            `⛏️${playerTwoName} has found more golden nuggets!!!⛏️`;
            document.querySelector("#player1").style.color = "white"
            document.querySelector("#player2").style.color = "rgb(248,197,0)" 
        } else{
            document.querySelector(`h2`).innerHTML = 
            `⛏️${playerOneName} and ${playerTwoName}  found the same amount of golden nuggets!!!⛏️`;
            document.querySelector("#player1").style.color = "rgb(248,197,0)" 
            document.querySelector("#player2").style.color = "rgb(248,197,0)"
        }
        
    };

        setTimeout(stop_interval,1000);
    function stop_interval(){
        clearInterval(rolldice)};
        
    },);
    
    function myFunction(){
      document.getElementById('btn-start').style.display ='none'; 
      setTimeout(function(){ 
      document.getElementById('btn-start').style.display ='inline'; 
      document.getElementById('btn-start').style.flexDirection = "row";
      document.getElementById('btn-start').innerHTML = "Roll again";
      document.querySelector(`h2`).style.opacity =`1`
      document.querySelector("#player1").style.opacity = `1`;
      document.querySelector("#player2").style.opacity = `1`;
    }
    ,1000); 
    }




    