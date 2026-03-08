"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SocialLogins = () => {
  const pathname = usePathname();

  const hanldeAuth = (provider) => {
    signIn(provider, {
      callbackUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/bookings`,
    });
  };

  const isLoginPage = pathname === "/login";
  const linkHref = isLoginPage ? "/register" : "/login";
  const linkText = isLoginPage ? "Register" : "Login";

  return (
    <>
      <div className="text-center text-xs text-gray-500">
        <Link className="text-sm font-semibold" href={linkHref}>
          {linkText}{" "}
        </Link>
        or Signup with
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => hanldeAuth("facebook")}
          className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
        >
          <Image src="/fb.png" alt="facebook" width={40} height={40} />
          <span>Facebook</span>
        </button>
        <button
          onClick={() => hanldeAuth("google")}
          className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
        >
          <Image src="/google.png" alt="google" width={40} height={40} />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;
