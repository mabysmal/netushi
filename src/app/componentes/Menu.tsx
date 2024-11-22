import React from 'react';
import Image from 'next/image';
import type { CategoryKey, MenuItem } from '../types/menu';


interface MenuProps {
  items: MenuItem[];
}

const CATEGORIES_ORDER: CategoryKey[] = [
  'promociones',
  'entradas',
  'rollos-frios',
  'rollos-calientes',
  'complementos',
  'extras',
  'bebidas'
];

const CATEGORY_NAMES: Record<CategoryKey, string> = {
  'promociones': 'Promociones',
  'entradas': 'Entradas',
  'rollos-frios': 'Rollos Fríos',
  'rollos-calientes': 'Rollos Calientes',
  'complementos': 'Complementos',
  'extras' : 'Extras',
  'bebidas': 'Bebidas'
};

const MenuSection: React.FC<{ title: CategoryKey; items: MenuItem[] }> = ({ title, items }) => {
  if (items.length === 0) return null;

  return (
    <div className="mb-12 ">
      <h2 
        className="bg-dark-red text-3xl font-gotham text-white mb-6 text-center">{CATEGORY_NAMES[title]}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div 
          key={index}
          className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          style={{ backgroundColor: '#ffffff' }}
        >
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-gotham text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="font-sourcesans font-bold text-gray-600 text-sm flex-grow mb-3">{item.description}</p>
              <p className="font-gotham text-xl font-bold text-green-600">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Menu: React.FC<MenuProps> = ({ items }) => {
  // Agrupar items por categoría
  const itemsByCategory = items.reduce((acc, item) => {
    const category = item.category as CategoryKey;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<CategoryKey, MenuItem[]>);

  return (
    <div className="container mx-auto px-4 py-8">
      {CATEGORIES_ORDER.map(category => (
        <MenuSection
          key={category}
          title={category}
          items={itemsByCategory[category] || []}
        />
      ))}
    </div>
  );
};

export default Menu;