class Weapon {
    constructor(name,num, strength, picture) {
        this.name = name
        this.number = num
        this.strength = strength
        this.picture = picture
    }

    draw(jid) {
        $(jid).append('<img id='+ this.name +'></img>').addClass('weapon')// mettre id weapon
        $('#'+this.name).attr("src", this.picture).addClass("weapon "+ this.name)
        this.position = $('#'+this.name)
    }

    weaponPrise(selectCase, lastWeapon, nextWeapon) {
        $(selectCase).arme = nextWeapon
        $(selectCase + " img " + lastWeapon.name).attr("src", nextWeapon.picture)
        return
    }
}

