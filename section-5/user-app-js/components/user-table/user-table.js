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
window.onload = function () {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        window.location.href = "../../index.html";
    }
    else {
        loadUsers();
    }
};
function loadUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const localUsers = getUsers();
        const apiUsers = yield getApiUsers();
        const users = [...apiUsers, ...localUsers];
        const userList = document.getElementById("userList");
        if (users) {
            users.forEach((user) => {
                const username = user.firstName + " " + user.lastName;
                const listItem = document.createElement("tr");
                listItem.innerHTML = `
            <th>${user.id}</th>
            <td>${user.name || username}</td>
            <td>${user.username || user.userName}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>
                <button class="btn  btn-primary" onclick="showTasks(${user.id})">تسک</button>
                <button class="btn btn-danger" onclick="showPosts(${user.id})">پست</button>
                <button class="btn btn-warning" onclick="showAlbums(${user.id})">آلبوم</button>
            </td>
        `;
                userList.appendChild(listItem);
            });
        }
    });
}
function showTasks(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = yield getTasks();
        const userTasks = tasks
            ? tasks.filter((task) => task.userId === userId)
            : [];
        const detailsDiv = document.getElementById("show");
        detailsDiv.innerHTML = `<h2>تسک‌های کاربر ${userId}</h2>`;
        if (userTasks.length === 0) {
            detailsDiv.innerHTML += "<p>هیچ تسکی وجود ندارد.</p>";
        }
        else {
            userTasks.forEach((task) => {
                detailsDiv.innerHTML += `<p>${task.title} - ${task.completed ? "انجام شده" : "انجام نشده"}</p>`;
            });
        }
    });
}
function showPosts(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield getPosts();
        const userPosts = posts
            ? posts.filter((post) => post.userId === userId)
            : [];
        const detailsDiv = document.getElementById("show");
        detailsDiv.innerHTML = `<h2>پست‌های کاربر ${userId}</h2>`;
        if (userPosts.length === 0) {
            detailsDiv.innerHTML += "<p>هیچ پستی وجود ندارد.</p>";
        }
        else {
            for (const post of userPosts) {
                detailsDiv.innerHTML += `<h3>${post.title}</h3><p>${post.body}</p>`;
                const comments = yield getComments(post.id);
                if (comments && comments.length > 0) {
                    detailsDiv.innerHTML += "<strong>کامنت‌ها:</strong><ul>";
                    comments.forEach((comment) => {
                        detailsDiv.innerHTML += `<li>${comment.body}</li>`;
                    });
                    detailsDiv.innerHTML += "</ul>";
                }
                else {
                    detailsDiv.innerHTML += "<p>هیچ کامنتی وجود ندارد.</p>";
                }
            }
        }
    });
}
function showAlbums(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const albums = yield getAlbums();
        const userAlbums = albums
            ? albums.filter((album) => album.userId === userId)
            : [];
        const detailsDiv = document.getElementById("show");
        detailsDiv.innerHTML = `<h2>آلبوم‌های کاربر ${userId}</h2>`;
        if (userAlbums.length === 0) {
            detailsDiv.innerHTML += "<p>هیچ آلبومی وجود ندارد.</p>";
        }
        else {
            for (const album of userAlbums) {
                detailsDiv.innerHTML += `<h3>${album.title}</h3><ul>`;
                const photos = yield getPhotos(album.id);
                if (photos && photos.length > 0) {
                    photos.forEach((photo) => {
                        detailsDiv.innerHTML += `<li><img src="${photo.thumbnailUrl}" alt="${photo.title}"></li>`;
                    });
                }
                detailsDiv.innerHTML += "</ul>";
            }
        }
    });
}
function userList() {
    window.location.href = "../user-list/user-list.html";
}
function userTableLogout() {
    localStorage.removeItem("loggedInUser");
    alert("شما با موفقیت خارج شدید.");
    window.location.href = "../../index.html";
}
window.onload = loadUsers;
