import axios from "axios";
import { Posts } from "../types/dataTypes";

const instance = axios.create({
  baseURL: "https://ss-2y8e.onrender.com/",
});

export const getPosts = async (): Promise<Posts[]> => {
  const { data } = await instance.get("news");
  return data;
};
