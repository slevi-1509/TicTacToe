let player = 1;
const player1score = Array(8).fill(0);
const player2score = Array(8).fill(0);
let player1wins = 0;
let player2wins = 0;
let moves = 0;

function createBoard(){
    const div = document.createElement("div");
    div.id = "gameBoard";
    document.body.appendChild(div);
    for (i=1;i<10;i++){
        const box = document.createElement('div');
        box.id = `box${i}`;
        box.className ='box';
        div.appendChild(box);
        box.addEventListener("click", function() {boxPressed(box)}); 
        
    }
    document.getElementById("player1").innerHTML=`Players 1: ${player1wins}`;
    document.getElementById("player2").innerHTML=`Players 2: ${player2wins}`;  
}

function updateArr(box, playerArr){
    switch (box.id){
        case "box1":
            playerArr[0]+=1;
            playerArr[3]+=1;
            playerArr[6]+=1;
            break;
        case "box2":
            playerArr[0]+=1;
            playerArr[4]+=1;
            break;
        case "box3":
            playerArr[0]+=1;
            playerArr[5]+=1;
            playerArr[7]+=1;
            break;
        case "box4":
            playerArr[1]+=1;
            playerArr[3]+=1;
            break;
        case "box5":
            playerArr[1]+=1;
            playerArr[4]+=1;
            playerArr[6]+=1;
            playerArr[7]+=1;
            break;
        case "box6":
            playerArr[1]+=1;
            playerArr[5]+=1;
            break;
        case "box7":
            playerArr[2]+=1;
            playerArr[3]+=1;
            playerArr[7]+=1;
            break;
        case "box8":
            playerArr[2]+=1;
            playerArr[4]+=1;
            break;
        case "box9":
            playerArr[2]+=1;
            playerArr[5]+=1;
            playerArr[6]+=1;
            break;
    }
}

function checkWin(playerArr, player){
    if (playerArr.includes(3)){
        switch(player){
            case 1:
                player1wins++;
                break;
            case 2:
                player2wins++;
                break;
        }
        debugger;
        setTimeout(() => {clearBoard()}, 500);
    }
    document.getElementById("player1").innerHTML=`Players 1: ${player1wins}`;
    document.getElementById("player2").innerHTML=`Players 2: ${player2wins}`; 
    
}

function boxPressed(box){
    if (player==1 && box.innerText!="O"){
        box.innerText = "X";
        updateArr(box, player1score);
        checkWin(player1score, player);
        player = 2;
    }else if(player==2 && box.innerText!="X"){
        box.innerText = "O";
        updateArr(box, player2score);
        checkWin(player2score, player)
        player = 1;
    }
    moves++;
    if (moves >= 9){setTimeout(() => {clearBoard()}, 500);}     
}

function clearBoard(){
    let boxes = document.getElementById("gameBoard").children;
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].innerText=" ";
        }
    player1score.fill(0);
    player2score.fill(0);
    player = 1;
    moves = 0;
    
}
createBoard()