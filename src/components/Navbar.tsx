'use client';
import Image from "next/image";
import NavLogo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { FitContext } from "@/context/FitContext";

function Navbar() {
  const {todaylist, saveforlater} = useContext(FitContext)
  const pathname = usePathname()
  return (
    <div className="border-b border-gray-700 sticky top-0 z-50 bg-[#1d232a]">
      <div className="container mx-auto ">
        <nav className="flex justify-between items-center p-4">
          <Link href={"/"} className="flex items-center gap-2">
            <Image src={NavLogo} alt="Nav logo" height={30} width={30}></Image>
            <h1 className="text-2xl font-extrabold">FITLOG</h1>
          </Link>

          <div className="flex gap-2">
            <Link href={"/"} className={`px-3 py-2 font-bold rounded-3xl ${pathname === '/' && 'text-[#ccff00] bg-[#1b4112]'}`}>Workouts</Link>
            <Link
              href={"/my-plan"}
              className={`px-3 py-2 font-bold rounded-3xl ${pathname ==='/my-plan' && 'text-[#ccff00] bg-[#1b4112]'}`}
            >
              My Plan
            </Link>
          </div>
          <div className="flex items-center gap-4 font-bold">
            <Link href={"/my-plan"}>
              <h1>
                Plan
                <span className="text-black bg-[#ccff00]  px-3 py-1 ml-1 rounded-4xl">
                  {todaylist.length}
                </span>
              </h1>
            </Link>
            <Link href={"/my-plan"}>
              <h1>
                Saved
                <span className="outline outline-gray-500 px-3 py-1 ml-1 rounded-4xl">
                  {saveforlater.length}
                </span>
              </h1>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
