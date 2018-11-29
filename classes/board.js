class myBoard {
    constructor(nbRow, nbCol) {
        this.nbRow = nbRow
        this.nbCol = nbCol
        this.width = ""
        this.height = ""
        this.tab = []

    }

    drawCells() {
        let $row, $cell
        for (let i = 0; i <= this.nbRow - 1; i++) {
            $row = $("<div class='row'></div>")
            $row.attr("id", "row" + i)
            let tabrow = []
            for (let j = 0; j <= this.nbCol - 1; j++) {
                $cell = $('<div class="cell"></div>')
                $cell.attr("id", (i * nbCols + j).toString())
                $cell.appendTo($row)
                tabrow.push(new cellOfBoard((i * nbCols + j).toString(), i, j))
            }
            this.tab.push(tabrow)
            $row.appendTo("#board")
        }
        tabboard = this.tab
    }

    drawWalls() {
        for (let i = 1; i <= nbWalls; i++) {
            let id = randomCell()
            if (this.tab[id.row][id.col].isWall === true) {
                i--
            } else {
                $(id.jid).addClass('wall')
                this.tab[id.row][id.col].isWall = true
            }
        }
    }

    drawWeapons() {
        for (let i = 1; i <= nbWeapons; i++) {
            let id = randomCell()
            if (this.tab[id.row][id.col].isWall === true || this.tab[id.row][id.col].isWeapon === true) {
                i--
            } else {
                this.tab[id.row][id.col].isWeapon = true
                this.tab[id.row][id.col].weapon = tabweapon[i]
                tabweapon[i].draw(id.jid)
            }
        }
    }

    drawPlayers() {
        for (let i = 0; i <= tabplayers.length - 1; i++) {
            let id = cellFreeForPlayer()
            tabplayers[i].draw(id.jid)
            tabplayers[i].row = id.row
            tabplayers[i].col = id.col
            tabboard[id.row][id.col].isPlayer = true
            tabboard[id.row][id.col].player = tabplayers[i]
        }
    }
}
