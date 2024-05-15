import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { cn } from "@/lib/utils";
// import { usePathname } from "next/navigation";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Aus Tax AI",
  description: "Made By Qazi Adan",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  return (
    // <ClerkProvider>
    
      <html lang="en">
        <body className={cn("bg-[#3d3d3c]",inter.className)}>{children}</body>
      </html>
    // </ClerkProvider>
  );
}
