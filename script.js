let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let Oturn = true;
let count=0;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame=()=>{
    Oturn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button clicked");
        if (Oturn) {
            box.innerHTML = "X";
            Oturn = false;
        } else {
            box.innerHTML = "O";
            Oturn = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
    
        if (count === 9 && !isWinner) {
          gameDraw();
        }
    });
});

const checkWinner = () => {
    for (const pattern of winpattern) {
        const box1 = boxes[pattern[0]].innerText;
        const box2 = boxes[pattern[1]].innerText;
        const box3 = boxes[pattern[2]].innerText;

        if (box1 !== '' && box1 === box2 && box2 === box3) {
            showWinner(box1);
            return;
        }
    }
}

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const disableboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (box1) => {
    msg.innerText = `Winner is ${box1}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

reset.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);