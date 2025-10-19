export class ProductModel {
  _id: string;
  image: string;
  title: string;
  price: number;
  oldProce: number;
  credit: number;
  calculatedRating: number;
  description: string;
  advantages: string;
  disadvantages: string;
  category: string[];
  tags: string;
  characteristics: { [key: string]: string };
}
