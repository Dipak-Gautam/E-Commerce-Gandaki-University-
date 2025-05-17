export interface ProductSchema {
  id: string;
  name: string;
  image: string;
  rating: string;
  category: string;
  popularity: number;

  price: number;
  description: string;
  ingredients: string[];
}
