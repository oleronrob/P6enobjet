class InfoPlayer {
    constructor(player) {
        this.player = player
    }

    init() {
        let $player = $('<h1>' + this.player.name + '</h1>')
        let $pictureplayer = $('<img src=' + this.player.picture + '>')
        let id = "weaponOf" + this.player.title
        let $pictureweapon = $('<div><h2>Weapon</h2><img id=' + id + ' src=' + this.player.weapon.picture + '></div>')
        id = "life" + this.player.title
        let $life = $('<div><h2>Life</h2><div class="bglife"><div id=' + id + ' > </div></div></div>')
        let $action = $('<div class="action container"><button class="fight">Fight</button><button class="defend">Defend</button></div>')
        let thisinfoplayer = $('#' + ('info' + this.player.title))
        $player.appendTo(thisinfoplayer)
        $pictureplayer.appendTo(thisinfoplayer)
        $pictureweapon.appendTo(thisinfoplayer)
        $life.appendTo(thisinfoplayer)
        $action.appendTo(thisinfoplayer)
    }
}
