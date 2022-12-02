import Link from "next/link";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

export default function Home({ posts }) {
  return (
    <div>
      <Banner />
      <div>
        {posts?.map((post, i) => (
          <div key={i} className="card w-full my-10 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post?.title}</h2>
              <p>{post?.body}</p>
            </div>
          </div>
        ))}
        <Link className="text-center block" href="/posts">
          <button className="btn btn-primary">See More</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps = async function () {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );

  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
