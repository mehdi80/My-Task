const loginForm: HTMLFormElement = document.getElementById(
  "loginForm"
) as HTMLFormElement;
loginForm.addEventListener("submit", (event: Event): void => {
  event.preventDefault();

  const userName: string = (
    document.getElementById("userName") as HTMLInputElement
  ).value;
  const password: string = (
    document.getElementById("password") as HTMLInputElement
  ).value;

  const users: LocalUser[] = getUsers();
  console.log(users);
  const user: LocalUser | undefined = users.find(
    (user: LocalUser) => user.userName == userName && user.password == password
  );

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "../user-list/user-list.html";
  } else {
    alert("نام کاربری یا رمز عبور اشتباه است.");
  }
});
