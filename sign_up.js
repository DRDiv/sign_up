

var el1 = document.getElementById('password')
var el2 = document.getElementById('cpassword')
var ph = document.getElementById('phone')
var email = document.getElementById('email')
var but = document.getElementById('but')
var edu = document.getElementById('education')
var age = document.getElementById('age')
var gen = document.getElementById('gender')
var namein = document.getElementById('name')
var cityin = document.getElementById('city')
const reg1 = /^(\+91|0|)[6-9](\d){9}$/;
const reg2 = /^[a-zA-Z]{1}[A-Za-z_.]*@[a-zA-Z]+(\.[a-zA-Z]+)?(\.ac\.in|\.com)$/;
const reg3 = /^[A-Za-z\s\-']+$/;

const reg4 = /^[a-zA-Z]{3}[a-zA-Z_0-9]{0,}$/;

cityin.addEventListener('input', () => {
    var city = cityin.value;
    if (!reg3.test(city)) {
        var c = document.getElementById('cityclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*enter valid city"
            p.className = "error"
            c.appendChild(p)
        }
        
    }
    else {
        var c = document.getElementById('cityclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
    }
})
namein.addEventListener('input', () => {
    var name = namein.value;
    if (

        !reg4.test(name)) {
        var c = document.getElementById('nameclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*name should contain at least 3 letters,and underscore as special char"
            p.className = "error"
            c.appendChild(p)
        }

    }
    else {
        var c = document.getElementById('nameclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
    }
})
ph.addEventListener('input', () => {


    var num = ph.value;
    if (!reg1.test(num)) {
        var c = document.getElementById('phoneclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*must be valid indian number"
            p.className = "error"
            c.appendChild(p)
        }


    }
    else {
        var c = document.getElementById('phoneclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
    }
})
email.addEventListener('input', () => {
    var id = email.value;
    if (!reg2.test(id)) {
        var c = document.getElementById('emailclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*enter valid email"
            p.className = "error"
            c.appendChild(p)
        }


    }
    else {
        var c = document.getElementById('emailclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }

    }
})




but.addEventListener("click", () => {
    var city = cityin.value;
    if (city=="") {
        var c = document.getElementById('cityclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*enter city"
            p.className = "error"
            c.appendChild(p)
        }
        
    }
    else {
        var c = document.getElementById('cityclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
    }
    var name = namein.value;
    if (

        name=="") {
        var c = document.getElementById('nameclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*name should contain at least 3 letters,and underscore as special char"
            p.className = "error"
            c.appendChild(p)
        }

    }
    else {
        var c = document.getElementById('nameclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
    }

    var num = ph.value;
    if (num=="") {
        var c = document.getElementById('phoneclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*enter phone number"
            p.className = "error"
            c.appendChild(p)
        }


    }
    else {
        var c = document.getElementById('phoneclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
    }
    var id = email.value;
    if (id=="") {
        var c = document.getElementById('emailclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*enter email"
            p.className = "error"
            c.appendChild(p)
        }


    }
    else {
        var c = document.getElementById('emailclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }

    }

    if (!edu.value) {
        var c = document.getElementById('educationclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*select a field"
            p.className = "error"
            c.appendChild(p)
        }

    }
    else {
        var c = document.getElementById('educationclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
    }
    if (!gen.value) {
        var c = document.getElementById('genderclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*select a field"
            p.className = "error"
            c.appendChild(p)
        }

    }
    else {
        var c = document.getElementById('genderclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
    }
    if (!age.value) {
        var c = document.getElementById('ageclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*enter a valid age"
            p.className = "error"
            c.appendChild(p)
        }

    }
    else {
        var c = document.getElementById('ageclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
    }


    if (el1.value != el2.value || el1.value == "" || el2.value == "") {
        var c = document.getElementById('passwordclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*password do not match"
            p.className = "error"
            c.appendChild(p)
        }


    }
    else {
        var c = document.getElementById('passwordclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
    }







})
