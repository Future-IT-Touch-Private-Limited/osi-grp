
import { Inter } from "next/font/google";
import "./globals.css";
import "./common.css"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WhatsapContact from "./components/WhatsapContact";
import Providers from "./components/Store/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Deals",
  description: "Travel Deals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
     
<Providers>
      <Nav/>
      {children}

      <Footer/>
      </Providers>
      </body>
    
    </html>
  );
}
