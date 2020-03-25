document.querySelector("#form-box").addEventListener("submit", function(e) {
    e.preventDefault();

    const first = e.target.elements.firstName.value;
    const last = e.target.elements.lastName.value;
    const email = e.target.elements.email.value;
    const pass = e.target.elements.password.value;

    if (!first) {
        document.querySelector("#text-first").innerHTML =
            "First name cannot be empty!";
        document.querySelector("#icon-first").classList.add("required__icon");
        document.querySelector("#fName").classList.add("red-box");
    } else {
        document.querySelector("#text-first").innerHTML = "";
        document.querySelector("#fName").classList.remove("red-box");

        document
            .querySelector("#icon-first")
            .classList.remove("required__icon");
    }

    if (!last) {
        document.querySelector("#text-last").innerHTML =
            "Last name cannot be empty!";
        document.querySelector("#icon-last").classList.add("required__icon");
        document.querySelector("#lName").classList.add("red-box");
    } else {
        document.querySelector("#text-last").innerHTML = "";
        document.querySelector("#lName").classList.remove("red-box");

        document.querySelector("#icon-last").classList.remove("required__icon");
    }

    if (!email) {
        document.querySelector("#text-email").innerHTML =
            "Looks like this is not an email!";
        document.querySelector("#icon-email").classList.add("required__icon");
        document.querySelector("#email").classList.add("red-box");
    } else if (!validateEmail(email)) {
        document.querySelector("#text-email").innerHTML =
            "Looks like this is not an email!";
        document.querySelector("#icon-email").classList.add("required__icon");
        document.querySelector("#email").classList.add("red-box");
    } else {
        document.querySelector("#text-email").innerHTML = "";
        document.querySelector("#email").classList.remove("red-box");

        document
            .querySelector("#icon-email")
            .classList.remove("required__icon");
    }

    if (!pass) {
        document.querySelector("#text-password").innerHTML =
            "Password cannot be empty";
        document
            .querySelector("#icon-password")
            .classList.add("required__icon");
        document.querySelector("#password").classList.add("red-box");
    } else {
        document.querySelector("#text-password").innerHTML = "";
        document.querySelector("#password").classList.remove("red-box");

        document
            .querySelector("#icon-password")
            .classList.remove("required__icon");
    }
});

function validateEmail(email) {
    let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmail.test(String(email).toLowerCase());
}
