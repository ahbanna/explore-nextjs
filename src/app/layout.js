import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ansha Store",
  description: "The store is maintained by Ansha The Pappa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
