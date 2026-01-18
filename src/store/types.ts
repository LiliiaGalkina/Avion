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
	depth: number
}

export interface IProductState {
  products: IProduct[];
  filtered: IProduct[];
  filterByCategory: string[];
  filterByPrice: number[];
  cart: IProduct[];
  isLoading: boolean;
  isError: boolean;
}