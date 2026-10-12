"use client"
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const navigate=(name)=>{
    router.push(name)
  }

  return (
    <main className={styles.main}>
      <h1>Events, Function and State & {name}</h1>
      <button onClick={()=>val()}>Click Me</button>

      <Link href={"/login"}>Got to Login Page</Link>
      <Link href={"/about"}>Got to About Page</Link>
      <button onClick={()=>navigate("/login")}>Go to Login Page</button>
    </main>
  );
}

