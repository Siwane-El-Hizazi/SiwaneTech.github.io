// ========== Login & Sign Up Functions ========== //

document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
});

document.getElementById("register-form").addEventListener("submit", (event) => {
    event.preventDefault();
});

var preloader = document.getElementById("preloader");

function login() {
    preloader.style.display = "block";

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (email.length < 1) {
        preloader.style.display = "none";
        document.querySelector(".email-error").classList.remove("deactive");
        setTimeout(() => {
            document.querySelector(".email-error").classList.add("deactive");
        }, 10000);
    } else if (password.length < 1) {
        preloader.style.display = "none";
        document.querySelector(".pass-empty").classList.remove("deactive");
        setTimeout(() => {
            document.querySelector(".pass-empty").classList.add("deactive");
        }, 10000);
    } else {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( () => {
            location.href = "user.html";
        })
        .catch((error) => {
                preloader.style.display = "none";
                document.querySelector(".login-error").classList.remove("deactive");
                setTimeout(() => {
                    document.querySelector(".login-error").classList.add("deactive");
                }, 10000);
            });
    }
}

function signUp() {
    const email = document.getElementById("register-email").value;
    const name = document.getElementById("register-name").value;
    const password = document.getElementById("register-password").value;
    const cpassword = document.getElementById("register-cpassword").value;

    preloader.style.display = "block";

    if (email.length < 1) {
        preloader.style.display = "none";
        document.querySelector(".email-error").classList.remove("deactive");
        setTimeout(() => {
            document.querySelector(".email-error").classList.add("deactive");
        }, 10000);
    } else if (password != cpassword) {
        preloader.style.display = "none";
        document.querySelector(".pass-match").classList.remove("deactive");
        setTimeout(() => {
            document.querySelector(".pass-match").classList.add("deactive");
        }, 10000);
    } else if (password.length < 1) {
        preloader.style.display = "none";
        document.querySelector(".pass-empty").classList.remove("deactive");
        setTimeout(() => {
            document.querySelector(".pass-empty").classList.add("deactive");
        }, 10000);
    } else if (name.length < 1) {
        preloader.style.display = "none";
        document.querySelector(".name-empty").classList.remove("deactive");
        setTimeout(() => {
            document.querySelector(".name-empty").classList.add("deactive");
        }, 10000);
    }
    else if (password.length < 8) {
        preloader.style.display = "none";
        document.querySelector(".pass-must").classList.remove("deactive");
        setTimeout(() => {
            document.querySelector(".pass-must").classList.add("deactive");
        }, 10000);
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                firebase.auth().currentUser.sendEmailVerification();
                document.querySelector(".email-verify").classList.remove("deactive");
                setTimeout(() => {
                    document.querySelector(".email-verify").classList.add("deactive");
                }, 10000);
                document.getElementById("register-email").value = "";
                document.getElementById("register-password").value = "";
                document.getElementById("register-cpassword").value = "";
                preloader.style.display = "none";
            })
            .catch((error) => {
                preloader.style.display = "none";
                document.querySelector(".firebase-error").classList.remove("deactive");
                setTimeout(() => {
                    document.querySelector(".firebase-error").classList.add("deactive");
                }, 10000);
            });
    }
}

function forgotPass() {
    const email = document.getElementById("login-email").value;
    if (email.length < 1) {
        document.querySelector(".forgot-empty").classList.remove("deactive");
        setTimeout(() => {
            document.querySelector(".forgot-empty").classList.add("deactive");
        }, 10000);
    } else {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                document.querySelector(".forgot-link").classList.remove("deactive");
                setTimeout(() => {
                    document.querySelector(".forgot-link").classList.add("deactive");
                }, 10000);
            })
            .catch((error) => {
                document.querySelector(".forgot-error").classList.remove("deactive");
                setTimeout(() => {
                    document.querySelector(".forgot-error").classList.add("deactive");
                }, 10000);
            });
    }
}

function logout() {
    preloader.style.display = "block";

    firebase.auth().signOut();
    location.reload();
}