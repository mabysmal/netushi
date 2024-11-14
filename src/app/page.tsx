// import Image from "next/image";
import CarouselSection from "./componentes/BannerSection";
import BusinessHoursSection from "./componentes/BusinessHoursSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="flex flex-wrap gap-8 p-4">
          {Array(100).fill('🍣 🥢 🍙').map((emoji, index) => (
            <span key={index} className="text-2xl">{emoji}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-col min-h-screen">
        <header className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sushi Empanizado</h1>
          <p className="text-xl text-red-500">La mejor fusión de sabores</p>
        </header>

        <CarouselSection></CarouselSection>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Ordena ahora</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#" className="bg-red-500 px-8 py-4 rounded-lg hover:bg-red-600 transition-colors">
              Uber Eats
            </a>
            <a href="#" className="bg-red-500 px-8 py-4 rounded-lg hover:bg-red-600 transition-colors">
              Rappi
            </a>
            <a href="#" className="bg-red-500 px-8 py-4 rounded-lg hover:bg-red-600 transition-colors">
              Didi Food
            </a>
          </div>
        </section>

        <section id="Horario" >
          <BusinessHoursSection></BusinessHoursSection>
        </section>

        <footer className="bg-black mt-2">
          <span className="flex justify-center text-center">
            Made by: <a href="https://mabs.dev/" target="_blank"> mabs.dev</a>
          </span>
        </footer>
        
      </div>
    </div>
  );
}

