window.onload = function (): void {
  const loggedInUser: string | null = localStorage.getItem("loggedInUser");

  if (!loggedInUser) {
    window.location.href = "../../index.html";
  } else {
    displayUserCards();
  }
};

async function displayUserCards(): Promise<void> {
  const localUsers: LocalUser[] = getUsers();
  const apiUser: UsersApi[] | null = await getApiUsers();
  const container: HTMLDivElement = document.getElementById(
    "userCards"
  ) as HTMLDivElement;

  localUsers.forEach((user: LocalUser): void => {
    const userCard: HTMLDivElement = createUserCard(user);
    container.appendChild(userCard);
  });

  if (apiUser) {
    apiUser.forEach((user: UsersApi): void => {
      const userCard: HTMLDivElement = createUserCard(user);
      container.appendChild(userCard);
    });
  }
}
function createUserCard(user: any): HTMLDivElement {
  const username: string = user.firstName + " " + user.lastName;
  const card: HTMLDivElement = document.createElement("div") as HTMLDivElement;
  card.className = "card mx-2 my-2";
  card.style.width = "15rem";

  card.innerHTML = `
        <img src="user-avatar.svg" style="width: 100px" class="card-img-top" alt="...">

        <ul class="list-group list-group-flush">
            <li class="list-group-item">${user.name || username}</li>
            <li class="list-group-item">${user.userName || user.username}</li>
        </ul>
        <div class="card-body">
            <a onclick="viewUserDetails(${
              user.id
            })" class="btn btn-primary ">مشاهده جزئیات</a>
        </div>
        
    `;

  return card;
}

function viewUserDetails(userId: string): void {
  window.location.href = `../user-detail/user-detail.html?id=${userId}`;
}

function userTable(): void {
  window.location.href = "../user-table/user-table.html";
}

function logout(): void {
  localStorage.removeItem("loggedInUser");
  alert("شما با موفقیت خارج شدید.");
  window.location.href = "../../index.html";
}
