// 프로퍼티 중 KEY에 ""가 있으면 JSON이고,
// 프로퍼티 중 KEY에 어떠한 따옴표도 없으면 JS Object이다.

// 일단 이것만 잘 기억하자!
// JSON.stringify(객체) : 객체를 JSON으로
// JSON.parse(JSON 문자열) : JSON을 객체로


// JS
let user = {name: "김동한", age: 26}
// JSON
let userJSON = JSON.stringify(user);
// JSON을 JS 객체로 변환
user = JSON.parse(userJSON);

console.log(user);
console.log(userJSON);
console.log(user.name);



