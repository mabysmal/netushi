import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { DeliveryApp, MenuItem } from '../types/menu';

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