"use server"

import { User2Icon } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";

// import { UserButton } from "@clerk/nextjs";
// import MobileSidebar from "./mobile-sidebar";
// import { getApiLimit } from "@/lib/api-limit";
// import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
//   const apiLimitCount = await getApiLimit() as number;
//   const isPro = await checkSubscription() as boolean;
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        {/* <UserButton afterSignOutUrl="/" /> */}
        <User2Icon />
      </div>
    </div>
  );
};
export default Navbar;
