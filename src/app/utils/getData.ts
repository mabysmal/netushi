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
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      ...data,
    } as MenuItem;
  });
  
  return menuItems.sort((a, b) => {
    if (a.category === b.category) {
      return a.order - b.order;
    }
    return a.category.localeCompare(b.category);
  });
};