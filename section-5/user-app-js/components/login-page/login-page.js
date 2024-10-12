"use strict";
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    const users = getUsers();
    console.log(users);
    const user = users.find((user) => user.userName == userName && user.password == password);
    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "../user-list/user-list.html";
    }
    else {
        alert("نام کاربری یا رمز عبور اشتباه است.");
    }
});
