import type { Metadata } from "next";
import { Bellefair} from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travel to space",
  description: "Book a trip to space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.className} text-white antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
