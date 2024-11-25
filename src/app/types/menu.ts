export type CategoryKey =
  | 'promociones'
  | 'entradas'
  | 'rollos-frios'
  | 'rollos-calientes'
  | 'complementos'
  | 'extras'
  | 'bebidas';

export interface MenuItem {
  title: string;
  description: string;
  // price: number;
  image: string;
  category: CategoryKey;
  order: number;
}

export interface DeliveryApp {
  didifood?: {
    link: string;
    active: boolean;
  };
  ubereats?: {
    link: string;
    active: boolean;
  };
  rappi?: {
    link: string;
    active: boolean;
  };
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

export interface BusinessHour {
  isOpen: boolean;
  openTime?: string;
  closeTime?: string;
}

// export interface BusinessHours {
//   monday: BusinessHour;
//   tuesday: BusinessHour;
//   wednesday: BusinessHour;
//   thursday: BusinessHour;
//   friday: BusinessHour;
//   saturday: BusinessHour;
//   sunday: BusinessHour;
// }

export type DaySchedule = {
  isOpen: boolean;
  openTime: string;
  closeTime: string;
};


// export interface BusinessHoursData {
//   monday: string;
//   tuesday: string;
//   wednesday: string;
//   thursday: string;
//   friday: string;
//   saturday: string;
//   sunday: string;
// }