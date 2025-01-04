import { AxiosRequestConfig } from "axios";
import { fetchData } from "./axios.config";

export async function getAllPosts(
  options?: AxiosRequestConfig
): Promise<Article[]> {
  return fetchData<Article[]>(
    `${process.env.BASE_URL}/article`,
    options
  );
}

// Function to find article by ID
export async function findPostById(
  id: number | string
): Promise<{ data: any }> {
  return fetchData<{ data: any }>(
    `${process.env.BASE_URL}/article/${id}`,
    { method: "GET" }
  );
}
