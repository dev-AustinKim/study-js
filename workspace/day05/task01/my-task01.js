/* my-task01.html */


// #EF5350 빨간색
// input.addEventListener("onclick", function() {
//     this.style.background = 'yellow';
//     p.style.fontsize = "30px";
//     p.style.border = "3px dashed red";
//     p.style.width = "200vw";
// });


const button = document.querySelector("fieldset button");
const input = document.querySelector("input");

// 색을 넣기 위한 전체를 가져옴
const childAll = document.querySelectorAll("td.child");
const youthAll = document.querySelectorAll("td.youth");
const adultAll = document.querySelectorAll("td.adult");
let temp;
button.addEventListener("click", function(e) {
    let inputValue = document.getElementById('separate').value;
    switch(inputValue) {
        case "아동" :
            let star = childAll[0].innerHTML;
            childAll[0].parentElement.style.backgroundColor="red";
            childAll[0].innerHTML=`★${star}`;
            break;
        case "청소년" :
            let star = youthAll[0].innerHTML;
            youthAll[0].parentElement.style.backgroundColor="red";
            youthAll[0].innerHTML=`★${star}`;
            break;    
        case "성인" :
            let star = adultAll[0].innerHTML;
            adultAll[0].parentElement.style.backgroundColor="red";
            adultAll[0].innerHTML=`★${star}`;
            break;   
});