// // 동물원에 동물이 3마리 있다.
// // 각 동물별 정보는 이름, 종, 나이이다.

// function Animal(name, kind, age) {
//     this.name = name;
//     this.kind = kind;
//     this.age = age;
// }

// let tiger = new Animal("호호", "호랑이", 20);
// let cow = new Animal("소소", "소", 30);
// let dog = new Animal("개개", "개", 40);
// // 동물원의 동물 전체 평균 나이를 구한다.

// let animals = new Array();
// animals.push(tiger);
// animals.push(cow);
// animals.push(dog);

// let totalage = 0;
// let result = 0;
// function average(animals, callback) {
//     totalage = animals.map(v => v.age).reduce((total,age) => {return total + age;});

//     if(callback) {
//         result = totalage/animals.length;
//         callback(result);
//         return;
//     }
// }

// average(animals, e => console.log(e));


// // reduce(total, data)일 경우 항상 total값의 타입은 data의 타입과 동일하게 설정된다.



// 1~10까지 Array객체에 담은 후 짝수만 출력
// let arr = new Array(10).fill(0);
// for (let i = 0; i < arr.length; i++) {
//         arr[i] = i+1;
// }

// arr.filter(v => v%2==0).forEach(v=> console.log(v));

// 한글을 정수로 변경
// let kor = "사오육칠";

// let result = kor.split("").map(v => korean.indexOf(v)).join("");
// console.log(result);

// 정수를 한글로 변경
// let num = "1024";
// let korean = "공일이삼사오육칠팔구";

// console.log(num.split("").map(v => korean.charAt(parseInt(v))).join(""));
// 1~100까지 합 출력
// let datas = new Array(100).fill(0).map((v, i) => v = i+1);
// let result = datas.reduce((total, age) => total + age);
// console.log(result);

// 상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다.
// 1. 상품명과 가격, 개수는 A함수에서 전달받는다.
// 2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다.
// 3. A함수는 B함수를 callback함수로 전달받는다.


// function A(name, price, stock, callback) {
//     let totalPrice = price * stock;
//     if(callback) {
//         callback(name, totalPrice);
//         return;
//     }
// }

// A("피자", 5000, 5, function(name, total){
//     console.log(`${name} : ${total}`)
// });