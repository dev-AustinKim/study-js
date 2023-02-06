// var x = 20;  // 지역변수와 이름이 겹치지 않는 전역 변수

//global.x = 20; // Node.js에서의 최상위 객체(전역 객체)
// 우리는 지금 node를 쓰니까 global이 최상위 객체니까 그 객체안에 필드에서 x를 20으로 선언해주면 전역변수 x에 20이 들어간다.

// window.x = 20; // 브라우저에서의 최상위 객체(전역 객체)

// html에서도 사용할 수 있게 해준다.
globalThis.x = 20;  // global과 window 객체를 상황에 맞게 사용해주는 전역 객체.

// ※ 전역 변수는 웬만하면 var로 선언하지 말고 globalThis로 선언하자! ※

// node를 쓴다면 global로 전역변수를 선언해주고 html을 쓴다면 globalThis로 전역변수를 선언해주면 된다. (globalThis로 선언해도 node에서 사용할 수 있다.)
// 즉 안전하게 globalThis를 사용해주면 html에서든 node에서든 사용할 수 있다.

function f() {
    // var x = 10;
    // console.log(x);
    // console.log(this.x);
    // console.log(global.x);
    console.log(globalThis.x);

    // for(var i=0; i<10; i++) { // 여기서만 쓰지 않고 다른데에서도 쓸 거면 var, 함수 안에서만 쓸거라면 let(즉, for문 안에서만 쓴다면 let을 사용)

    for(let i=0; i<10; i++) { // 이건 for문 밖에 있는 console.log(i)의 결과가 undefined가 나온다. 
    
    }
    console.log(i);
}

f();