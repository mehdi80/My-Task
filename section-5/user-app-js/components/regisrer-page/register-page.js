"use strict";
const registerForm = document.getElementById("registerForm");
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function isValidPhone(phone) {
    const phonePattern = /^\d{11}$/;
    return phonePattern.test(phone);
}
registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email")
        .value;
    const phone = document.getElementById("phone")
        .value;
    const password = document.getElementById("password").value;
    const rePass = document.getElementById("repass")
        .value;
    const existingUsers = getUsers();
    const userExists = existingUsers.some((user) => user.userName === userName);
    if (userExists) {
        alert("این نام کاربری قبلا استفاده شده");
        return;
    }
    if (password !== rePass) {
        alert("رمز عبور و تکرار آن مطابقت ندارد");
        return;
    }
    if (!isValidEmail(email)) {
        alert("لطفا یک ایمیل معتبر وارد کنید");
        return;
    }
    if (!isValidPhone(phone)) {
        alert("لطفا یک شماره تلفن معنبر وارد کنید");
        return;
    }
    if (password.length < 6) {
        alert("رمز عبور باید حداقل 6 کاراکتر باشد");
        return;
    }
    addUser(firstName, lastName, userName, email, phone, password);
    alert("ثبت نام با موفقیت انجام شد");
    window.location.href = "../login-page/login-page.html";
});
