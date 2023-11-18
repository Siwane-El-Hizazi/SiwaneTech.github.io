// ========== Dark Mode Switch Function ========== //

var modeBtn = document.querySelector(".modeBtn");
var body = document.querySelector("body");
var modeIcon = document.querySelector(".modeBtn i");

modeBtn.addEventListener("click", () => {
    if (localStorage.getItem("mode") != "dark") {
        localStorage.setItem("mode", "dark");
        body.classList.add("dark");
        modeIcon.classList.add("bxs-moon");
        modeIcon.classList.remove("bxs-sun");
    } else {
        localStorage.setItem("mode", "light");
        body.classList.remove("dark");
        modeIcon.classList.remove("bxs-moon");
        modeIcon.classList.add("bxs-sun");
    }
});




// ========== Account System Functions ========== //

const textInputs = document.querySelectorAll("input");

textInputs.forEach((textInput) => {
    textInput.addEventListener("focus", () => {
        let parent = textInput.parentNode;
        parent.classList.add("active");
    });

    textInput.addEventListener("blur", () => {
        let parent = textInput.parentNode;
        parent.classList.remove("active");
    });
});

//password show/hide button
const passwordInput = document.querySelector(".password-input");
const eyeBtn = document.querySelector(".eye-btn");

eyeBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeBtn.innerHTML = "<i class='bx bxs-show'></i>";
    } else {
        passwordInput.type = "password";
        eyeBtn.innerHTML = "<i class='bx bxs-hide'></i>";
    }
});

//sliding between sign-in form and sign-up form
const signUpBtn = document.querySelector(".sign-up-btn");
const signInBtn = document.querySelector(".sign-in-btn");
const signUpForm = document.querySelector(".sign-up-form");
const signInForm = document.querySelector(".sign-in-form");

signUpBtn.addEventListener("click", () => {
    signInForm.classList.add("hide");
    signUpForm.classList.add("show");
    signInForm.classList.remove("show");
});

signInBtn.addEventListener("click", () => {
    signInForm.classList.remove("hide");
    signUpForm.classList.remove("show");
    signInForm.classList.add("show");
});