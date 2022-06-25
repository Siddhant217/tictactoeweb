console.log("welcome to tic tac toe");
let music=new Audio("music.mp3");
let audioturn =new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let isgameover=0;
let turn ='X';

// function to change the turn:
//(using arrow function and const varible..it makes the function decalration constant)
const changeTurn=()=>{
    return turn==='X' ? '0' : 'X';
}

//function to check for a win:
function checkwin()
{
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !==""))
        {
            document.querySelector(".Info").innerText= boxtext[e[0]].innerText + " has won";
            isgameover=1;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width= "190px";
        }
    })


}

//game logic:
music.play();

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{

    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{

        if(boxtext.innerText==='')
        {
            boxtext.innerText=turn;
            turn = changeTurn();
            audioturn.play();
            checkwin();
            if(isgameover===0){
                document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn ; 
            }
        }
    })
    
  })

  reset.addEventListener("click",()=>
  {
    let boxtext=document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    })
    turn ='X'
    document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn ; 
    isgameover=0; 
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width= "0";
  })
    
  
//   if(isgameover===0){
//       document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn ; 
//   }
  

//   my:

//   let boxes=document.getElementsByClassName("box");
//   Array.from(boxes).forEach(fun);
//   function fun(element)
//   {
//     let boxtext=element.querySelector(".boxtext");
//     element.addEventListener("click",myfun());
//     function myfun(element)
//     {
//         if(boxtext.innerText==='')
//         {
//             boxtext.innerText=turn;
//             turn = changeTurn();
//             audioturn.play();
//             checkwin();
//             document.getElementsByClassName("Info")[0].innerText= "Turn for " + turn ;
//         }
//     }
       
//     }
  
     
    

