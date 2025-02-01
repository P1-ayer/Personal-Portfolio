let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newGame");
let xScore = document.querySelector("#XScore");
let oScore = document.querySelector("#OScore");

let XScore = 0;
let OScore = 0;
let turnO = true; //player O turn

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];// in ascending order horizontallyy and vetically prreferably a good way 

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            box.style.color="pink";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
            box.style.color="blue";
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val === pos2Val && pos2Val === pos3Val && pos1Val === "O") {
            alert("Player O won");
            OScore += 1;
            oScore.innerText = OScore;
            resetGame();///reset game after each win

        } else if (pos1Val === pos2Val && pos2Val === pos3Val && pos1Val === "X") {
            alert("Player X won");
            XScore += 1
            xScore.innerText = XScore;
            resetGame();
        }
    }
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;

    });
};
resetbtn.addEventListener("dblclick", resetGame);
newgamebtn.addEventListener("dblclick", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        xScore.innerText="";
        oScore.innerText="";
        XScore=0;
        OScore=0;
    });
});