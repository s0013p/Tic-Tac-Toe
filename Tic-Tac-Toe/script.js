let boxes = document.querySelectorAll(".box");
let p= document.querySelector("p");
let msg= document.querySelector(".msg");
let hide= document.querySelector(".hide");
let new_btn = document.querySelector("#new");
let reset= document.querySelector("#reset");

let turnO= true;

const win_pattern = [
  [0, 1, 2], 
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box)=>{
  console.log("Box Clicked");

  box.addEventListener('click',()=>{
    if(turnO){
      box.innerText='O';
      turnO=false;
    }
    else{
      box.innerText='X';
      turnO=true;
    }

    box.disabled=true;

    checkwinner();
  })
});


const disable=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}

const enable=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

const newg=()=>{
  enable();
  console.log("New game has started"); 
  msg.classList.add('hide'); 
}


const checkwinner = () => {
  for (let pattern of win_pattern) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        p.innerText = `Congratulations, Winner is ${val1}`;
        msg.classList.remove('hide');
        console.log(p.innerText);
        disable(); // Disable next moves after win
        return;
      }
    }
  }

  // Check for a tie only if no winner is found
  let isTie = true;
  for (let box of boxes) {
    if (box.innerText === "") {
      isTie = false;
      break;
    }
  }
  if (isTie) {
    p.innerText = "It's a Tie!";
    msg.classList.remove('hide');
    console.log(p.innerText);
    disable();
  }
};

new_btn.addEventListener('click', newg);

reset.addEventListener('click',()=>{
  enable();
  console.log("Game has reset"); 
  msg.classList.add('hide'); 
});




