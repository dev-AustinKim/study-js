// false로 취급되는 값: "", 0, null, undefined
function testFalse() {
    // JS에서는 작은 따옴표나 큰 따옴표나 똑같다.
    let data = "";
    let result;
    if(data) {
        result = "TRUE";
    } else {
        result = "FALSE";
    }
    console.log(result);
}

function compareType() {
    let data1 = "1", data2 = 1; // JS 에서는 ""안에 있는 값이 그냥 있는 값과 같다면 true가 나온다.

    // == : =을 2번 쓰면 값만 같다면 true가 나온다.
    // === : =을 3번 쓰면 타입까지 같아야 true가 나온다.
    // console.log(data1==data2)  
    console.log(data1===data2);
}

testFalse();
compareType();