let gametitle = "OC WAR GAME"
let nbRows = 10,
    nbCols = 10
let nbWeapons = 4
let tabboard = []
let nbWalls = 10
let maxMove = 3
let moveChoice = [[0, 1], [0, -1], [1, 0], [-1, 0]]
let combatMode = false

// class game
class Game {
    constructor() {
        this.gamePage = new Page()
    }

}
let Board = new myBoard(nbRows, nbCols)
let myGame = new Game()
// ----------------create weapons----------------

let tabweapon = [
    new Weapon("weapon0", 0, 10, "./pictures/weapon0.png"),
    new Weapon("weapon1", 1, 15, "./pictures/weapon1.png"),
    new Weapon("weapon2", 2, 20, "./pictures/weapon2.png"),
    new Weapon("weapon3", 3, 25, "./pictures/weapon3.png"),
    new Weapon("weapon4", 4, 30, "./pictures/weapon4.png")
]
let tabplayers = [
    new Player("Player 1", "player1", "", "", "./pictures/player1.png", tabweapon[0], "move"),
    new Player("Player 2", "player2", "", "", "./pictures/player2.png", tabweapon[0], "move")]

let tabInfoplayers = [
    new InfoPlayer(tabplayers[0]),
    new InfoPlayer(tabplayers[1])]
let activeplayer = 0
$(document).ready(function () {

    myGame.gamePage.displayGame()
    tabInfoplayers[0].init()
    tabInfoplayers[1].init()
    Board.drawCells()
    Board.drawWalls()
    Board.drawWeapons()
    Board.drawPlayers()
    gameLaunch()
    //cellToClick(tabplayers[0])
    resizeCellsOnBoard()

})
