let gametitle = "OC WAR GAME"
let nbRows = 10,
    nbCols = 10
let nbWeapons = 4
let tabboard = []
let nbWalls = 10
let maxMove = 3
let moveChoice = [[0, 1], [0, -1], [1, 0], [-1, 0]]


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
    new Weapon("weapon0", 10, "./pictures/weapon0.png"),
    new Weapon("weapon1", 15, "./pictures/weapon1.png"),
    new Weapon("weapon2", 20, "./pictures/weapon2.png"),
    new Weapon("weapon3", 25, "./pictures/weapon3.png"),
    new Weapon("weapon4", 30, "./pictures/weapon4.png")
]
let tabplayers = [new Player("", "player1", "", "", "./pictures/player1.png", tabweapon[0], "move"), new Player("", "player2", "", "", "./pictures/player2.png", tabweapon[0], "move")]

$(document).ready(function () {

    myGame.gamePage.displayGame()
    //InfoPlayer1.init()
    //InfoPlayer2.init()
    Board.drawCells()
    Board.drawWalls()
    Board.drawWeapons()
    Board.drawPlayers()
    //Player1.movablePlayer()
    resizeCellsOnBoard()

})
