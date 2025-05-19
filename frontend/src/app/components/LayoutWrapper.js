'use client';

import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Footer from "./Footer";
import WhatsapContact from "./WhatsapContact";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Define routes where header/footer/whatsapp contact should be hidden
  const hideLayoutRoutes = ["/consultancy_chandigarh/"]; // add routes as needed
  console.log("pathname ",pathname);
  const hideLayout = hideLayoutRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Nav />}
      {children}
      {!hideLayout && <Footer />}
      {/* {!hideLayout && <WhatsapContact />} */}
    </>
  );
}
