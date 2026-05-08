function checkLogin() {
    let user = localStorage.getItem("nickname");

    if (user) {
        document.getElementById("guestBox").style.display = "none";
        document.getElementById("userBox").style.display = "inline-block";
        document.getElementById("showUser").innerText = user;
    } else {
        document.getElementById("guestBox").style.display = "inline-block";
        document.getElementById("userBox").style.display = "none";
    }
}

function logout() {
    localStorage.removeItem("nickname");
    location.reload();
}

window.onload = function () {
    checkLogin();
};