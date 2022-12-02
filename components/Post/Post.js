import Link from "next/link";

export default function Post({ post: { title, id } }) {
  return (
    <div className="card w-full mt-10 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <Link href={`/posts/${id}`}>
            <button className="btn btn-primary">See details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
