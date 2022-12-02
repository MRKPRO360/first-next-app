export default function Comments({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <h1 key={comment.id} className="my-2 text-xl ml-5">
          {comment.body}
        </h1>
      ))}
    </div>
  );
}

export const getServerSideProps = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();

  return {
    props: {
      comments: data,
    },
  };
};
