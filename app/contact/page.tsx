import { Button } from "@/components/ui/button";
import { Cormorant_Garamond } from "next/font/google";
import Link from "next/link";

const lightfont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "300"],
});

export default function page() {
  return (
    <section className="text-white px-8 py-8 max-w-7xl mx-auto justify-between flex flex-col md:flex-row gap-y-20 md:gap-y-0">
      <div className="md:w-1/2">
        <div className="max-w-sm grid gap-y-4 mx-auto md:mx-0">
          <p className={`${lightfont.className} text-2xl`}>
            For inquiries about sessions and pricing fill out the form and
            someone will get back to you.
          </p>
          <a
            href="https://instagram.com/photography_deepak_yadav?utm_source=qr&igshid=MThlNWY1MzQwNA=="
            target="_blank"
            rel="noopener noreferrer"
            className={`${lightfont.className} text-xl mt-4 flex gap-x-3 cursor-pointer`}
          >
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
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            Instagram
          </a>
          <p className="mt-3">+91 89649 88220</p>
        </div>
      </div>
      <div className="md:w-1/2">
        <form className="grid gap-y-8 w-full max-w-lg mx-auto md:mx-0">
          <div className="grid gap-y-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="bg-transparent text-white border-b border-b-white outline-none py-2"
              placeholder="John Doe"
            />
          </div>
          <div className="grid gap-y-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="bg-transparent text-white border-b border-b-white outline-none py-2"
              placeholder="john@doe.com"
            />
          </div>
          <div className="grid gap-y-2">
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={5}
              className="bg-transparent text-white border-b border-b-white resize-none outline-none py-2"
              placeholder="Hi!"
            ></textarea>
          </div>
          <Button
            type="submit"
            className="bg-white text-black rounded-none hover:bg-gray-400"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
