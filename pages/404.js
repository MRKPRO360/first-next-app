import Image from "next/image";
import Link from "next/link";

export default function error() {
  return (
    <div>
      <Image width="1440" height={100} src="/404.jpg" />
      <Link href="/">
        <button className="btn btn-primary">Back to home</button>
      </Link>
    </div>
  );
}
