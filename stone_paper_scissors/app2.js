let rock=document.querySelector("#rock");
let scissors=document.querySelector("#scissors");
let paper=document.querySelector("#paper");
let usrScore=document.querySelector("#playerScore");
let cmpScore=document.querySelector("#compScore");
let result=document.querySelector(".result");
let option=document.querySelectorAll(".optionBtn");
let newGame=document.querySelector("#resetBtn");

const compChoice=()=>{
   let cChoice=["rock","paper","scissors"];
   let idx= Math.floor(Math.random()*3);
   console.log(cChoice[idx]);
   return cChoice[idx];
}

const drawGame=()=>{
   result.innerText="ITS A DRAW";
   result.style.backgroundColor = "#ADD8E6";
}

const winGame=()=>{
   result.innerText="YOU WON";
   result.style.backgroundColor = "#90EE90";
   usrScore.innerText=Number(usrScore.innerText)+1;
}

const loseGame=()=>{
   result.innerText="COMPUTER WON";
   result.style.backgroundColor = "#FF7F7F";
   cmpScore.innerText=Number(cmpScore.innerText)+1;
}

option.forEach((choice)=>{
   choice.addEventListener("click",()=>{
    const cchoice=compChoice();
    const usrChoice=choice.getAttribute("id");
    console.log(usrChoice);

      if (usrChoice===cchoice) {
         drawGame();
      }else if(usrChoice==="rock" && cchoice==="scissors"|| 
         usrChoice==="scissors" && cchoice==="paper"||
         usrChoice==="paper" && cchoice==="rock"
      ){
         winGame();
      }
      else{
         loseGame();
      }
   });
});

newGame.addEventListener("click",()=>{
   location.reload();
});