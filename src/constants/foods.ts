import type { IFood } from "@/types/user";
export type { IFood };

export const foodsByRestaurant: Record<string, IFood[]> = {
  rest_1: [
    { foodId: "1", name: "Pasta Alfredo", amount: 11.49, rating: 4.5, image: "/images/foods/pasta-alfredo.jpg" },
    { foodId: "2", name: "Margherita Pizza", amount: 9.99, rating: 4.3, image: "/images/foods/margherita-pizza.jpg" },
    { foodId: "3", name: "Caesar Salad", amount: 7.5, rating: 4.2, image: "/images/foods/caesar-salad.jpg" },
    { foodId: "4", name: "Garlic Bread", amount: 4.25, rating: 4.0, image: "/images/foods/garlic-bread.jpg" },
    { foodId: "5", name: "Tiramisu", amount: 6.75, rating: 4.7, image: "/images/foods/tiramisu.jpg" },
  ],
  rest_2: [
    { foodId: "1", name: "Chicken Biryani", amount: 13.99, rating: 4.6, image: "/images/foods/chicken-biryani.jpg" },
    { foodId: "2", name: "Paneer Butter Masala", amount: 10.5, rating: 4.4, image: "/images/foods/paneer-butter-masala.jpg" },
    { foodId: "3", name: "Naan", amount: 2.5, rating: 4.1, image: "/images/foods/naan.jpg" },
    { foodId: "4", name: "Gulab Jamun", amount: 3.0, rating: 4.3, image: "/images/foods/gulab-jamun.jpg" },
    { foodId: "5", name: "Masala Dosa", amount: 8.25, rating: 4.5, image: "/images/foods/masala-dosa.jpg" },
  ],
  rest_3: [
    { foodId: "1", name: "Sushi Platter", amount: 18.99, rating: 4.8, image: "/images/foods/sushi-platter.jpg" },
    { foodId: "2", name: "Ramen Bowl", amount: 12.5, rating: 4.4, image: "/images/foods/ramen-bowl.jpg" },
    { foodId: "3", name: "Tempura", amount: 9.75, rating: 4.2, image: "/images/foods/tempura.jpg" },
    { foodId: "4", name: "Mochi Ice Cream", amount: 5.5, rating: 4.6, image: "/images/foods/mochi-ice-cream.jpg" },
    { foodId: "5", name: "Edamame", amount: 4.0, rating: 4.0, image: "/images/foods/edamame.jpg" },
  ],
};