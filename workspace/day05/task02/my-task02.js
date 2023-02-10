globalThis.temp;

function confirm() {
    const input = document.querySelector("input").value;
    const write = document.querySelector(".result");
    let hangle = "공일이삼사오육칠팔구".split("");
    let inputSlice = input.split("");
    let result;
    for (let i = 0; i < input.length; i++) {
        if(inputSlice[i]==".") {
            write.innerHTML = result + ".";
        } else {
            if(hangle)
        }

    }
    write.innerHTML = result;
}

let result = inputSlice.map(input => {
    if(input==".") {
        
    }
    hangle[parseInt(input)]}
    ).join("");