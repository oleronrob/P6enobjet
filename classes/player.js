class Player {
    constructor(name, title, row, col, picture, weapon, move) {
        this.name = name
        this.title = title
        this.row = row
        this.col = col
        this.picture = picture
        this.weapon = weapon
        this.action = move



    }
    draw(cellid) {
        $(cellid).addClass(this.title)
        $(cellid).append('<img id=' + this.title + '></img>')
        $('#' + this.title).attr("src", this.picture).addClass(this.title)
        this.position = $('#' + this.title)

    }
    movablePlayer() {
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
}
