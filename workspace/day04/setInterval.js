// setInterval(callback, millis);
// 전달한 밀리초마다 실행, 무한 반복
let interval = setInterval(function() {
    console.log("실행중~");
}, 1000);


// 배너를 멈출 때 사용.
// 코드를 바로 실행하지 않고 일정 시간 기다린 후 실행해야하는 경우
setTimeout(function(){
    clearInterval(interval);
}, 3000);