var boxes = document.querySelectorAll(".box")
var result_page = document.querySelector(".final_result")
var result_message = document.querySelector(".result")
var button = document.querySelector(".button")


var x_attempts = []
var o_attempts = [] 

var winningPosibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


boxes.forEach(box => {
    box.onclick = handleClick;  
});


var click = 0;

function handleClick(e){

    console.log("e",e)
    var target_id = e.target.id;
    var inside_text = document.createElement("p");

    boxes[target_id-1].append(inside_text);

    if (click % 2 == 0){
        x_attempts.push(target_id-1)
        inside_text.innerHTML="X";
        inside_text.style.color="red";
        checkResults(winningPosibilities, x_attempts, "X")



    }else{
        o_attempts.push(target_id-1)
        inside_text.innerHTML="O";
        inside_text.style.color="yellow";
        checkResults(winningPosibilities, o_attempts, "O")
    }
   

    if (click==8){
        result_page.style.visibility = "visible";
        result_message.innerHTML="It's a tie";
    }
    click++;
    
}

function checkResults(winningPosibilities, attempts, player){

    var ans = []
    var count = 0;

    for (let i=0; i<winningPosibilities.length; i++){
        if(Array.isArray(winningPosibilities[i])){
            checkResults(winningPosibilities[i], attempts, player)
        }else{
            if(attempts.includes(winningPosibilities[i])){
                ans.push(true);
                count++;
            }else{
                ans.push(false);
            }
        }
    }
    if (ans.every((answer)=>answer==true) && count>=2){
        result_page.style.visibility = "visible"
        result_message.innerHTML = `${player}'s WON`;


    }
}

button.onclick=()=>{
    window.location.reload();
}
