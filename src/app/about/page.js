import Link from "next/link";

export default function About(){
  return(
    <div>
      <h1>This is my about page</h1>

      <hr />
      <Link href={"/about/aboutCollege"}>Go to ClgPage</Link> <br />
      <Link href={"/about/aboutCollege"}>Go to Student-PAges</Link>
    </div>
  )
}