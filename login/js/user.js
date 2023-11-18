// ========== User Profile & Verification ========== //

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const email = user.email;
        var userName = document.querySelector('.user-name');
        var userEmail = document.querySelector('.user-email');
        var userVerify = document.querySelector('.user-verify');
        var userUid = document.querySelector('.user-uid');

        var name = "";
        for (let i = 0; i < email.length; i++) {
            const element = email[i];
            if (element == "@") {
                break;
            } else if (element >= 0) {
                break;
            } else {
                name += email[i];
            }
        }

        userName.innerHTML = name.toUpperCase();

        userEmail.innerHTML = '<i class="bx bxs-envelope"></i> ' + email;
        userUid.innerHTML = '<i class="bx bx-at"></i> ' + user.uid;

        if (user.emailVerified == true) {
            userVerify.innerHTML = '<i class="bx bxs-check-circle"></i> Verified User';
        }
    } else {
        location.href = "/";
    }
})

function verification() {
    var preloader = document.getElementById('preloader');
    preloader.style.display = "block";
    var user = firebase.auth().currentUser;
    if (user) {
        if (user.emailVerified == true) {
            document.querySelector('.verify-done').classList.remove('deactive');
            setTimeout(() => {
                document.querySelector('.verify-done').classList.add('deactive')
            }, 10000);
            preloader.style.display = "none";
            console.log("Email already verified");
        } else {
            firebase.auth().currentUser.sendEmailVerification()
                .then(() => {
                    document.querySelector('.verify-send').classList.remove('deactive');
                    setTimeout(() => {
                        document.querySelector('.verify-send').classList.add('deactive')
                    }, 10000);
                    preloader.style.display = "none";
                })
                .catch((error) => {
                    document.querySelector('.verify-error').classList.remove('deactive');
                    setTimeout(() => {
                        document.querySelector('.verify-error').classList.add('deactive')
                    }, 10000);
                    preloader.style.display = "none";
                });
        }
        preloader.style.display = "none";
    }
}
