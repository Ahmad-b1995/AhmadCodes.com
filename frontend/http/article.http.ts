import { AxiosRequestConfig } from "axios";
import { fetchData } from "./axios.config";

export async function getAllPosts(
  options?: AxiosRequestConfig
): Promise<BlogData> {
  return fetchData<BlogData>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/article`,
    options
  );
}

// Function to find article by ID
export async function findPostById(
  id: number | string
): Promise<{ data: any }> {
  return fetchData<{ data: any }>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/article/${id}`,
    { method: "GET" }
  );
}
