"use client";

import { Notification } from "@/app/utils/notification";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


type NavigationItem = {
  path: string;
  icon: React.ReactNode;
  text: string;
};

type Navigate = {
  navigations: NavigationItem[];
};

const DashboardNavbar = ({ navigations }: Navigate) => {
  const pathname = usePathname();
  const notification = new Notification();
  const router = useRouter();
 

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    notification.success("Logged out successfully");
    router.push("/rider/login");
  };
  return (
    <div
      className={`
    ${
      pathname === "/rider/dashboard/home" &&
      "fixed z-99999 right-0 left-0 top-0 px-8"
    }
    lg:w-full md:w-full bg-white flex items-center shadow-md shadow-slate-700 rounded-md mb-4`}
    >
      <nav className="flex text-xl w-[95%] h-[50px] items-center">
        <h1 className="w-3/12 ml-2 text-2xl font-bold">Logo</h1>
        <ul className="w-9/12 flex items-center justify-between px-2 my-0 font-medium">
          {/* navigations  */}
          {navigations.map((nav, index) => (
            <li
              key={index}
              className={`border-slate-500 h-full hover:scale-102
              ${pathname === nav.path && "underline text-slate-500"}
              `}
            >
              <Link
                href={nav.path}
                className="flex gap-2 items-center justify-center"
              >
                {nav.icon}
                <p>{nav.text}</p>
              </Link>
            </li>
          ))}
          <button
            onClick={handleLogout}
            className="bg-slate-900 text-white px-4 py-2 rounded-md shadow-md shadow-slate-500 hover:cursor-pointer"
          >
            Logout
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
