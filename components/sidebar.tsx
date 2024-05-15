"use client";

import { cn } from "@/lib/utils";
import { BoxesIcon, BriefcaseBusiness, DollarSign, HomeIcon, MapPinnedIcon, MinusCircle, Pen, PersonStanding, } from "lucide-react";
import { Montserrat } from "next/font/google";
// import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import FreeCounter from "./free-counter";

const monserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: BoxesIcon,
    href: "/dashboard",
    color: "text-purple-500",
  },
  {
    label: "Internal Category",
    icon: MapPinnedIcon,
    href: "/internalcategory",
    color: "text-red-500",
  },
  {
    label: "Trademark",
    icon: BriefcaseBusiness,
    href: "/trademark",
    color: "text-green-500",
  },
  {
    label: "Tax Residency",
    icon: HomeIcon,
    href: "/taxresidency",
    color: "text-sky-500",
  },
  {
    label: "Fringe Benefit Tax",
    icon: PersonStanding,
    href: "/fringe",
    color: "text-orange-500",
  },
  {
    label: "International Tax",
    icon: DollarSign,
    href: "/internationaltax",
    color: "text-purple-500",
  },
  {
    label: "General Deductions",
    icon: MinusCircle,
    href: "/generaldeduction",
    color: "text-pink-500",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 p-4 flex flex-col h-full bg-[#1b1b1b] text-white drop-shadow-xl">
      <Link
        href="/dashboard"
        className="flex flex-col items-center mt-2 justify-center pl-3 mb-6"
      >
        {/* <div className="relative w-14 h-14">
          <Image fill alt="Logo" src="/next.svg" />
        </div> */}

          <h1 className="text-orange-500 text-3xl font-extrabold">Cassandra</h1>
          <p className="text-sm">Your taxation helper</p>

      </Link>
      <div className="space-y-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 hover:drop-shadow-xl hover:rounded-lg transition",
              pathname === route.href
                ? "text-white bg-white/10 rounded-lg"
                : "text-zinc-400 rounded-lg"
            )}
          >
            <div className="flex items-center flex-1">
              <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
              {route.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
