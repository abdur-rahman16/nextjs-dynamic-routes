import React from "react";
import Link from "next/link";

const Navbar = () => {
  return <nav >
    <ol className="list-disc px-10 font-bold">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/products">Products</Link></li>
    </ol>

  </nav>;
};

export default Navbar;
