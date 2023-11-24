export default function Footer() {
  return (
    <div className="text-gray-300 max-w-7xl mx-auto px-4 md:px-10 md:py-10 py-4 flex justify-between md:items-center flex-col md:flex-row gap-y-4">
      <div className="">
        <p>&copy; 2023 by Deepak Yadav. Powered and secured by Sanjivani</p>
      </div>
      <div className="flex gap-x-6">
        <p>+91 89649 88220</p>
        <a
          href="https://instagram.com/photography_deepak_yadav?utm_source=qr&igshid=MThlNWY1MzQwNA=="
          target="_blank"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
