import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import { SearchBar } from "./SearchBar";
import { NavIcon } from "./NavIcon";

const NavBar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/** MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide ">LAMA</div>
        </Link>
        <Menu />
      </div>

      {/** BIGGER SCREEN */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/** LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo-image.png"
              alt="logo-image"
              height={24}
              width={24}
            />
            <div className="text-2xl tracking-wide ">LAMA</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">HomePage</Link>
            <Link href="/">Men</Link>
            <Link href="/">Women</Link>
            <Link href="/">Deals</Link>
          </div>
        </div>
        {/** RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
