import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { DeliveryApp, MenuItem, BannerImages  } from '../types/menu';

// Función para obtener los enlaces de delivery
export const getDeliveryLinks = (): DeliveryApp => {
  const directory = path.join(process.cwd(), 'content/apps-delivery');
  const files = fs.readdirSync(directory);
  
  // Tomar el primer archivo ya que solo debería haber uno
  if (files.length > 0) {
    const fullPath = path.join(directory, files[0]);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return data as DeliveryApp;
  }
  
  return {};
};

//Funcion para obtener imgs del banner
interface BannerImage {
  titulo: string;
  imagenes: string;
  order: number;
}

export const getBannerImages = (): { url: string; titulo: string }[] => {
  try {
    const directory = path.join(process.cwd(), 'content/bannerimgs');
    // Verificar si el directorio existe
    if (!fs.existsSync(directory)) {
      console.log('Directory does not exist:', directory);
      return [];
    }
    
    const files = fs.readdirSync(directory);
    
    // Leer y procesar cada archivo
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
      .sort((a, b) => a.order - b.order)
      .map(({ url, titulo }) => ({ url, titulo }));
    
      console.log('Found banner images:', images);
      return images;
    } catch (error) {
      console.error('Error al obtener las imágenes del banner:', error);
      return [];
    }
};


// Función para obtener todos los items del menú
export const getMenuItems = (): MenuItem[] => {
  const directory = path.join(process.cwd(), 'content/menu');
  const files = fs.readdirSync(directory);
  
  const menuItems = files.map(fileName => {
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      ...data,
    } as MenuItem;
  });
  
  // Ordenar por categoría y luego por orden
  return menuItems.sort((a, b) => {
    if (a.category === b.category) {
      return a.order - b.order;
    }
    return a.category.localeCompare(b.category);
  });
};