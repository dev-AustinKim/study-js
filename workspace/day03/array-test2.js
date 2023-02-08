// 1. 제어문
// 2. callback 함수
// 3. arrow expression

// 1~10까지 Array객체에 담은 후 짝수만 출력------------------------------------------------------------------

// 1. 제어문
// let even = new Array(10);

// for (let i = 1; i < even.length+1; i++) {
//     if(i%2 == 0) {
//        even[i] = i
//         console.log(even[i]);
//     }
// }

// 3. arrow expression
// let even = new Array(10);
// for (let i = 0; i < even.length; i++) {
//      even[i] = i+1;
// }
// even.filter(i=> i%2 == 0).forEach(e => console.log(e));



// 한글을 정수로 변경------------------------------------------------------------------

// 1. 제어문
// let hangle = "일이삼사";
// let num = "0123456789";

// let numArr = hangle.split("");

// for (let i = 0; i < numArr.length; i++) {
//     switch(numArr[i]) {
//         case "공":
//             console.log(num.split("")[0]);
//             break;
//         case "일" :
//             console.log(num.split("")[1]);
//             break;
//         case "이" :
//             console.log(num.split("")[2]);
//             break;
//         case "삼" :
//             console.log(num.split("")[3]);
//             break;
//         case "사" :
//             console.log(num.split("")[4]);
//             break;           
//         case "오" :
//             console.log(num.split("")[5]);
//             break;
//         case "육" :
//             console.log(num.split("")[6]);
//             break;
//         case "칠" :
//             console.log(num.split("")[7]);
//             break;
//         case "팔" :
//             console.log(num.split("")[8]);
//             break;
//         case "구" :
//             console.log(num.split("")[9]);
//             break;
//         default :
//             break;
//     }
// }

// // 3. arrow expression
// let hangle = "일이삼사";
// let hangleFull = "공일이삼사오육칠팔구";

// console.log(hangle.split("").map(h => hangleFull.indexOf(h)).join(""));


// 정수를 한글로 변경------------------------------------------------------------------

// // 1. 제어문
// let num2 = "5678";
// let hangle2 = "공일이삼사오육칠팔구";

// let hanArr = num2.split("");

// for (let i = 0; i < hanArr.length; i++) {
//     switch(hanArr[i]) {
//         case "0":
//             console.log(hangle2.split("")[0]);
//             break;
//         case "1" :
//             console.log(hangle2.split("")[1]);
//             break;
//         case "2" :
//             console.log(hangle2.split("")[2]);
//             break;
//         case "3" :
//             console.log(hangle2.split("")[3]);
//             break;
//         case "4" :
//             console.log(hangle2.split("")[4]);
//             break;           
//         case "5" :
//             console.log(hangle2.split("")[5]);
//             break;
//         case "6" :
//             console.log(hangle2.split("")[6]);
//             break;
//         case "7" :
//             console.log(hangle2.split("")[7]);
//             break;
//         case "8" :
//             console.log(hangle2.split("")[8]);
//             break;
//         case "9" :
//             console.log(hangle2.split("")[9]);
//             break;
//         default :
//             break;
//     }
// }

// 2. callback
// function intToKor(nums, callback) { 
//     if(callback){
//         return callback(nums);
//     }
// }

// console.log(intToKor(num2, function (param) {
//     return param.split("").map(h => hangle2.charAt(parseInt(h))).join("");
// }));

// 3. arrow expression
// let num2 = "5678";
// let hangle2 = "공일이삼사오육칠팔구";

// console.log(num2.split("").map(h => hangle2.charAt(parseInt(h))).join(""));



// 1~100까지 합 출력------------------------------------------------------------------

// 1. 제어문
// let sum = 0;

// for (let i = 1; i < 101; i++) {
//      sum+= i;
// }
// console.log(sum);

// 3. arrow expression

// -------------------------------------------------------------------------------------------------------
// 3. arrow expression 강사님 버전 모음

// 1~10까지 Array객체에 담은 후 짝수만 출력
// let datas = new Array(10).fill(0).map((data, i) => i + 1);
// let datas = new Array(10).fill(0);
// let i = 0;
// datas.forEach(data => datas[i++] = i);
// datas.forEach(function(data, i){
//     datas[i] = i + 1;
// });
// datas.filter(data => data % 2 == 0).forEach(data => console.log(data));

// 한글을 정수로 변경
// let hangle = "공일이삼사오육칠팔구".split("");
// let input = "공공이사".split("");
// let result = input.map(input => hangle.indexOf(input)).join("");

// console.log(parseInt(result));


// 정수를 한글로 변경
// let hangle = "공일이삼사오육칠팔구".split("");
// let input = "1024".split("");
// let result = input.map(input => hangle[input]).join("");

// console.log(result);

// while(input != 0){
//     result = hangle[input % 10] + result;
//     input = parseInt(input / 10);
// }

// console.log(result);

// 1~100까지 합 출력
// let datas = new Array(100).fill(0).map((data, i) => i + 1);
// let result = datas.reduce((variable, data) => variable + data);
// console.log(result);