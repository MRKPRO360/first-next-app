import Post from "../../components/Post/Post";

export default function posts({ posts }) {
  return (
    <div>
      <h1 className="text-2xl">The number of posts {posts.length}</h1>
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  );
}

export const getStaticProps = async function () {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
