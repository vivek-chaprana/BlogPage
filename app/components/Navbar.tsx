import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub, FaLaptop } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-slate-700 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0" >
          <Link href="/" className="text-white/90 no-underline hover:text-white hover:underline-offset-4 hover:underline">
            Vivek Chaprana
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl " >
          <Link className="text-white/90 hover:text-white" href="https://twitter.com/Vickytooop">< FaTwitter /></Link>
          <Link className="text-white/90 hover:text-white" href="https://github.com/vivek-chaprana">< FaGithub /></Link>
          <Link className="text-white/90 hover:text-white" href="https://www.linkedin.com/in/vivek-chaprana/">< FaLinkedin /></Link>
          <Link className="text-white/90 hover:text-white" href="mailto:vivek2003ji@gmail.com">< FaLaptop /></Link>
        </div>
      </div>
    </nav>
  )
}
