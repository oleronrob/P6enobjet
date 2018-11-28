class cellOfBoard{
    constructor (id,row,col){
        this.id = id
        this.row = row
        this.col = col
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
