export interface INavItem {
  to: string;
  icon: React.ReactNode;
  label: string;
};

export interface IFood {
  foodId: string;
  name: string;
  amount: number;
  rating: number;
  image: string;
};