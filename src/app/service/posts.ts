import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string; next: Post | null; prev: Post | null }; //Post type에 content 객체 추가

// 모든 포스트 불러오는 함수
export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

// main화면에 You may like 영역에 노출할 함수, featured:false인 post filter하여 리턴
export async function getUnFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

// main화면에 Featured posts 영역에 노출할 함수, featured:true인 post filter하여 리턴
export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

// post content md파일 불러오는 함수
export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts();
  //post.path === fileName 매칭하여 post찾음
  const post = posts.find((post) => post.path === fileName);
  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
}
