const car = {
    wheels: 4,

    init() {
        console.log(`I have ${this.wheels}, my owner is ${this.name}`)
    }
}
const owner = Object.create(car)
owner.name = 'Margo'
owner.init()
console.log(owner.__proto__ === car)