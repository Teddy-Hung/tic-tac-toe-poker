const tttBoard = [];

function play(id){
    const playerState = document.getElementById('player');
    const clickedBox = document.getElementById(id);  
    let boardFull = true;

    //Assigning board values by id paramater
    const topLeft = tttBoard[0];
    const topCenter = tttBoard[1];
    const topRight = tttBoard[2];
    const middleLeft = tttBoard[3];
    const middleCenter = tttBoard[4];
    const middleRight = tttBoard[5];
    const bottomLeft = tttBoard[6];
    const bottomCenter = tttBoard[7];
    const bottomRight = tttBoard[8];

    //Enters current player's Alternates between X & O player
    if (playerState.innerText === 'X'){   
        clickedBox.innerText = 'X'; 
        playerState.innerText = 'O';
        tttBoard[id] = 'X';
    }else{
        clickedBox.innerText = 'O'; 
        playerState.innerText = 'X';
        tttBoard[id] = 'O';
    }
    console.log(tttBoard);

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner`);
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner`);
        return;
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`);
        return;
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
        return;
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner`);
        return;
    }

    for (let i = 0; i <= 8; i++) {
      if (tttBoard[i] === undefined) {
        boardFull = false;
      }
    }
    if (boardFull === true) {
      alert("Cat's game, there is no winner");
    }
    
}