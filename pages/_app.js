
import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";


export default function App({ Component, pageProps }) {


  
  return (
    <NextUIProvider>
     <Header/>
                  <Component {...pageProps} />
                  <Footer/>
    </NextUIProvider>
  );
}