console.log('--------------------1----------------------');
class Worker {
    firstName = '';
    secondName = '';
    rate = 0;
    days = 0;
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}

let w1 = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(w1.firstName);
console.log(w1.secondName);
console.log(w1.rate);
console.log(w1.days);
console.log(w1.getSalary());
let w2 = new Worker('Petro', 'Petriv', 20, 30);
console.log(w1.getSalary() + w2.getSalary());
/*------------------------------------------------------- */
console.log('------------------2------------------------');
class MyString {
    str = '';
    constructor(str) {
        this.str = str;
    }
    reverse() {
        return this.str.split('').reverse().join('')
    }
    ucFirst(st=this.str) {
        return st.split('')[0].toUpperCase() + st.substring(1)
    }
    ucWords() {
        let res = '';
        let mas = this.str.split(' ');
        for (const val of mas) {
            res =res+ this.ucFirst(val)+' '
        }
        return res.trimEnd()
    }
}
let st = new MyString('IVAN');
console.log(st.reverse());
let st1 = new MyString('arsenal');
console.log(st1.ucFirst());
let st2 = new MyString('arsenal arsenal arsenal');
console.log(st2.ucWords());
/*------------------------------------------------------------ */
console.log('------------------3------------------------');
class CoffeeMake {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    on() {
        console.log("Power on\n");
    }
    off() {
        console.log('Power off \n');
    }
    selftest() {
        console.log('Water present');
        console.log('Coffee present');
    }
    done() {
        console.log('Coffee is done \n');
    }
}

class Drop extends CoffeeMake {
    constructor(model,price){
    super(model,price)
    }
    filtertest() {
        console.log('filter ok');
    }
    make() {
        console.log('Make coffee \n')
    }
}

class Horn extends CoffeeMake {
    constructor(model,price){
        super(model,price)
        }
    hornOk() {
        console.log('Horn inserted');
    }
    cappuccino() {
        console.log('Make cappuccino \n')
    }
}

class Coffeemachina extends CoffeeMake {
    constructor(model,price){
        super(model,price)
        }
    container() {
        console.log('Container empty');
    }
    latte() {
        console.log('Make latte \n')
    }
}
let dr = new Drop('HD7462', 2500);
dr.on();
dr.selftest();
dr.filtertest();
dr.make();
dr.done();
dr.off();
console.log('---------------------------');

let hrn = new Horn('ECM-E10B', 3500);
hrn.on();
hrn.selftest();
hrn.hornOk();
hrn.cappuccino();
hrn.done();
hrn.off();
console.log('---------------------------');

let mac = new Coffeemachina('DELONGHI', 4500);
mac.on();
mac.selftest();
mac.container();
mac.latte();
mac.done();
mac.off();
