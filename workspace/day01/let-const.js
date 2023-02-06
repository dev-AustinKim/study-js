const ON = 1;

function testConst() {
    // ON = 2; 변경이 안되는 상수이기 때문에 사용만 하자.
    console.log(ON);
}

function testLet() {
    let data = 10; // let은 중복선언이 안된다. but 값은 변경이 가능하다.
    // let data = 20;
    data = 20;
    console.log(data);
}

// 사용을 해야 결과가 나온다.
testLet(); 
testConst();

// 일단 let으로 만들고 이 함수 밖에서도 쓰고 싶다면 var를 쓰고 상수로 만들고 싶다면 const로 쓰고 전역변수로 만들고 싶다면 globalThis로 쓰자.
