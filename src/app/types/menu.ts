export type CategoryKey = 'promociones' | 'aperitivos' | 'rollos-frios' | 'rollos-frios-especiales' | 
                         'rollos-calientes' | 'rollos-calientes-especiales' | 'complementos' | 'bebidas';

export interface MenuItem {
  title: string;
  description: string;
  price: number;
  image: string;
  category: CategoryKey;
  order: number;
}

export interface DeliveryApp {
    didifood?: string;  // cambiado de DidiFood a didifood
    ubereats?: string;  // cambiado de UberEats a ubereats
    rappi?: string;     // cambiado de Rappi a rappi
  }