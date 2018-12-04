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

function cellToClick(posinit) {
    let cellPossible = []
    for (let i = 0; i <= moveChoice.length - 1; i++) {
        for (let j = 1; j <= maxMove; j++) {
            let x = posinit.row + moveChoice[i][0] * j
            let y = posinit.col + moveChoice[i][1] * j
            if (x < 0 || x > nbCols - 1 || y < 0 || y > nbRows - 1) {
                break
            }
            if (Board.tab[x][y].isWall === true || Board.tab[x][y].isPlayer === true) {
                break
            } else {
                cellPossible.push([Board.tab[x][y], moveChoice[i], j])
                //console.log('tabbord', Board.tab[x][y])
                $('#' + (x * nbCols + y).toString()).addClass('movable')
            }
        }
    }
    return clickOnCell(posinit, cellPossible)
}

function clickOnCell(posinit, cellpossible) {
    $(".movable").on("click", function (event) {
        $(".movable").off("click") // un seul clic
        $(".movable").toggleClass("movable")
        let clickedCell = ($(this).parent()).index() * nbCols + $(this).index(); // coordonnées du la case cliquée
        let x = $(this).parent().index()
        let y = $(this).index()
        for (let i = 0; i <= cellpossible.length; i++) {
            if ((cellpossible[i][0]).id === $(this).attr('id')) {
                console.log(this, i, cellpossible[i])
                return tabplayers[activeplayer].movePlayer(cellpossible[i])
            }
        }
    })
}

function makeId(x, y) {
    return "#" + (x * nbCols + y).toString()
}

function gameLaunch() {
    let combatMode = false
    if (combatMode === false) {
        cellToClick(tabplayers[activeplayer])
        combatMode = true
    }
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
