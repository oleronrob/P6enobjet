class cellOfBoard{
    constructor (cellNumber,cellRow,cellCol){
        this.id = cellNumber
        this.row = cellRow
        this.col = cellCol
        this.isWall = false
        this.isWeapon = false
        this.isPlayer = false
        this.weapon = 0
        this.player = 0

    }
    hasWall(){
        return this.hasClass('wall')
    }
    hasWeapon(){
        return this.hasClass('weapon')
        }
    hasPlayer(){
        return this.hasClass('player')
    }
    /*anaivalableCell(){
        this.freeForWall = false
        this.freeForPlayer = false
        this.freeForWeapon = false
        //this.addClass('wall')
    }*/
}
