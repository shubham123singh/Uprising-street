"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <Image
        src="/menu.png"
        height={28}
        width={28}
        alt="menu"
        className="cursor-pointer"
        onClick={handleClick}
      />
      {open && (
        <div className=" font-semibold absolute bg-gray-800 text-white left-0 top-20 w-full h-[cal(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">HomePage</Link>
          <Link href="/">Men</Link>
          <Link href="/">Women</Link>
          <Link href="/">Deals</Link>
          <Link href="/">Logout</Link>
          <Link href="/">cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
