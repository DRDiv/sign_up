

var el1 = document.getElementById('password')
var el2 = document.getElementById('cpassword')
var ph = document.getElementById('phone')
var email = document.getElementById('email')
var but = document.getElementById('but')
var edu = document.getElementById('education')
var age = document.getElementById('age')
var gen = document.getElementById('gender')

const reg1 = /^(\+91|0|)[6-9](\d){9}$/;
const reg2 = /^[a-zA-Z]{1}[A-Za-z_.]*@[a-zA-Z]+(\.[a-zA-Z]+)?(\.ac\.in|\.com)$/;
but.addEventListener("click", () => {
    const num = ph.value;
    const id = email.value;

    if (!edu.value) {
        var c = document.getElementById('educationclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*invalid field"
            p.className = "error"
            c.appendChild(p)
        }
        alert("PLEASE SELECT EDUCATIONAL QUALIFICATION");
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
            p.textContent = "*invalid field"
            p.className = "error"
            c.appendChild(p)
        }
        alert("PLEASE SELECT GENDER");
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
            p.textContent = "*invalid field"
            p.className = "error"
            c.appendChild(p)
        }
        alert("PLEASE SELECT AGE");
    }
    else {
        var c = document.getElementById('ageclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
    }

    if (!reg1.test(num)) {
        var c = document.getElementById('phoneclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*invalid field"
            p.className = "error"
            c.appendChild(p)
        }
        alert("INVALID PHONE NUMBER");

    }
    else {
        var c = document.getElementById('phoneclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
    }

    if (el1.value != el2.value || el1.value == "" || el2.value == "") {
        var c = document.getElementById('passwordclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*invalid field"
            p.className = "error"
            c.appendChild(p)
        }
        alert("PASSWORD DO NOT MATCH")

    }
    else {
        var c = document.getElementById('passwordclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }
    }

    if (!reg2.test(id)) {
        var c = document.getElementById('emailclass')
        if (!c.querySelector("p")) {
            let p = document.createElement("p")
            p.textContent = "*invalid field"
            p.className = "error"
            c.appendChild(p)
        }
        alert("INVALID EMAIL ID");

    }
    else {
        var c = document.getElementById('emailclass')
        if (c.querySelector("p")) {
            c.removeChild(c.querySelector("p"));
        }

    }
})