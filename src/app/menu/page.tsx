import Menu from "../componentes/Menu";
import Head from "next/head";
import ImageBackground from "../componentes/RepeatingBackground";
import { getMenuItems } from "../utils/getData";
import NavBar from "../componentes/NavBar";

export default async function MenuPage() {
  const menuItems = await getMenuItems();
  
  return (
    <main className="min-h-screen bg-black">
      <Head>
        <link rel="icon" type="image/png" href="/icon.png" />
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
      <ImageBackground />

      <div className="relative z-10 flex flex-col text-white">
          <NavBar logoSrc="/5.png" logoAlt="Netushi Logo" />
      </div>
    
      <h1 className="text-8xl font-beach text-white mt-4 text-center">Menú</h1>
      <Menu items={menuItems} />
    </main>
  );
}