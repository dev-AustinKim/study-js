// 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON 형식을 JS Object 타입으로 변환하여 각 프로퍼티를 출력한다.


function Product(name, price, num) {
    this.name = name;
    this.price = price;
    this.num = num;
}

let jelly = new Product('마이구미', 1500, 3);

let file = require('fs'); // 자바의 import같은 느낌이다.

// file.writeFile('product.json', JSON.stringify(jelly), 'utf-8', function(error) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("성공");
//     }
// });

file.readFile('product.json', 'utf-8', function(error, content) {
    if(error) {
        console.log(error);
    } else {
        console.log(JSON.parse(content));
    }
});


// 강사님 버전
// let file = require('fs');
// let product = {name: '지우개', price: 300, stock: 35000};

// // file.writeFile('product.json', JSON.stringify(product), 'utf-8', error => {});
// file.readFile('product.json', 'utf-8', (error, content) => {
//     console.log(JSON.parse(content));
// });
