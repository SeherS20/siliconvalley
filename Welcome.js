
function Logout() {
    window.location = "home.html"
    localStorage.removeItem("user_name")
}

user_name = localStorage.getItem("user_name")
document.getElementById("username").innerHTML = "Welcome, " + user_name + "!";