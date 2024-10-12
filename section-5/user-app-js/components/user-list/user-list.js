"use strict";
window.onload = function () {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        window.location.href = "../../index.html";
    }
    else {
        displayUserCards();
    }
};
function displayUserCards() {
    const users = getUsers();
    const container = document.getElementById("userCards");
    users.forEach((user) => {
        const userCard = createUserCard(user);
        container.appendChild(userCard);
    });
}
function createUserCard(user) {
    const card = document.createElement("div");
    card.className = "card mx-2";
    card.style.width = "15rem";
    card.innerHTML = `
        <img src="user-avatar.svg" style="width: 100px" class="card-img-top" alt="...">

        <ul class="list-group list-group-flush">
            <li class="list-group-item">${user.firstName} ${user.lastName}</li>
            <li class="list-group-item">${user.userName}</li>
        </ul>
        <div class="card-body">
            <a onclick="viewUserDetails(${user.id})" class="btn btn-primary ">مشاهده جزئیات</a>
        </div>
        
    `;
    return card;
}
function viewUserDetails(userId) {
    window.location.href = `../user-detail/user-detail.html?id=${userId}`;
}
function userTable() {
    window.location.href = "../user-table/user-table.html";
}
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("شما با موفقیت خارج شدید.");
    window.location.href = "../../index.html";
}
