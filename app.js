let btns = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset");
let winner = document.querySelector(".winner");
let newGamebtn = document.querySelector(".newgame");
let h2=document.querySelector(".turn")

let msg=document.querySelector(".msg");


let turn0 = true;


const winPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [6, 4, 2],
];

const restGame = () => {
    turn0 = true;
    enableBtns();
    document.body.style.backgroundColor = "#7a93ac";
    msg.classList.add("hide");
    
    


}



btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("button was clicked");
        if (turn0 === true) {
            h2.innerText="X turn";
            btn.innerText = "O";
            turn0 = false;
           
        } else {
            btn.innerText = "X";
            turn0 = true;
            h2.innerText="0 turn";
        }
        btn.disabled = true;
        h2.disabled=true;
       

        checkWinner();
        
    })
});



const checkWinner = (() => {
    for (pattern of winPattern) {


        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(btns[pattern[0]],btns[pattern[1]],[pattern[2]]);


        // console.log(btns[pattern[0]].innerText,btns[pattern[1]],[pattern[2]]);


        let pos1val = btns[pattern[0]].innerText;
        let pos2val = btns[pattern[1]].innerText;
        let pos3val = btns[pattern[2]].innerText;


        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val && pos2val == pos3val) {
                console.log("winner");
                document.body.style.backgroundColor = "green";
                winner.innerText = "winner is  " + pos1val;
                disableBtns();
                msg.classList.remove("hide");

            } else {
                // Check if it's a draw
                let isDraw = true;
                for (let i = 0; i < btns.length; i++) {
                    if (btns[i].innerText === "") {
                        isDraw = false;
                        break;
                    }
                }
                if (isDraw) {
                    console.log("Draw");
                document.body.style.backgroundColor = "Red";
                winner.innerText = "The game is draw  ";
                disableBtns();
                msg.classList.remove("hide");
                }
            
            }
        }
        

    }
})

const disableBtns = () => {
    for (btn of btns) {
        btn.disabled = true;
    }
}

const enableBtns = () => {
    for (btn of btns) {
        btn.disabled = false;
        btn.innerText="";
    }
}

newGamebtn.addEventListener("click", restGame);
resetbtn.addEventListener("click", restGame);