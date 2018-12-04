class Player {
    constructor(name, title, row, col, picture, weapon, move) {
        this.name = name
        this.title = title
        this.id = ""
        this.row = row
        this.col = col
        this.picture = picture
        this.weapon = weapon
        this.action = move
    }

    draw(cellid) {

        $(cellid).append('<img id=' + this.title + ' src="' + this.picture + '" class="' + this.title + '"></img>')
        this.id = $('#' + this.title)
    }

    movablePlayer(pos) {
        let freeCell = [];
        for (let i = 0; i <= moveChoice.length - 1; i++) {
            for (let j = 1; j <= maxMove; j++) {
                let x = this.col + moveChoice[i][1] * j
                let y = this.row + moveChoice[i][0] * j
                let playerId = $("#board .row").eq(y).children().eq(x)
                if (x < 0 || x > nbCols - 1 || y < 0 || y > nbRows) {
                    break
                }
                if (playerId.hasClass('notfreeformove')) {
                    break
                } else {
                    freeCell.push(playerId, moveChoice[i], j)
                    playerId.addClass('movable')
                }
            }
        }
    }

    movePlayer(config) {
        let n = 0
        let affiche = function () {
            let oldposition = makeId(this.row, this.col)
            let newposition = makeId(this.row /*+ config[1][0]*/ , this.col /*+ config[1][1]*/ )
            this.id.remove()
            this.draw(newposition)
            this.id.css("opacity", "0")
            this.id.animate({
                opacity: "1"
            }, 1000)
        }
        for (let i = 1; i <= config[2]; i++) {
            let x = this.row
            let y = this.col
            tabboard[x + config[1][0]][y + config[1][1]].player = tabplayers[activeplayer]
            tabboard[x + config[1][0]][y + config[1][1]].isPlayer = true
            this.id.animate({
                opacity: "0"
            }, 800, affiche.bind(tabboard[x][y].player))
            tabboard[x][y].player = 0
            tabboard[x][y].isPlayer = false
            this.row = this.row + config[1][0]
            this.col = this.col + config[1][1]
        }
    }
}
