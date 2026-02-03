export interface IProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  alt: string;
  description: string;
  height: number;
  width: number;
  depth: number;
}

export interface IProductState {
  products: IProduct[];
  filtered: IProduct[];
  filterByCategory: string;
  filterByPrice: number;
  cart: IProduct[];
  isLoading: boolean;
  isError: boolean;
}

type PriceItem = number[];

type Prices = PriceItem[];

export const prices: Prices = [[1, 100], [101, 200], [201]];