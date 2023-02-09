/* ohou_banner.html */
HTMLCollection.prototype.forEach = Array.prototype.forEach;
const banner = document.querySelector("div.banner");
const imageDiv = document.querySelectorAll("div.banner div");
const lastImageDiv = document.createElement("div");
const firstImageDiv = document.createElement("div");
const buttons = document.querySelectorAll(".buttons button");
let count = 1;
let auto = setInterval(autoSlide, 2000);
let temp = buttons[0];

HTMLCollection.prototype.forEach = Array.prototype.forEach;
buttons.forEach(button => {
    button.addEventListener("click", () => {
        clearInterval(auto);
        count = parseInt(button.value);
        changeButtonStyle();
        banner.style.transition = "transform 0.3s";
        banner.style.transform = `translate(${-2560 * count}px)`;
        auto = setInterval(autoSlide, 2000);
    });
});

imageDiv.forEach((div, i) => div.style.backgroundImage = `url(image/today${i+1}.png)`)

banner.appendChild(lastImageDiv);
lastImageDiv.style.backgroundImage = `url('image/today1.png')`;

banner.insertBefore(firstImageDiv, document.querySelector("div.banner div"));
firstImageDiv.style.backgroundImage = `url(image/today${imageDiv.length}.png)`

banner.style.transform = `translate(-2560px)`;

function changeButtonStyle() {
    if(temp){
        temp.style.width = "12px";
        temp.style.height = "12px";
        temp.style.background = "hsla(0,0%,100%,.7)";
    }
    buttons[count - 1].style.width = "16px";
    buttons[count - 1].style.height = "16px";
    buttons[count - 1].style.backgroundColor = "#fff";
    temp = buttons[count - 1];
}

function autoSlide(){
    banner.style.transition = "transform 0.3s";
    banner.style.transform = `translate(${-2560 * ++count}px)`;
    console.log(count);
    if(count == 12) {
        count = 1;
        setTimeout(function(){
            banner.style.transition = "transform 0s";
            banner.style.transform = "translate(-2560px)";
        }, 300);
    }
    changeButtonStyle();
}