const name = "Paula";

const nameEle = document.getElementById("name");

createNameSpans(name);

const letterEles = document.querySelectorAll(".letter");

console.log(letterEles);

lightUpName(1);

function createNameSpans(name) {
    let nameArray = name.split("");
    let htmlString = "";
    nameArray.forEach((letter, index) => {
        htmlString += `<span class="letter" id="letter-${index}">${letter}</span>`
    }) 
    nameEle.innerHTML = htmlString;
}

function lightUpName(n) {
    let lenght = letterEles.length;
    for(let i = 0; i < lenght; i++) {
        let ele = letterEles[i];
        let colors = ["red", "orange", "yellow", "green", "blue", "violet"]
        var x = (Math.floor(Math.random() * (6 - 0)) + 0 )
        let color = colors[x]
        ele.className = color;
    }
    setTimeout(function() {
        lightUpName(n+1);
    }, 400)
}
