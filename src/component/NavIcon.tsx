"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Modalcart } from "./modal";
import { useWixClient } from "@/hooks/useWixClient";

const NavIcon = () => {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const wixClient = useWixClient()

  const isLoggedIn = false;
  const isCartIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/");
    }
    setIsProfileOpen((prev) => !prev);
  };

  const login = async() => {
    const logindata = wixClient.auth.generateOAuthData("https://uprising-street.vercel.app/");
    localStorage.setItem("oauthRedirectData", JSON.stringify(logindata));
    const{authUrl} = await wixClient.auth.getAuthUrl(logindata)
    console.log(authUrl);
    
  }
  



  const handleCart = () => {
    if (!isCartIn) {
      router.push("/");
    }
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="profileimage"
        height={22}
        width={22}
        className="cursor-pointer"
        // onClick={handleProfile}
        onClick={login}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="notificationimage"
        height={22}
        width={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer ">
        <Image
          src="/cart.png"
          alt="cartimage"
          height={22}
          width={22}
          onClick={handleCart}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-[#F35C7A] rounded-full text-white flex items-center justify-center">2</div>
      </div>

      {isCartOpen && <Modalcart></Modalcart>}
    </div>
  );
};

export default NavIcon
