import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

interface Children {
   children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Children>) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Navbar />
            {children}
         </body>
      </html>
   );
}