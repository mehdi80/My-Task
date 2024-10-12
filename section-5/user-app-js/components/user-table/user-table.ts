async function loadUsers(): Promise<void> {
  const users: UsersApi[] | null = await getApiUsers();
  const userList: HTMLElement = document.getElementById(
    "userList"
  ) as HTMLElement;

  if (users) {
    users.forEach((user: UsersApi): void => {
      const listItem: HTMLElement = document.createElement("tr") as HTMLElement;
      listItem.innerHTML = `
            <th scope="col">${user.id}</th>
            <td >${user.name}</td>
            <td >${user.username}</td>
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
}

async function showTasks(userId: number): Promise<void> {
  const tasks: Task[] | null = await getTasks();
  const userTasks: Task[] = tasks
    ? tasks.filter((task: Task): boolean => task.userId === userId)
    : [];
  const detailsDiv: HTMLElement = document.getElementById(
    "show"
  ) as HTMLElement;

  detailsDiv.innerHTML = `<h2>تسک‌های کاربر ${userId}</h2>`;

  if (userTasks.length === 0) {
    detailsDiv.innerHTML += "<p>هیچ تسکی وجود ندارد.</p>";
  } else {
    userTasks.forEach((task: Task): void => {
      detailsDiv.innerHTML += `<p>${task.title} - ${
        task.completed ? "انجام شده" : "انجام نشده"
      }</p>`;
    });
  }
}

async function showPosts(userId: number): Promise<void> {
  const posts: Post[] | null = await getPosts();
  const userPosts: Post[] = posts
    ? posts.filter((post: Post): boolean => post.userId === userId)
    : [];
  const detailsDiv: HTMLElement = document.getElementById(
    "show"
  ) as HTMLElement;

  detailsDiv.innerHTML = `<h2>پست‌های کاربر ${userId}</h2>`;

  if (userPosts.length === 0) {
    detailsDiv.innerHTML += "<p>هیچ پستی وجود ندارد.</p>";
  } else {
    for (const post of userPosts) {
      detailsDiv.innerHTML += `<h3>${post.title}</h3><p>${post.body}</p>`;

      const comments: Comment[] | null = await getComments(post.id);
      if (comments && comments.length > 0) {
        detailsDiv.innerHTML += "<strong>کامنت‌ها:</strong><ul>";
        comments.forEach((comment: Comment): void => {
          detailsDiv.innerHTML += `<li>${comment.body}</li>`;
        });
        detailsDiv.innerHTML += "</ul>";
      } else {
        detailsDiv.innerHTML += "<p>هیچ کامنتی وجود ندارد.</p>";
      }
    }
  }
}

async function showAlbums(userId: number): Promise<void> {
  const albums: Album[] | null = await getAlbums();
  const userAlbums: Album[] = albums
    ? albums.filter((album: Album): boolean => album.userId === userId)
    : [];

  const detailsDiv: HTMLElement = document.getElementById(
    "show"
  ) as HTMLElement;

  detailsDiv.innerHTML = `<h2>آلبوم‌های کاربر ${userId}</h2>`;

  if (userAlbums.length === 0) {
    detailsDiv.innerHTML += "<p>هیچ آلبومی وجود ندارد.</p>";
  } else {
    for (const album of userAlbums) {
      detailsDiv.innerHTML += `<h3>${album.title}</h3><ul>`;

      const photos: any[] | null = await getPhotos(album.id);
      if (photos && photos.length > 0) {
        photos.forEach((photo): void => {
          detailsDiv.innerHTML += `<li><img src="${photo.thumbnailUrl}" alt="${photo.title}"></li>`;
        });
      }
      detailsDiv.innerHTML += "</ul>";
    }
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
