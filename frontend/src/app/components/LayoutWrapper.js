'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import WhatsapContact from "./WhatsapContact";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Normalized path
  const normalizedPath = pathname?.toLowerCase().replace(/\/$/, '');
  const hideLayout = isClient && normalizedPath?.includes("consultancychandigarh");

  // // FULL DEBUG LOG:
  // useEffect(() => {
  //   console.log("==== LayoutWrapper Debug ====");
  //   console.log("isClient:", isClient);
  //   console.log("Raw pathname:", pathname);
  //   console.log("Normalized pathname:", normalizedPath);
  //   console.log("Hide layout condition met:", hideLayout);
  //   console.log("=============================");
  // }, [isClient, pathname]);

  if (!isClient) {
    // console.log("Waiting for hydration...");
    return null;
  }

  return (
    <>
      {!hideLayout && <Nav />}
      {children}
      {!hideLayout && <Footer />}
      {/* {!hideLayout && <WhatsapContact />} */}
    </>
  );
}
