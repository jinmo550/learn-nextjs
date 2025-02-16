"use client"

import { setConfig } from "next/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import style from "../styles/navigation.module.css"

export default function Navigation(){
  const path = usePathname();
  const [count,setCount] = useState(0)
  return(
  <nav className={style.nav}>
    <ul>
      <li>
        <Link href="/">Home</Link> {path === "/" ? "🥪":""}
      </li>
      <li>
        <Link href="/about-us">About US</Link> {path === "/about-us" ? "🥪":""}
        </li>
    </ul>
  </nav>
  );
}