async function loadUserDetails(): Promise<void> {
  const urlParams: URLSearchParams = new URLSearchParams(
    window.location.search
  );
  const userId: string | null = urlParams.get("id");

  if (userId) {
    const localUsers: LocalUser[] = getUsers();
    const apiUsers: UsersApi[] | null = await getApiUsers();

    const users: (LocalUser | UsersApi)[] = [...localUsers, ...apiUsers!];

    const user: LocalUser | UsersApi | undefined = users.find(
      (user: LocalUser | UsersApi): boolean => user.id === parseInt(userId)
    );

    if (user) {
      displayUserDetails(user);
    } else {
      (document.getElementById("userDetail") as HTMLElement).innerText =
        "کاربر پیدا نشد.";
    }
  } else {
    (document.getElementById("userDetail") as HTMLElement).innerText =
      "ID کاربر مشخص نشده است.";
  }
}

function displayUserDetails(user: any): void {
  const username: string = user.firstName + " " + user.lastName;
  const detailsDiv: HTMLElement = document.getElementById(
    "userDetail"
  ) as HTMLElement;
  detailsDiv.innerHTML = `
        <h2>${user.name || username}</h2>
        <p><strong>نام کاربری:</strong> ${user.userName || user.username}</p>
        <p><strong>ایمیل:</strong> ${user.email}</p>
        <p><strong>شماره تلفن:</strong> ${user.phone}</p>
    `;
}

function userListBack(): void {
  window.location.href = "../user-list/user-list.html";
}

function userLogout(): void {
  localStorage.removeItem("loggedInUser");
  alert("شما با موفقیت خارج شدید.");
  window.location.href = "../../index.html";
}

window.onload = loadUserDetails;
