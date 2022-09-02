import Image from "next/future/image";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import { signIn, useSession, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import User_drop_down from "./user_drop_down";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [IsOpen, SetIsOpen] = useState(false);

  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex h-[72px] items-center px-10 md:px-12">
      <Image
        src="/images/logo.svg"
        height={80}
        width={80}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      {session && (
        <div className="hidden ml-10 mdb:flex items-center space-x-6">
          <a className="header-link group" onClick={() => router.push("/")}>
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          
          <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Watch History</span>
          </a>
         
        </div>
      )}

      {session ? (
        <User_drop_down />
      ) : (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 text-sm text-center"
          onClick={() => signIn()}
        >
          login
        </button>
      )}
    </header>
  );
}

export default Header;
