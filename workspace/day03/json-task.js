// 동물원에 동물이 3마리 있다.
// 각 동물별 정보는 이름, 종, 나이이다.

// 동물원의 동물 전체 평균 나이를 구한다.

function Animal(name, kindOf, age) {
    this.name = name;
    this.kindOf = kindOf;
    this.age = age;
}

let lion = new Animal('민구', '사자', 26);
let rabbit = new Animal('욱성', '사자', 22);
let mouse = new Animal('민우', '사자', 25);

let animals = new Array();
animals.push(lion);
animals.push(rabbit);
animals.push(mouse);

animalsJSON = JSON.stringify(animals);

function totalAge(animalsJSON, callback) {
    let animalsJS = JSON.parse(animalsJSON);
    if(callback) {
        console.log(callback(animalsJS));
    }
}

// let result = 0;
// totalAge(animalsJSON, function (arr) {
//     arr.forEach(e => {
//         result += e.age;
//     });
//     return result/3;
// });
let result = 0;
// totalAge(animalsJSON, function (arr) {
//     let total = arr.map(e => e.age).reduce((total, e) => {return total+e});
//     return total/arr.length;
// });
totalAge(animalsJSON, arr => {
    let total = arr.map(e => e.age).reduce((total, e) => {return total+e});
    return total/arr.length;
});


// 강사님 버전
// 동물원에 동물이 3마리 있다.
// 각 동물별 정보는 이름, 종, 나이이다.
function Animal(name, kind, age) {
    this.name = name;
    this.kind = kind;
    this.age = age;
}

let animals = [
    new Animal('구름이', '양', 4),
    new Animal('뽀삐', '소', 8),
    new Animal('바둑이', '기린', 9)
];

let animalsJSON = JSON.stringify(animals);

// 동물원의 동물 전체 평균 나이를 구한다.
function average(animalsJSON, callback) {
    let animals = JSON.parse(animalsJSON);
    // reduce(total, data)일 경우 항상 total값의 타입은 data의 타입과 동일하게 설정된다.
    let total = animals.map(animal => animal.age).reduce((total, age) => total + age);
    let average = total / animals.length;
    if(callback) {
        callback(average);
    }
    return average;
}


// 나중에 DOM으로 화면으로 보내주기 위해서 기능과 출력을 나누는 연습을 하는 것이다.
// 따라서 콜백 함수는 보통 화면으로 출력하기만 하자! console.log만 해주자
average(animalsJSON, average => console.log(average));