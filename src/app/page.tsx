import { getDeliveryLinks } from './utils/getData';
import CarouselSection from "./componentes/BannerSection";
import BusinessHoursSection from "./componentes/BusinessHoursSection";
import DeliveryButtons from "./componentes/DeliveryButtons";
import ImageBackground from './componentes/RepeatingBackground';

export default async function Home() {
  const deliveryLinks = await getDeliveryLinks();

  return (
    <main className="relative min-h-screen bg-black">
      <ImageBackground />
      
      {/* <div className="fixed inset-0 opacity-5 pointer-events-none" >
        <div className="flex flex-wrap gap-8 p-4">
          {Array(500).fill('🍣 🥢 🍙').map((emoji, index) => (
            <span key={index} className="text-2xl">{emoji}</span>
          ))}
        </div>
      </div> */}

      <div className="relative z-10 flex flex-col min-h-screen text-white">
        <header className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sushi Empanizado</h1>
          <p className="text-xl text-red-500">La mejor fusión de sabores</p>
        </header>

        <CarouselSection />

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
