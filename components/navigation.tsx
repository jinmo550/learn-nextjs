"use client"

import { setConfig } from "next/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation(){
  const path = usePathname();
  const [count,setCount] = useState(0)
  return(
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link> {path === "/" ? "🥪":""}
      </li>
      <li>
        <Link href="/about-us">About US</Link> {path === "/about-us" ? "🥪":""}
        </li>
        <button onClick={()=> setCount((c)=>c+1)}>{count}</button>
    </ul>
  </nav>
  );
}