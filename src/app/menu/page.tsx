import Menu from "../componentes/Menu";
import { getMenuItems } from "../utils/getData";

export default async function MenuPage() {
  const menuItems = await getMenuItems();
  
  return (
    <Menu items={menuItems} />
  );
}