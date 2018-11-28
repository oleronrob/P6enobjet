class Weapon {
    constructor(name, strength, picture) {
        this.name = name
        this.strength = strength
        this.picture = picture
    }

    draw(id) {
        $(id).append("<img></img>").addClass("anavailable " + this.name)// mettre id weapon
        $(id).children().attr("src", this.picture)
        $(id).children().addClass("weapon "+ this.name)
    }

    weaponPrise(selectCase, lastWeapon, nextWeapon) {
        $(selectCase).arme = nextWeapon
        $(selectCase + " img " + lastWeapon.name).attr("src", nextWeapon.picture)
        return
    }
}

