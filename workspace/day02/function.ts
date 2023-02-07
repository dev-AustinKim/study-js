/* JS에서는 오버로딩을 지원하지 않는다. */

let result = add(1, 3);
console.log(result);

result = add(1, 3, 4);
console.log(result);

/* 가변 인자 */
function add(...numbers: number[]) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}



// function add(number1, number2, number3) { // 오버로딩이 안된다. 마지막에 있는 함수가ㄴ 반영이 된다.
//     return number1 + number2 + number3;
// }

// /* 같은 이름으로 선언하게 되면 가장 최근에 선언된 함수가 적용된다. */
// /* undefined란 값이 있기 때문에 매개변수 값이 맞지 않아도 자바처럼 오류가 나지 않는다. */
// function add(number1, number2) { 
//     return number1 + number2;
// }


// typescript를 사용하고 싶을 때에는 다운로드 후 사용해야 한다. (위에서 아래로 사용. 사용하고싶은 파일에 cd로 들어가서 사용.)
// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// Set-ExecutionPolicy Unrestricted (관리자 권한으로 실행)
// tsc --init

// tsc function.ts : ts 파일을 js 파일로 바꿔서 ts 파일과 같은 이름의 js 파일로 새로 만들어준다.

intro("김동한", 26, "남자", "졸업생")

function intro(name: string, ...args: any[]) {
    console.log(`이름: ${name}`)
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
        
    }
}










