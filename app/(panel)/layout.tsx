import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { SessionProvider } from "next-auth/react";
import Sidebar from "@/components/layout/sidebar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className="">
          <div className="flex flex-col lg:flex-row">
            <Sidebar />
            <div className="ml-0 h-screen lg:basis-4/5 2xl:basis-3/4 ">
              <main>{children}</main>
            </div>
          </div>
        </body>
      </SessionProvider>
    </html>
  );
}
