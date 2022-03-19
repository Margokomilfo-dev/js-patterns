//for two version of code - old and new without braking

//old version
class OlsCalc {
    operation(t1, t2, operation){
        switch (operation){
            case 'add': return t1+ t2
            case 'sub': return t1-t2
            default: return NaN
        }
    }
}
const oldCalc = new OlsCalc()
console.log('oldCalc: ', oldCalc.operation(10, 5, 'add'))

//new version
class NewCalc {
    add (t1, t2) {
        return t1+t2
    }
    sub (t1, t2) {
        return t1-t2
    }
}
const newCalc = new NewCalc()
console.log('newCalc: ',newCalc.add(5, 10))

//Result ADAPTER for combine these old and new versions
class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }
    operation(t1, t2, operation){
        switch (operation){
            case 'add': return this.calc.add(t1, t2)
            case 'sub': return this.calc.sub(t1,t2)
            default: return NaN
        }
    }
}
const calc = new CalcAdapter()
console.log('adapter: ',calc.operation(25,10, 'sub'))
//summary:
//old interface but new functional