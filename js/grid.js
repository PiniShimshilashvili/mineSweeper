'use strict'


function buildGrid(difficulty = MEDIUM){
    var field = []
    for (var i = 0; i < difficulty.grid; i++){
        field.push([]);
        for (var j = 0; j < difficulty.grid; j++){
            field[i][j] = {
                minesAroundCount: 0,
                isShown: false, 
                isMine: false, 
                isMarked: false
            }
        }
    }
    for (var i = 0; i < difficulty.mines; i++){
        var row = getRandomInt(0, difficulty.grid)
        var col = getRandomInt(0, difficulty.grid)
        field[row][col].isMine = true
    }
    setMinesNegsCount(field)
    return field
}
