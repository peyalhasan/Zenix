import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth/auth";
import Logout from "./auth/Logout";

const Navbar = async ({ sideMenu }) => {
  const session = await auth();
  console.log(session);
  return (
    <nav className="">
      <Link href="/">
        <Image
          src="/Zenix.webp"
          alt="Zenix Logo"
          className="h-20"
          width={100}
          height={100}
        />
      </Link>
      {sideMenu && (
        <ul>
          <li>
            <Link href="#">Recommended Places</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Contact us</Link>
          </li>
          <li>
            <Link href="/bookings">Bookings</Link>
          </li>
          <li>
            {session?.user ? (
              <div>
                <Link href='/bookings'>
                  <span className="mx-1">{session?.user?.name}</span>
                </Link>
                <span> | </span>
                <Logout />
              </div>
            ) : (
              <Link href="/login" className="login">
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
