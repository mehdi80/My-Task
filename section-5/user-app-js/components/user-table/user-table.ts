const fakeData = {
  tasks: [
    { userId: 1, title: "تسک اول", completed: false },
    { userId: 1, title: "تسک دوم", completed: true },
    { userId: 2, title: "تسک سوم", completed: false },
  ],
  posts: [
    {
      userId: 1,
      title: "پست اول",
      content: "محتوای پست اول",
      comments: ["کامنت اول", "کامنت دوم"],
    },
    {
      userId: 2,
      title: "پست دوم",
      content: "محتوای پست دوم",
      comments: ["کامنت سوم"],
    },
  ],
  albums: [
    { userId: 1, title: "آلبوم اول", photos: ["عکس1.jpg", "عکس2.jpg"] },
    { userId: 2, title: "آلبوم دوم", photos: ["عکس3.jpg"] },
  ],
};

function loadUsers(): void {
  const users: User[] = getUsers();
  const userList: HTMLElement = document.getElementById(
    "userList"
  ) as HTMLElement;

  users.forEach((user: User): void => {
    const listItem: HTMLElement = document.createElement("tr") as HTMLElement;
    listItem.innerHTML = `
            <th scope="col">${user.id}</th>
            <td >${user.firstName} ${user.lastName}</td>
            <td >${user.userName}</td>
            <td >${user.email}</td>
            <td >${user.phone}</td>
            <td>
                <button class="btn btn-primary" onclick="showTasks(${user.id})">تسک</button>
                <button class="btn btn-danger" onclick="showPosts(${user.id})">پست</button>
                <button class="btn btn-warning" onclick="showAlbums(${user.id})">آلبوم</button>
            </td>
        `;
    userList.appendChild(listItem);
  });
}

function showTasks(userId: number): void {
  const userTasks = fakeData.tasks.filter((task) => task.userId === userId);
  const detailsDiv: HTMLElement = document.getElementById(
    "show"
  ) as HTMLElement;

  detailsDiv.innerHTML = `<h2>تسک‌های کاربر ${userId}</h2>`;

  if (userTasks.length === 0) {
    detailsDiv.innerHTML += "<p>هیچ تسکی وجود ندارد.</p>";
  } else {
    userTasks.forEach((task) => {
      detailsDiv.innerHTML += `<p>${task.title} - ${
        task.completed ? "انجام شده" : "انجام نشده"
      }</p>`;
    });
  }
}

function showPosts(userId: number): void {
  const userPosts = fakeData.posts.filter((post) => post.userId === userId);
  const detailsDiv: HTMLElement = document.getElementById(
    "show"
  ) as HTMLElement;

  detailsDiv.innerHTML = `<h2>پست‌های کاربر ${userId}</h2>`;

  if (userPosts.length === 0) {
    detailsDiv.innerHTML += "<p>هیچ پستی وجود ندارد.</p>";
  } else {
    userPosts.forEach((post): void => {
      detailsDiv.innerHTML += `<h3>${post.title}</h3><p>${post.content}</p>`;

      if (post.comments.length > 0) {
        detailsDiv.innerHTML += "<strong>کامنت‌ها:</strong><ul>";
        post.comments.forEach((comment): void => {
          detailsDiv.innerHTML += `<li>${comment}</li>`;
        });
        detailsDiv.innerHTML += "</ul>";
      } else {
        detailsDiv.innerHTML += "<p>هیچ کامنتی وجود ندارد.</p>";
      }
    });
  }
}

function showAlbums(userId: number): void {
  const userAlbums = fakeData.albums.filter(
    (album): boolean => album.userId === userId
  );
  const detailsDiv: HTMLElement = document.getElementById(
    "show"
  ) as HTMLElement;

  detailsDiv.innerHTML = `<h2>آلبوم‌های کاربر ${userId}</h2>`;

  if (userAlbums.length === 0) {
    detailsDiv.innerHTML += "<p>هیچ آلبومی وجود ندارد.</p>";
  } else {
    userAlbums.forEach((album) => {
      detailsDiv.innerHTML += `<h3>${album.title}</h3><ul>`;

      album.photos.forEach((photo: string): void => {
        detailsDiv.innerHTML += `<li>${photo}</li>`;
      });

      detailsDiv.innerHTML += "</ul>";
    });
  }
}

function userList(): void {
  window.location.href = "../user-list/user-list.html";
}
function userTableLogout(): void {
  localStorage.removeItem("loggedInUser");
  alert("شما با موفقیت خارج شدید.");
  window.location.href = "../../index.html";
}
window.onload = loadUsers;
