"use client"
import Link from "next/link";
import { useRouter } from "next/navigation"

export default function Login(){
  const router = useRouter();

  return(
    <div>
      <h1>Login Page</h1> <br /> <hr />
      <Link href="/">Go to Home Page</Link> <hr />

      <button onClick={()=>router.push("/login/loginStudent")} >Go to Student Login Page</button>
      <br /> <hr />
      <button onClick={()=>router.push("/login/loginTeacher")} >Go to Teacher Login Page</button>
    </div>
  )
}