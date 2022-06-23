const Fighter = require('./Fighter')

class Monster extends Fighter {
    constructor(name, strength, dexterity, image) {
    super(name, strength, dexterity, image)
    }
}

module.exports = Fighter;