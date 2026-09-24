import Image from "next/image";
import NavLogo from "@/assets/logo.png";
import Link from "next/link";

function Navbar() {
  return (
    <div className="border-b border-gray-700">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center p-4">
          <Link href={"/"} className="flex items-center gap-2">
            <Image src={NavLogo} alt="Nav logo" height={30} width={30}></Image>
            <h1 className="text-2xl font-extrabold">FITLOG</h1>
          </Link>
          <div className="flex gap-2">
            <Link
              href={"#"}
              className="text-[#c1e540] font-bold bg-[#1b4112] px-3 py-2 rounded-3xl"
            >
              Workouts
            </Link>
            <Link
              href={"#"}
              className="text-[#c1e540] font-bold bg-[#1b4112] px-3 py-2 rounded-3xl"
            >
              My Plan
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <h1>
              Plan
              <span className="text-black bg-lime-500  px-3 py-1 ml-1 rounded-4xl">
                0
              </span>
            </h1>
            <h1>
              Saved
              <span className="text-black bg-lime-500  px-3 py-1 ml-1 rounded-4xl">
                0
              </span>
            </h1>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
