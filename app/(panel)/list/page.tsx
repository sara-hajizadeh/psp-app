import { Post } from "@/types/types";
import SingleCard from "@/components/list/single-card";

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <div className="min-h-screen bg-[#EEF4FF] p-6">
      <h1 className="text-2xl mt-3 lg:mt-8 mb-6">Posts List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <SingleCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
