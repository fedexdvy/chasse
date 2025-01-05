let toggleNavStatus = false;
function login() {
    let getUsername = document.querySelector("#username");
    let getPasssword = document.querySelector("#password");
    let getSignInButton = document.querySelector("#sign-in-button");
    let getUsernameValue = getUsername.value;
    let getPassswordValue = getPasssword.value;
    let getIncorrectError = document.querySelector("#incorrect");
    let correctUsername;
    let correctPassword;


    if (getUsernameValue == "Marie124885", getPassswordValue == "Marmora125") {
        getSignInButton.setAttribute("onclick", "window.location.href = '/otp.html';");
        getIncorrectError.style.display = "none";

    } else if (getUsernameValue != "Marie124885", getPassswordValue != "Marmora125") {
        getIncorrectError.style.display = "flex";
    }



}