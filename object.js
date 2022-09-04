// create object using  object literals
const player = {};
player.name = 'Sakib Khan';
player.specialty = 'batsman';
player.bat = function(){
    // console.log('swing your bat');
}
// console.log(player);
// player.bat();

const student = {
    name: 'Anas Khan',
    job: 'Teacher',
    ball: function(){
        // console.log('throw the ball')
    },
    salary: 10000
}

// 2. object constructor
const person = new Object();
// console.log(person);

// 3. object create method
// const item = Object.create(null);
const rahim = Object.create(student);
// console.log(rahim.friend);

// 4. class
class Person{
    name = 'abul';
    address = 'khilkhat dhaka';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(23);
console.log(person1);


// 5 Function

function Car(model, price){
    this.model = model;
    this.price = price;
}

const tesla = new Car('elon', 2000);