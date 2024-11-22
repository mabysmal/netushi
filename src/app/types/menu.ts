export type CategoryKey =
  | 'promociones'
  | 'entradas'
  | 'rollos-frios'
  | 'rollos-frios-especiales'
  | 'rollos-calientes'
  | 'rollos-calientes-especiales'
  | 'complementos'
  | 'bebidas';

export interface MenuItem {
  title: string;
  description: string;
  price: number;
  image: string;
  category: CategoryKey;
  order: number;
}

export interface DeliveryApp {
  didifood?: string;
  ubereats?: string;
  rappi?: string;
}

export interface BannerImages {
  titulo: string;
  imagenes: string[];
  order: number;
}

export interface BannerImage {
  url: string;
  titulo: string;
  order:number
}