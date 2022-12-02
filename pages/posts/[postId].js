import { useRouter } from "next/router";

export default function PostDetails({ post: { title, body, id } }) {
  const router = useRouter();

  const handleBack = function () {
    router.push("/posts");
  };

  return (
    <div className="card w-full mt-10 shadow-xl bg-blue-500 text-white">
      <div className="card-body">
        <h2 className="card-title">Title: {title}</h2>
        <p>Post id: {id}</p>
        <p>{body}</p>
        <div className="self-start">
          <button onClick={handleBack} className="btn btn-primary">
            Back to posts
          </button>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async function (context) {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );

  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await res.json();

  const paths = posts?.map((post) => ({
    params: {
      postId: `${post.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
