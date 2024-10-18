"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadUserDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get("id");
        if (userId) {
            const localUsers = getUsers();
            const apiUsers = yield getApiUsers();
            const users = [...localUsers, ...apiUsers];
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
    });
}
function displayUserDetails(user) {
    const username = user.firstName + " " + user.lastName;
    const detailsDiv = document.getElementById("userDetail");
    detailsDiv.innerHTML = `
        <h2>${user.name || username}</h2>
        <p><strong>نام کاربری:</strong> ${user.userName || user.username}</p>
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
