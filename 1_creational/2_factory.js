class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}
class StandardMembership {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}
class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

//three classes are really similar? one difference is this.cost = number
//three classes we can unite (combine) into one concept - factory

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }
    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name)

        member.type = type
        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}

const factory = new MemberFactory()
const members = [
    factory.create('Margo', 'premium'),
    factory.create('Leo', 'standard'),
    factory.create('Mia', 'standard'),
    factory.create('Vladimir' )
]
members.forEach(m => m.define())

// Margo (premium): 500
// Leo (standard): 150
// Mia (standard): 150
// Vladimir (simple): 50
