let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetid");
let msgbox=document.querySelector("#msg-box");
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#newbtn");
let headerh1=document.querySelector("#headerh1");


let turno=true;
let count=0;
const winpattern=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
  box.addEventListener("click",(()=>{
    console.log("button was clicked");
    
   if(turno==true)
   {
    box.innerText="o";
    turno=false;
    box.disabled=true;
   } else {
    box.innerText="x";
    turno=true;
    box.disabled=true;
   }
   count++;
   let iswinner=checkwinner();
   if(count===9 && !iswinner)
   {
    gamedraw();
   }
  }))
})

const checkwinner =()=>{
    
    for(let pattern of winpattern)
    {

        let pos1value=boxes[pattern[0]].innerText;
        let pos2value=boxes[pattern[1]].innerText;
        let pos3value=boxes[pattern[2]].innerText;
        
        if(pos1value !="" && pos2value !="" && pos3value !="")
        {
            if(pos1value==pos2value && pos2value==pos3value)
            {
                console.log("winner is ",pos1value);
                showwinner(pos1value, pattern);
                return true;
            } 
            
        }
        

    }
}

const showwinner=(winner, winningPattern)=>{
   msg.innerText=`Congratulations, winner  is ${winner}`;
   highlightWinningBoxes(winningPattern);
   disablebox();
   msgbox.classList.remove("hide");
   resetbtn.classList.add("hide");
   headerh1.classList.remove("headerstyle");
  
}

const highlightWinningBoxes = (pattern) => {
    pattern.forEach((index) => {
        boxes[index].classList.add("winner-highlight");
    });
}

const removeHighlight = () => {
    boxes.forEach((box) => {
        box.classList.remove("winner-highlight");
    });
}

const disablebox =()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enablebox =()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}



const reset=()=>{
    turno=true;
     enablebox();
     removeHighlight();
     count=0;
    
}

const newgame=()=>{
    turno=true;
    count=0;
     enablebox();
     removeHighlight();
     msgbox.classList.add("hide");
     resetbtn.classList.remove("hide");
     headerh1.classList.add("headerstyle");


}
resetbtn.addEventListener("click",reset);
newbtn.addEventListener("click",newgame);

const gamedraw=()=>{
    msg.innerText=`Match is drawed`;
    disablebox();
   msgbox.classList.remove("hide");
   resetbtn.classList.add("hide");
   headerh1.classList.remove("headerstyle");
}