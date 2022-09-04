// console.log(this);
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


function clickHandler(){
    console.log('inside click handler', this);
}
document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this);
})