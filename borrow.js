const rahimUddin ={
    name: 'Rahim Uddin',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + ' is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDey: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money
    }
}

const result = rahimUddin.exam();

const rafiqAhmed = {
    name: 'Rafiq Mia',
    money: 8000
}

const result2 = rahimUddin.exam.call(rafiqAhmed);
// console.log(result2);

const rafiqMoney = rahimUddin.treatDey.call(rafiqAhmed, 400, 50);
console.log(rafiqMoney);

const rafiqMoney2 = rahimUddin.treatDey.apply(rafiqAhmed, [1000, 100]);
console.log(rafiqMoney2);

const rafiqAliTreat = rahimUddin.treatDey.bind(rafiqAhmed);
const reamining = rafiqAliTreat(1000, 100);
console.log(reamining);