"use strict";
function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getItem(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}
function removeItem(key) {
    localStorage.removeItem(key);
}
function clearStorage() {
    localStorage.clear();
}
function getUsers() {
    return getItem("users") || [];
}
function addUser(firstName, lastName, userName, email, phone, password) {
    const users = getUsers();
    const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 11;
    const newUser = {
        id: newUserId,
        firstName,
        lastName,
        userName,
        email,
        phone,
        password,
    };
    users.push(newUser);
    setItem("users", users);
}
