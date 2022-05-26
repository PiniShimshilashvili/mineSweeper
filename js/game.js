'use strict'

const BEGINNER = {
    grid:4,
    mines:2
}
const MEDIUM = {
    grid:8,
    mines:12
}
const EXPERT = {
    grid:12,
    mines:30
}
var gGame = { isOn: false, shownCount: 0, markedCount: 0, secsPassed: 0}
var gDifficulty
var gGrid
var empty
var num1
var num2
var num3
var num4
var num5
var num6
var num7
var num8

function init(){
    gGrid = buildGrid(gDifficulty)
printGrid(gGrid, ".board")
}

function cellClicked(elCell, i, j) {
    if (!gGame.isOn) return
    elCell[i][j].isShown = true
    if (elCell[i][j].isMine === true){
        gameOverLost()
    }
}
function cellMarked(elCell){
    if (!gGame.isOn) return
    if (elCell.isMarked === false) {
        elCell.isMarked === true
        document.querySelector(`.${elCell}`) += '<img src="image/flag.png" alt=""></img>'
    }
}

function gameOverLost(){
    console.log('Game Over')
    gGame = { isOn: false, shownCount: 0, markedCount: 0, secsPassed: 0}
    alert('GAME OVER')
}
