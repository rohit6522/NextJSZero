"use client"
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {

  const [name,setName] = useState("Rohit");

  const val = (mango) =>{
    setName("OP Sing")
  }

  return (
    <main className={styles.main}>
      <h1>Events, Function and State & {name}</h1>
      <button onClick={()=>val()}>Click Me</button>
      <Link href={"/login"}>Got to Login Page</Link>
    </main>
  );
}

