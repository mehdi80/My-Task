interface UsersApi {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Post {
  userId: number;
  id: string;
  title: string;
  body: string;
}

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const response: Response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function getApiUsers(): Promise<UsersApi[] | null> {
  return await fetchData<UsersApi[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
}

async function getTasks(): Promise<Task[] | null> {
  return await fetchData<Task[]>("https://jsonplaceholder.typicode.com/todos");
}

async function getPosts(): Promise<Post[] | null> {
  return await fetchData<Post[]>("https://jsonplaceholder.typicode.com/posts");
}

async function getAlbums(): Promise<Album[] | null> {
  return await fetchData<Album[]>(
    "https://jsonplaceholder.typicode.com/albums"
  );
}

async function getComments(postId: string): Promise<Comment[] | null> {
  return await fetchData<Comment[]>(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
}
async function getPhotos(albumId: number): Promise<any[] | null> {
  return await fetchData<any[]>(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
  );
}
