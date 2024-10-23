import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Outfit } from '@next/font/google'; // Outfit fontunu ekliyoruz

// Outfit fontunu yapılandırıyoruz
const outfit = Outfit({
  subsets: ['latin'], // Latin alfabesini kullanıyoruz
  weight: ['100','200','300','400', '500','600','700','800','900'], // Kullanmak istediğiniz font ağırlıklarını ekleyin
});

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <div className={outfit.className}> {/* Fontu uyguluyoruz */}
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </NextUIProvider>
  );
}
