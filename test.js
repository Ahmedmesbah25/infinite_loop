let mytext = document.querySelector("#text")

mytext.onfocus = function () {
    if (this.placeholder === "Your Name") {
        this.placeholder = ""
    }
}
mytext.onblur = function () {
    if (this.placeholder === "") {
        this.placeholder = "Your Name"
    }
}

let mytext2 = document.querySelector("#text2")

mytext2.onfocus = function () {
    if (this.placeholder === "Your Email") {
        this.placeholder = ""
    }
}
mytext2.onblur = function () {
    if (this.placeholder === "") {
        this.placeholder = "Your Email"
    }
}
let mytext3 = document.querySelector("#text3")

mytext3.onfocus = function () {
    if (this.placeholder === "Massage") {
        this.placeholder = ""
    }
}
mytext3.onblur = function () {
    if (this.placeholder === "") {
        this.placeholder = "Massage"
    }
}
console.log(mytext)

let mydown = document.querySelector(".fa-arrow-down")

mydown.onclick = function () {
    window.scrollTo({
        top: 9000,
        righr: 0,
        behavior: "smooth"
    })
}

console.log(mydown)


let myloop = document.querySelector("#loop").getAttribute("data")

i = 0

window.onload = function () {

    let set = setInterval(function () {
        document.getElementById("loop").textContent += myloop[i];
        i++;

        if (i > myloop.length - 1) {
            clearInterval(set)
        }
    }, 200)
}


console.log(myloop)

// close ane open nav 

let mybars = document.querySelector(".fa-bars")
let ul = document.querySelector("nav ul")
let close = document.querySelector(".close")

mybars.onclick =function() {
ul.classList.add("open")
}