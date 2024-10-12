"use strict";
function loadUserDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");
    if (userId) {
        const users = getUsers();
        const user = users.find((user) => user.id === parseInt(userId));
        if (user) {
            displayUserDetails(user);
        }
        else {
            document.getElementById("userDetail").innerText =
                "کاربر پیدا نشد.";
        }
    }
    else {
        document.getElementById("userDetail").innerText =
            "ID کاربر مشخص نشده است.";
    }
}
function displayUserDetails(user) {
    const detailsDiv = document.getElementById("userDetail");
    detailsDiv.innerHTML = `
        <h2>${user.firstName} ${user.lastName}</h2>
        <p><strong>نام کاربری:</strong> ${user.userName}</p>
        <p><strong>ایمیل:</strong> ${user.email}</p>
        <p><strong>شماره تلفن:</strong> ${user.phone}</p>
    `;
}
function userListBack() {
    window.location.href = "../user-list/user-list.html";
}
function userLogout() {
    localStorage.removeItem("loggedInUser");
    alert("شما با موفقیت خارج شدید.");
    window.location.href = "../../index.html";
}
window.onload = loadUserDetails;
