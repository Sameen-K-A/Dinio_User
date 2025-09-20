export interface ICategory {
  catId: string;
  name: string;
};
export interface IFood {
  foodId: string;
  image: string;
  name: string;
  description: string;
  category: ICategory;
  amount: number;
  reviews: IReview[];
};

export interface IReview {
  name: string;
  rating: number;
  review: string;
};