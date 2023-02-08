// 프로토타입
function Passenger(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}

let han = new Passenger('김동한', 26, 1);
let hong = new Passenger('홍길동', 40, 2);
let lee = new Passenger('이순신', 35, 3);

let train = new Array(han, hong, lee);
let trainJSON = JSON.stringify(train);
console.log(train);
console.log(trainJSON);




