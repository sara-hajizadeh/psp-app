"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// Define the type for the session object
interface Session {
  data: {
    user?: {
      role?: string;
    };
  } | null;
  status: "loading" | "authenticated" | "unauthenticated";
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Close menu if clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".sidebar-menu") && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Clean up event listener on unmount or when menu closes
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // Use the session hook
  const session = useSession() as Session;

  return (
    <div className="lg:basis-1/5 2xl:basis-1/4">
      {/* Toggle button for mobile view */}
      <div className="md:hidden p-4">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>
      </div>

      {/* Sidebar overlay (background when menu is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Sidebar navigation */}
      <div
        className={`sidebar-menu fixed top-0 left-0 h-full bg-white text-black transition-transform duration-300 shadow-sm transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:fix md:w-1/5 2xl:w-1/4 z-50`}
      >
        {/* Close button inside menu for mobile */}
        <div className="md:hidden p-2">
          <button onClick={toggleMenu} aria-label="Close menu">
            <AiOutlineClose size={10} />
          </button>
        </div>

        {/* Company logo */}
        <Image
          className="mx-auto mt-3 lg:mt-8 h-20 w-auto"
          src="https://pspexpress.com/wp-content/uploads/2023/06/PSP-Logo-01-1.svg"
          alt="Your Company"
          height={80}
          width={160}
        />

        {/* Navigation menu */}
        <nav className="flex flex-col lg:px-8  p-4">
          <ul className="mt-3 lg:mt-9 after:space-y-6">
            <hr className="w-full my-2 " />

            <li className="w-full  lg:px-8 text-lg hover:bg-blue-50 p-4 rounded">
              <Link href="/list" className="" onClick={toggleMenu}>
                List
              </Link>
            </li>
            <hr className="w-full my-2 " />

            {/* Show setting option only for admin users */}
            {session?.data?.user?.role === "admin" && (
              <li className="w-full lg:px-8  text-lg hover:bg-blue-50 p-4 rounded">
                <Link href="/setting" className="" onClick={toggleMenu}>
                  Setting
                </Link>
              </li>
            )}
            {session?.data?.user?.role === "admin" && (
              <hr className="w-full my-2 " />
            )}
          </ul>

          {/* Sign out button */}
          <button
            onClick={() => {
              signOut();
              toggleMenu();
            }}
            className=" text-lg text-left p-4 lg:px-8 text-red-500 hover:bg-red-50 "
          >
            Sign Out
          </button>
        </nav>
      </div>
    </div>
  );
}
