import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { DeliveryApp, MenuItem } from '../types/menu';

// Función para obtener los enlaces de delivery
export const getDeliveryLinks = (): DeliveryApp => {
  const directory = path.join(process.cwd(), 'content/apps-delivery');
  const files = fs.readdirSync(directory);
  
  if (files.length > 0) {
    const fullPath = path.join(directory, files[0]);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return data as DeliveryApp;
  }
  
  return {};
};

// Interfaz para los datos del menú en el debugger
interface MenuItemData {
  title?: string;
  description?: string;
  price?: number;
  image?: string;
  category?: string;
  order?: number;
}

// Interfaz para la información de depuración
interface DebugInfo {
  fileName: string;
  parsed: boolean;
  error?: string;
  data?: MenuItemData;
}

export const debugMenuItems = (): DebugInfo[] => {
  const directory = path.join(process.cwd(), 'content/menu');
  const files = fs.readdirSync(directory);
  
  const debugInfo: DebugInfo[] = [];

  files.forEach(fileName => {
    try {
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Intenta parsear el archivo
      const { data } = matter(fileContents);
      const menuData = data as MenuItemData;
      
      // Validaciones específicas
      const issues: string[] = [];
      
      if (!menuData.title) issues.push('Missing title');
      if (!menuData.category) issues.push('Missing category');
      if (typeof menuData.price !== 'number') issues.push('Price is not a number');
      if (typeof menuData.order !== 'number') issues.push('Order is not a number');
      
      // Normaliza la categoría a minúsculas
      if (menuData.category) {
        menuData.category = menuData.category.toLowerCase();
      }

      debugInfo.push({
        fileName,
        parsed: true,
        error: issues.length > 0 ? issues.join(', ') : undefined,
        data: menuData
      });
    } catch (error) {
      debugInfo.push({
        fileName,
        parsed: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  return debugInfo;
};

// Interfaz para las imágenes del banner
interface BannerImageData {
  url: string;
  titulo: string;
  order: number;
}

export const getBannerImages = (): BannerImageData[] => {
  try {
    const directory = path.join(process.cwd(), 'content/bannerimgs');
    
    if (!fs.existsSync(directory)) {
      console.log('Directory does not exist:', directory);
      return [];
    }
    
    const files = fs.readdirSync(directory);
    
    const images = files
      .map(fileName => {
        const fullPath = path.join(directory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        return {
          url: data.imagenes,
          titulo: data.titulo,
          order: data.order
        };
      })
      .sort((a, b) => a.order - b.order);
    
    console.log('Found banner images:', images);
    return images;
  } catch (error) {
    console.error('Error al obtener las imágenes del banner:', error);
    return [];
  }
};

export const getMenuItems = (): MenuItem[] => {
  const directory = path.join(process.cwd(), 'content/menu');
  const files = fs.readdirSync(directory);
  
  const menuItems = files.map(fileName => {
    try {
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      // Normaliza la categoría a minúsculas
      if (data.category) {
        data.category = data.category.toLowerCase();
      }

      // Asegúrate de que price y order sean números
      data.price = Number(data.price);
      data.order = Number(data.order);

      return data as MenuItem;
    } catch (error) {
      console.error(`Error parsing menu item ${fileName}:`, error);
      return null;
    }
  }).filter((item): item is MenuItem => item !== null);
  
  return menuItems.sort((a, b) => {
    if (a.category === b.category) {
      return a.order - b.order;
    }
    return a.category.localeCompare(b.category);
  });
};