import Image from 'next/image';
import { getDeliveryLinks, getBannerImages } from './utils/getData';
import CarouselSection from "./componentes/BannerSection";
import BusinessHoursSection from "./componentes/BusinessHoursSection";
import DeliveryButtons from "./componentes/DeliveryButtons";
import ImageBackground from './componentes/RepeatingBackground';
import NavBar from './componentes/NavBar';

export default async function Home() {
  const deliveryLinks = await getDeliveryLinks();
  const bannerImages = await getBannerImages();

  return (
    <main className="relative min-h-screen bg-black">
      <ImageBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen text-white">
        <NavBar logoSrc="/5.png" logoAlt="Netushi Logo" />
        <header className="container mx-auto px-4 py-8 text-center">
          <div className="w-[50%] max-w-[350px] mx-auto">
          </div>
        </header>

        <div className='flex justify-center' >
          <Image
              src='/5.png'
              width={500}
              height={500}
              alt='Netushi Logo'
              className="hidden md:w-[30%] md:h-auto md:flex"
              priority
          />
        </div>
        
        <CarouselSection bannerImages={bannerImages} />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Ordena ahora</h2>
          <DeliveryButtons deliveryLinks={deliveryLinks} />
        </section>

        <section id="Horario">
          <BusinessHoursSection />
        </section>

        <footer className="bg-black mt-2">
          <span className="flex justify-center text-center">
            Made by: <a href="https://mabs.dev/" target="_blank" rel="noopener noreferrer"> mabs.dev</a>
          </span>
        </footer>
      </div>
    </main>
  );
}
      {/* <div className="fixed inset-0 opacity-5 pointer-events-none" >
        <div className="flex flex-wrap gap-8 p-4">
          {Array(500).fill('🍣 🥢 🍙').map((emoji, index) => (
            <span key={index} className="text-2xl">{emoji}</span>
          ))}
        </div>
      </div> */}

     