"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Spinner from "../components/spinner/Spinner";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);
  const router = usePathname();
  const activePath = router.slice(1, router.length);
  return (
    <html lang="en">
      <head>
        <title>Alaa Ayaad</title>
      </head>

      {loading ? (
        <Spinner />
      ) : activePath.endsWith("_") ? (
        <body>
          {children}
        </body>
      ) : (
        <body>
          <Aside />
          <div className="main">
            <Header />
            <div className="res__div">{children}</div>
          </div>
        </body>
      )}
    </html>
  );
}
