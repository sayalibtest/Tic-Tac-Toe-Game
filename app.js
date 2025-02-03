let buttons = document.querySelectorAll(".btn");
let newgame = document.querySelector("#nwgame");
let resetgame = document.querySelector("#rstbtn");
let windiv = document.querySelector(".winner");
let winMessage = document.querySelector("#winmsg");
// for(let b of buttons){
//     b.onclick= (bt)=>{
//         console.log("I clicked on the button");
//     } ;
// };

const winnerCombinations = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
let turnO="true";

const buttonsenabled = () =>{
    for (let btn of buttons){
        btn.innerText="";
        btn.disabled = false;
        
    }

};

const buttonsdisabled = () =>{
    for (let btn of buttons){
        btn.disabled = true;
    }

};

const showWinner= (winner) => {
    winMessage.innerText=`Congratulations !! The winner is ${winner}`;
    windiv.classList.remove("hide");
    buttonsdisabled();
};

const playAgain = () =>{
    turnO="true";
    buttonsenabled();
    windiv.classList.add("hide");
};

buttons.forEach((btn) =>{
    btn.addEventListener("click" , () => {
        console.log("button clicked");
        btn.innerText = "X or O";
        if(turnO==="true"){
            btn.innerText = "O";
            turnO="false";
        } else
        {
            btn.innerText = "X";
            turnO="true";
        }
        btn.disabled="true";
        checkWinner();
    })
});

const checkWinner=()=>{
    for(let combination of winnerCombinations) {
       // console.log(combination);
       // console.log(buttons[combination[0]],buttons[combination[1]],buttons[combination[2]]);
        let positionVal1 = buttons[combination[0]].innerText;
        let positionVal2 = buttons[combination[1]].innerText;
        let positionVal3 = buttons[combination[2]].innerText;
        console.log(positionVal1,positionVal2,positionVal3);
        if(positionVal1 !="" && positionVal2 !="" && positionVal3 !=""){
            if(positionVal1 === positionVal2 && positionVal2===positionVal3){
                console.log("Winner" , positionVal1);
                showWinner(positionVal1);
            }
        }
    }
};
//event listener
newgame.addEventListener("click" ,playAgain);
resetgame.addEventListener("click" ,playAgain);

//Tic-Tac-Toe game


