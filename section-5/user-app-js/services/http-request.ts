import axios, { AxiosResponse } from "axios";

interface UserApi {
  id: number;
  name: string;
  email: string;
  phone: string;
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

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getApiUser = async (): Promise<UserApi[]> => {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response: AxiosResponse<UserApi[]> = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error("Error Get User :", err);
    throw err;
  }
};

const getAlbum = async (): Promise<Album[]> => {
  const url = "https://jsonplaceholder.typicode.com/albums";
  try {
    const response: AxiosResponse<Album[]> = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error("Error get Album :", err);
    throw err;
  }
};

const getComment = async (): Promise<Comment[]> => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  try {
    const response: AxiosResponse<Comment[]> = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error("Error get Comment :", err);
    throw err;
  }
};
const getPost = async (): Promise<Post[]> => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response: AxiosResponse<Post[]> = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error("Error get posts :", err);
    throw err;
  }
};
