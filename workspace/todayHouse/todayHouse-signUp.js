const input = document.getElementById("form-control");
const result = document.querySelector(".no-email");

const emailTitle = document.querySelector(".email");
const choice = document.querySelector(".choice");

const password = document.querySelector(".password-box");
const noPassword = document.querySelector(".no-password");
const noPasswordTitle = document.querySelector(".password-title");

const passwordCheckbox = document.querySelector(".password-check-box");
const passwordCheckTitle = document.querySelector(".password-check-title");
const noPasswordCheck = document.querySelector(".no-passwordCheck");


const nicknameTitle = document.querySelector(".nickname-title");
const nickname = document.querySelector(".nickname-box");
const noNickname = document.querySelector(".no-nickname");


input.addEventListener("blur", function() {
    if(!this.value) {
        result.innerHTML = "필수 입력 항목입니다.";
        result.style.color = "red";
        emailTitle.style.color = "red";
        input.style.outlineColor = "red";
        // choice.style.outlineColor = "red"; 선택해주세요 테두리가 빨개지지 않음
        // this.focus(); 오늘의 집 홈페이지는 안 써도 다른 부분을 클릭할 수 있다.
    }
});

password.addEventListener("blur", function() {
    if(!this.value) {
        noPassword.innerHTML = "필수 입력 항목입니다.";
        noPassword.style.color = "red";
        noPasswordTitle.style.color = "red";
    }
});

passwordCheckbox.addEventListener("blur", function() {
    if(!this.value) {
        noPasswordCheck.innerHTML = "확인을 위해 비밀번호를 한 번 더 입력해주세요.";
        noPasswordCheck.style.color = "red";
        passwordCheckTitle.style.color = "red";
    }
});

nickname.addEventListener("blur", function() {
    if(!this.value) {
        noNickname.innerHTML = "확인을 위해 비밀번호를 한 번 더 입력해주세요.";
        noNickname.style.color = "red";
        nicknameTitle.style.color = "red";
        nickname.outlineColor = "red";
    }
});
