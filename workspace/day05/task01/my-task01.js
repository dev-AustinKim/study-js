/* my-task01.html */

// 색을 넣기 위한 전체를 가져옴
const childAll = document.querySelectorAll("td.child");
const youthAll = document.querySelectorAll("td.youth");
const adultAll = document.querySelectorAll("td.adult");


function myClick() {
    const inputValue = document.getElementById("separate").value;
    switch(inputValue) {
        case "아동" :
            let myStar = childAll[0].innerHTML;
            childAll[0].parentElement.style.backgroundColor="red";
            childAll[0].innerHTML=`★${myStar}`;
            break;
        case "청소년" :
            youthAll[0].parentElement.style.backgroundColor="red";
            youthAll[0].innerHTML=`★${myStar}`;
            break;    
        case "성인" :
            adultAll[0].parentElement.style.backgroundColor="red";
            adultAll[0].innerHTML=`★${myStar}`;
            break;   
    }
}