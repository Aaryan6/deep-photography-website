import Image from "next/image";
import Link from "next/link";

import { Zilla_Slab } from "next/font/google";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const lightfont = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "300", "500"],
});

export default function Navbar() {
  return (
    <Sheet>
      <nav className="py-4 md:py-10 px-4 md:px-12 flex justify-between items-center">
        <div className="">
          <Link href={"/"}>
            <Image
              src={"/logo2.jpg"}
              alt=""
              width={721}
              height={331}
              className="w-40 h-20 object-contain"
            />
          </Link>
        </div>
        <ul className="md:flex justify-between w-full max-w-3xl font-medium text-lg text-gray-300 hidden">
          <Link href={"/"} className="hover:text-white">
            <li className={lightfont.className}>Home</li>
          </Link>
          <Link href={"/wedding"} className="hover:text-white">
            <li className={lightfont.className}>Wedding</li>
          </Link>
          <Link href={"/pre-wedding"} className="hover:text-white">
            <li className={lightfont.className}>Pre-wedding</li>
          </Link>
          <Link href={"/maternity"} className="hover:text-white">
            <li className={lightfont.className}>Maternity shoot</li>
          </Link>
          <Link href={"/cinematic"} className="hover:text-white">
            <li className={lightfont.className}>Cinematic film</li>
          </Link>
          <Link href={"/contact"} className="hover:text-white">
            <li className={lightfont.className}>Contact</li>
          </Link>
        </ul>
        <SheetTrigger asChild className="flex md:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-white"
          >
            <line x1="21" x2="3" y1="6" y2="6" />
            <line x1="21" x2="9" y1="12" y2="12" />
            <line x1="21" x2="7" y1="18" y2="18" />
          </svg>
        </SheetTrigger>
        <SheetContent className="bg-black text-white">
          <ul className="grid place-content-center gap-y-4 h-full justify-between font-medium text-lg text-gray-300">
            <SheetClose asChild>
              <Link href={"/"} className="hover:text-white">
                <li className={lightfont.className}>Home</li>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/wedding"} className="hover:text-white">
                <li className={lightfont.className}>Wedding</li>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/pre-wedding"} className="hover:text-white">
                <li className={lightfont.className}>Pre-wedding</li>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/maternity"} className="hover:text-white">
                <li className={lightfont.className}>Maternity shoot</li>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/cinematic"} className="hover:text-white">
                <li className={lightfont.className}>Cinematic film</li>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/contact"} className="hover:text-white">
                <li className={lightfont.className}>Contact</li>
              </Link>
            </SheetClose>
          </ul>
        </SheetContent>
      </nav>
    </Sheet>
  );
}
