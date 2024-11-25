import Menu from "../componentes/Menu";
import Head from "next/head";
import ResponsiveBackground from "../componentes/Background";
import { getMenuItems, getDeliveryLinks } from "../utils/getData";
import NavBar from "../componentes/NavBar";
import DeliveryButtons from "../componentes/DeliveryButtons";

export default async function MenuPage() {
  const menuItems = await getMenuItems();
  const deliveryLinks = await getDeliveryLinks();
  
  return (

    <main className="min-h-screen bg-black">
      <ResponsiveBackground />
      <Head>
        <link rel="icon" type="image/png" href="/palillos circulo rojo y blanco.png" />
        <title>Netushi | Menú</title>
        <meta
          name="description"
          content="Descubre el menú de Netushi, el mejor sushi en Guadalupe, Nuevo León, México. Explora nuestros rollos especiales, combinaciones únicas y más."
        />
        <meta
          name="keywords"
          content="sushi, sushi culichi, sushi en Guadalupe, Guadalupe, Nuevo León, menú de sushi, sushi frito, Netushi, rollos empanizados, panko, sushi especial"
        />
        <meta
          name="author"
          content="Netushi"
        />
      </Head>

      <div className="relative z-10 flex flex-col text-white">
          <NavBar logoSrc="/Netushi-Logo.png" logoAlt="Netushi Logo" />
      </div>
    
      <h1 className="text-8xl font-beach text-white mt-4 text-center">Menú</h1>
      <section className="mb-2">
          <DeliveryButtons deliveryLinks={deliveryLinks} />
      </section>
      <Menu items={menuItems} />
    </main>
  );
}