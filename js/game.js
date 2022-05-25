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

}