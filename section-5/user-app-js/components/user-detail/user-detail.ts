function loadUserDetails(): void {
  const urlParams: URLSearchParams = new URLSearchParams(
    window.location.search
  );
  const userId: string | null = urlParams.get("id");

  if (userId) {
    const users: User[] = getUsers();
    const user: User | undefined = users.find(
      (user: User): boolean => user.id === parseInt(userId)
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

function displayUserDetails(user: User): void {
  const detailsDiv: HTMLElement = document.getElementById(
    "userDetail"
  ) as HTMLElement;
  detailsDiv.innerHTML = `
        <h2>${user.firstName} ${user.lastName}</h2>
        <p><strong>نام کاربری:</strong> ${user.userName}</p>
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
