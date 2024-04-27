import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween relative py-1 px-16 max-sm:px-2">
      <div  className="max-sm:flex max-sm:w-full max-sm:justify-between max-sm:items-center ">
      <Link href="/">
        <Image src="/bauLogo.jpg" alt="logo" width={300} height={35} className="max-sm:hidden"/>
        <Image src="/bauLogo.jpg" alt="logo" width={200} height={35} className="lg:hidden"/>
      </Link>
      <div className="lg:hidden border border-gray-300 rounded-md px-8 regular-16 text-black font-bold border-b-2 py-2">
      <Link href={"/register"} className="flex gap-2">
      <Image src='/register.png' alt='email' width='25' height='25'/>
      <p>Register</p>
      </Link>
      </div>
      </div>
      {/* <Image src="/halfa.PNG" alt="logo" width={300} height={15} />
      <Image src="/LEC.PNG" alt="logo" width={300} height={35} />
      <Image src="/austr.png" alt="logo" width={300} height={35} />
      <Image src="/CCIAT.jpg" alt="logo" width={150} height={15} /> */}



      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:border-b-2 hover:border-blue-500">
            {link.label}
          </Link>
        ))}
      </ul>

      {/* <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div> */}

      {/* <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      /> */}
    </nav>
  )
}

export default Navbar