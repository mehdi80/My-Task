const registerForm: HTMLFormElement = document.getElementById(
  "registerForm"
) as HTMLFormElement;

function isValidEmail(email: string): boolean {
  const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPhone(phone: string) {
  const phonePattern: RegExp = /^\d{11}$/;
  return phonePattern.test(phone);
}

registerForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const firstName: string = (
    document.getElementById("firstName") as HTMLInputElement
  ).value;
  const lastName: string = (
    document.getElementById("lastName") as HTMLInputElement
  ).value;
  const userName: string = (
    document.getElementById("userName") as HTMLInputElement
  ).value;
  const email: string = (document.getElementById("email") as HTMLInputElement)
    .value;
  const phone: string = (document.getElementById("phone") as HTMLInputElement)
    .value;
  const password: string = (
    document.getElementById("password") as HTMLInputElement
  ).value;
  const rePass: string = (document.getElementById("repass") as HTMLInputElement)
    .value;

  const existingUsers: LocalUser[] = getUsers();
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
