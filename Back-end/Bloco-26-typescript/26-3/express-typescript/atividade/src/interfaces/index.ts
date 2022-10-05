export interface IUsers {
  id: number;
  name: string;
  email: string;
  password: string | number;
}

export interface IPosts {
  id: number;
  title: string;
  author: string;
  category: string;
  publicationDate: Date;
}

export interface IProducts {
  id: number;
  name: string;
  brand: string;
  manufacturing_date: Date;
  expiration_date: Date;
}

export interface IRestaurants {
  id: number;
  name: string;
  category: string;
  openingTime: number;
  closingTime: number;
}
