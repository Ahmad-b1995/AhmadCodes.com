// import { IPost, PostEndpoint, PostsQueryConfig } from "@/types/post.type";
import axiosInstance, { fetchData } from "./axios.config";

// Function to get all articles
export async function getAllPosts(options?: any): Promise<BlogData> {
  return fetchData<any>(`${process.env.NEXT_PUBLIC_BASE_URL}/article`, {
    method: "GET",
    ...options,
  });
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
