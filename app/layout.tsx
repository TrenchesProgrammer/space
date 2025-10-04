import type { Metadata } from "next";
import "./globals.css";


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
        className={` text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
