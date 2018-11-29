function randomCell() {
    let x = Math.floor((Math.random() * nbRows * nbCols))
    let id = {
        id: x,
        jid: ('#' + x.toString()),
        row: Math.floor(x / nbRows),
        col: Math.floor(x % nbCols)
    }
    return id;
}

function cellFreeForPlayer() {
    let id = randomCell()
    let testcell = Board.tab[id.row][id.col]
    let x, y
    if (testcell.isWall === true || testcell.isWeapon === true || testcell.isPlayer === true) {
        return cellFreeForPlayer()
    }
    for (let i = 0; i <= moveChoice.length - 1; i++) {
        x = id.row + moveChoice[i][1]
        y = id.col + moveChoice[i][0]
        if (x < 0 || x > nbCols - 1 || y < 0 || y > nbRows - 1) {
            return cellFreeForPlayer()
        } //console.log(x,y,Board.tab[x][y])
        if (Board.tab[x][y].isPlayer === true) {
            return cellFreeForPlayer()
        }
    }
    return id
}

function resizeCellsOnBoard() {
    let maxcellsize = ($(window).outerHeight() - $('header').outerHeight() - 200) / nbRows
    $('.cell').css({
        'max-height': maxcellsize + "px",
        'max-width': maxcellsize + "px"
    })
    let maxboardsize = maxcellsize * nbCols
    $('#board').css({
        'max-width': maxboardsize + "px"
    })
    $('.cell').css("height", maxcellsize + "px")
    $('.cell').css("width", maxcellsize - 2 + "px")
}
