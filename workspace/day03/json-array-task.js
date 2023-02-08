//  상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
//  JSON으로 변경시킨다.


// function Product(name, price, num) {
//     this.name = name;
//     this.price = price;
//     this.num = num;
// }

// let chip = new Product('매운새우깡', 1500, 3);
// let coffee = new Product('바닐라라떼', 4500, 5);
// let iceCream = new Product('하겐다즈', 5000, 2);

// let things = new Array(chip, coffee, iceCream);
// let thingsJSON = JSON.stringify(things);
// console.log(thingsJSON);


// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.

// function print(thingsJSON, callback){
//     let thingsJS = JSON.parse(thingsJSON);
//     if(callback) {
//         return callback(thingsJS);
//     }
// }

// function total(arr) {
//     arr.forEach(e => {
//         e.totalPrice = e.price * e.num;
//     });
//     return JSON.stringify(arr);
// }

// console.log(print(thingsJSON, total));

// ---------------------------------------------------------------------------------------------

//  상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
//  JSON으로 변경시킨다.

// function Product(name, price, num, productJSON) {
//     this.name = name;
//     this.price = price;
//     this.num = num;
//     this.toJSON = JSON.stringify(this);
// }

// let arrProduct = new Array();
// let jelly = new Product('젤리', 1500, 10).toJSON;
// let chocolate = new Product('초콜릿', 2000, 5).toJSON;
// let gum = new Product('풍선껌', 1000, 7).toJSON;
// arrProduct.push(jelly);
// arrProduct.push(chocolate);
// arrProduct.push(gum);

// console.log(arrProduct);

// // 각 상품별 총 가격을 구한 뒤 출력한다.
// // callback 함수를 사용한다.
// // 외부에서는 JSON 데이터가 전달된다.

// function getTotal(arrProducts, callback) {
//     let productJS= JSON.parse(arrProducts);
//     if(callback) {
//         callback(let total = (productJS.price * productJS.num);
//         return callback;
//     }
// }

// console.log(getTotal())




// 강사님 버전
// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let products = [
    new Product('참후레쉬', 1500, 90),
    new Product('참후레쉬', 1500, 60),
    new Product('참후레쉬', 1500, 30)
];

let productsJSON = JSON.stringify(products);

// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.
// function getTotals(productsJSON, callback) {
//     let products = JSON.parse(productsJSON);
//     let totals = products.map(product => product.price * product.stock); 
//     if(callback){
//         callback(totals);
//     }
// }

// // getTotals(productsJSON, function(totals) {totals.forEach(total => console.log(total))});
// //  => getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});
// getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});

// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
let file = require('fs');

file.writeFile('shop.json', productsJSON, 'utf-8', function(error) {
    if(error) {
        console.log(error)
    } else {
        console.log("성공!");
    }
});

var arr;

file.readFile('shop.json', 'utf-8', function(error, content) {
    if(error) {
        console.log(error);
    } else {
        arr = JSON.parse(content);
        var result = {
            totalPrice: 0,
            totalStock: 0
        };
        arr.forEach(e => {
            result.totalPrice += e.price;
            result.totalStock += e.stock;
        });

        file.writeFile('sum.json', JSON.stringify(result), 'utf-8', function(error) {
            if(error) {
                console.log(error)
            } else {
                console.log("성공!");
            }
        });
    }
});

