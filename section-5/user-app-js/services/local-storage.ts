interface User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phone: string;
  password: string;
}

function setItem(key: string, value: User[]): void {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key: string) {
  const item: string | null = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

function removeItem(key: string): void {
  localStorage.removeItem(key);
}

function clearStorage(): void {
  localStorage.clear();
}

function getUsers(): User[] {
  return getItem("users") || [];
}

function addUser(
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  phone: string,
  password: string
): void {
  const users: User[] = getUsers();

  const newUserId: number =
    users.length > 0 ? users[users.length - 1].id + 1 : 1;

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
