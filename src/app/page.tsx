import Image from 'next/image';
import { getDeliveryLinks, getBannerImages } from './utils/getData';
import CarouselSection from "./componentes/BannerSection";
import DeliveryButtons from "./componentes/DeliveryButtons";
import ImageBackground from './componentes/RepeatingBackground';
import NavBar from './componentes/NavBar';
import Head from 'next/head';
import fs from 'fs';
import { getBusinessHours } from './utils/getData';



export default async function Home() {
  const deliveryLinks = await getDeliveryLinks();
  const bannerImages = getBannerImages();
  const businessHours = await getBusinessHours();


  //CHECANDO QUE LAS IMAGENES EXISTAN
  console.log('Delivery Links:', deliveryLinks);
  console.log('Banner Images:', bannerImages);

  if (!businessHours) {
    // Manejo del caso cuando no hay datos
    return <div>Error cargando horarios</div>;
  }
  
  bannerImages.forEach(img => {
    const publicPath = `public${img}`;
    const exists = fs.existsSync(publicPath);
    console.log(`Image ${img} exists: ${exists}`);
  });

  return (
    <main className="relative min-h-screen bg-black">
      <Head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <title>Netushi | Sushi to Go en Guadalupe</title>
        <meta name="description" content="Prueba el mejor sushi empanizado en Guadalupe, Nuevo León. Deliciosos rollos fritos, fríos y más." />
        <meta name="keywords" content="sushi, sushi frito, restaurante, Guadalupe, Nuevo León" />
        <meta name="author" content="Netushi" />
      </Head>
      <ImageBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen text-white">
        <NavBar logoSrc="/Netushi-Logo.png" logoAlt="Netushi Logo" />


        <div className='flex justify-center' >
          <Image
              src='/Netushi-Logo.png'
              width={500}
              height={500}
              alt='Netushi Logo'
              className="w-[45%] flex md:w-[15%] md:h-auto md:flex mt-6"
              priority
          />
          
        </div>
        <h1 className='font-gotham text-3xl text-center'> Sushi To Go</h1>
        <h2 className='font-gotham text-xl text-center'> en Guadalupe, Nuevo León</h2>
        
        {/* VERIFICACION VISUAL DE IMAGENES DEL CAROUSEL
        <div className="p-4 bg-gray-800">
          <h3 className="text-white">Debug Info:</h3>
          <pre className="text-white text-sm">
            {JSON.stringify({ bannerImages }, null, 2)}
          </pre>
        </div> */}
      <section className='mt-4' >
        <CarouselSection bannerImages={bannerImages} />
      </section>
      

        <section className="mb-16">
           <h2 className='font-gotham text-xl text-center mx-[20%] mb-6'>Tu sushi favorito directo a tu puerta. Ordena ahora:</h2>
          <DeliveryButtons deliveryLinks={deliveryLinks} />
        </section>

        <section id="Horario">
          
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

     