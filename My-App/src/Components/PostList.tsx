import { useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const fetchPosts = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    setPosts(data);
  };
  return (
    <div className="container mb-4 m-5">
      Post List
      <button className="btn btn-danger mx-3" onClick={fetchPosts}>
        Fetch Posts
      </button>
      <ul className="list-group mt-4">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h4 className="text-success mb-4">{post.title}</h4>
            <p className="text-secondary">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostList;
