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
        <title>Menú | Netushi | Sushi to Go en Guadalupe</title>
        <meta name="description" content="Prueba el mejor sushi empanizado en Guadalupe, Nuevo León. Deliciosos rollos frios, fritos y más." />
        <meta name="keywords" content="sushi, sushi frito, restaurante sushi Guadalupe, Nuevo León" />
    </Head>
    <ImageBackground />
    <NavBar logoSrc="/5.png" logoAlt="Netushi Logo" ></NavBar>
    <Menu items={menuItems} />
    </main>
  );
}