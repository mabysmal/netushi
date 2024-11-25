import Head from "next/head";
import Image from "next/image";
import ResponsiveBackground from "../componentes/Background";
import NavBar from "../componentes/NavBar";

export default function AboutUsPage() {
  return (
    <main>
      <ResponsiveBackground />
      <Head>
        <link rel="icon" type="image/png" href="/palillos circulo rojo y blanco.png" />
        <title>Netushi | Sushi to Go en Guadalupe</title>
        <meta name="description" content="Prueba el mejor sushi empanizado en Guadalupe, Nuevo León. Deliciosos rollos fritos, fríos y más." />
        <meta name="keywords" content="sushi, sushi frito, restaurante, Guadalupe, Nuevo León" />
        <meta name="author" content="Netushi" />
      </Head>
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
        <div className="relative z-10 flex flex-col text-white p-8 md:p-12">
            <div id="SocialMedia" className='flex justify-center' >
                <a id="Facebook" href="https://www.facebook.com/profile.php?id=61568059884022" target="_blank">
                    <Image
                        src='/facebook.svg'
                        width={200}
                        height={200}
                        alt='Facebook Logo'
                        className=""
                    />
                </a>

                <a id="Instagram" href="https://www.instagram.com/netushitogo/" target="_blank">
                    <Image
                        src='/instagram.svg'
                        width={200}
                        height={200}
                        alt='Instagram Logo'
                        className=""
                    />
                </a>
            </div>
            <h2 className="font-sourcesans font-bold text-4xl font-bold mb-4">MISIÓN</h2>
            <p className="mb-4 font-gotham">
            Ofrecer a nuestros clientes una experiencia única de sabores japoneses a través de nuestros makis, preparados con ingredientes frescos y de alta calidad. Nos esforzamos por brindar un servicio excepcional y satisfacer el paladar de quienes buscan un acercamiento auténtico y creativo a la comida japonesa.
            </p>

            <h2 className="font-sourcesans font-bold text-4xl font-bold mb-4">VISIÓN</h2>
            <p className="mb-4 font-gotham">
            Ser el referente de comida japonesa en nuestra región, destacándonos por la innovación en nuestros platillos y el compromiso con la calidad, para convertirnos en la primera opción de quienes buscan disfrutar de sabores japoneses auténticos y adaptados a los gustos locales, e makis para preparar en casa.
            </p>

            <h2 className="font-sourcesans font-bold text-4xl font-bold mb-4">PROYECCIÓN A FUTURO</h2>
            <p className="mb-4 font-gotham">
            En los próximos cinco años, Netushi se propone expandir su presencia mediante la apertura de nuevas sucursales en distintas zonas, ofrecer opciones de menú para eventos y consolidarse en el mercado digital con una plataforma en línea para pedidos y entregas. También, buscamos desarrollar una línea de productos complementarios que acerquen a nuestros clientes a la cultura japonesa, como salsas artesanales y kits de makis para preparar en casa.
            </p>

        </div>
      </div>
    </main>
  );
}