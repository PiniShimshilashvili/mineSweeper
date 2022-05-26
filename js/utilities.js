'use strict'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

function printGrid(grid, selector) {
    var strHTML = '<table border="1"><tbody>';
    for (var i = 0; i < grid.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < grid[0].length; j++) {
            var cell = grid[i][j];
            var className = 'cell cell-' + i + '-' + j;
            strHTML += '<td onclick="cellClicked('+cell+', '+i+', '+j+')" oncontextmenu="cellMarked('+cell+')" class="' + className + '"> ' + cell + ' </td>'
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>';
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML = strHTML;
}

function renderCell(location, value) {
    // Select the elCell and set the value
    var elCell = document.querySelector(`.cell-${location.i}-${location.j}`);
    elCell.innerHTML = value;
}

function setMinesNegsCount(board) {
for (var i = 0; i < board.length; i++){
    for (var j = 0; j < board.length; j++){
        for (var k = i - 1 ;k <= i + 1 ; k++){
            if (k === -1 || k === board.length) continue;
            for (var n = j - 1; n <= j + 1 ; n++){
            if (n === -1 || n === board.length) continue;
            if (i === k && j === n) continue;
            if (board[k][n].isMine === true) {board[i][j].minesAroundCount++}
        }
        }
    }
}
}