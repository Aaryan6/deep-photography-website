import Image from "next/image";
import Link from "next/link";

import { Zilla_Slab } from "next/font/google";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const lightfont = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "300", "500"],
});

export default function Navbar() {
  return (
    <Sheet>
      <nav className="py-4 md:py-8 px-4 md:px-12 flex justify-between items-center">
        <div className="">
          <Link href={"/"}>
            <Image
              src={"/logo2.jpg"}
              alt=""
              width={721}
              height={331}
              className="w-40 h-16 object-contain"
            />
          </Link>
        </div>
        <ul className="md:flex justify-between w-full max-w-3xl font-medium text-lg text-gray-300 hidden">
          <Link href={"/"} className="hover:text-white">
            <li className={lightfont.className}>Home</li>
          </Link>
          <Link href={"/wedding-shoot"} className="hover:text-white">
            <li className={lightfont.className}>Wedding</li>
          </Link>
          <Link href={"/pre-wedding-shoot"} className="hover:text-white">
            <li className={lightfont.className}>Pre-wedding</li>
          </Link>
          <Link href={"/maternity-shoot"} className="hover:text-white">
            <li className={lightfont.className}>Maternity shoot</li>
          </Link>
          <Link href={"/cinematic-film"} className="hover:text-white">
            <li className={lightfont.className}>Cinematic film</li>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none flex items-center">
              <span className={lightfont.className}>More</span>
              <IconDropdown className="w-5 h-5 mt-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black text-gray-300 border-none">
              <Link href={"/birthday-shoot"}>
                <DropdownMenuItem className="text-base cursor-pointer">
                  <span className={lightfont.className}>Birthday Shoot</span>
                </DropdownMenuItem>
              </Link>
              <Link href={"/anniversary-shoot"}>
                <DropdownMenuItem className="text-base cursor-pointer">
                  <span className={lightfont.className}>Anniversary Shoot</span>
                </DropdownMenuItem>
              </Link>
              <Link href={"/pre-birthday-shoot"}>
                <DropdownMenuItem className="text-base cursor-pointer">
                  <span className={lightfont.className}>
                    Pre-Birthday Shoot
                  </span>
                </DropdownMenuItem>
              </Link>
              <Link href={"/new-born-baby-shoot"}>
                <DropdownMenuItem className="text-base cursor-pointer">
                  <span className={lightfont.className}>
                    New born baby Shoot
                  </span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={"/contact"} className="hover:text-white -ml-3">
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
              <Link href={"/wedding-shoot"} className="hover:text-white">
                <li className={lightfont.className}>Wedding</li>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/pre-wedding-shoot"} className="hover:text-white">
                <li className={lightfont.className}>Pre-wedding</li>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/maternity-shoot"} className="hover:text-white">
                <li className={lightfont.className}>Maternity shoot</li>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/cinematic-film"} className="hover:text-white">
                <li className={lightfont.className}>Cinematic film</li>
              </Link>
            </SheetClose>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none flex items-center">
                <span className={lightfont.className}>More</span>
                <IconDropdown className="w-5 h-5 mt-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black text-gray-300 border-none">
                <Link href={"/birthday-shoot"}>
                  <DropdownMenuItem className="text-base cursor-pointer">
                    <span className={lightfont.className}>Birthday Shoot</span>
                  </DropdownMenuItem>
                </Link>
                <Link href={"/anniversary-shoot"}>
                  <DropdownMenuItem className="text-base cursor-pointer">
                    <span className={lightfont.className}>
                      Anniversary Shoot
                    </span>
                  </DropdownMenuItem>
                </Link>
                <Link href={"/pre-birthday-shoot"}>
                  <DropdownMenuItem className="text-base cursor-pointer">
                    <span className={lightfont.className}>
                      Pre-Birthday Shoot
                    </span>
                  </DropdownMenuItem>
                </Link>
                <Link href={"/new-born-baby-shoot"}>
                  <DropdownMenuItem className="text-base cursor-pointer">
                    <span className={lightfont.className}>
                      New born baby Shoot
                    </span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
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

function IconDropdown({ className, ...props }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
