import { useLocation } from "react-router-dom";
import { foodsByRestaurant } from "../constants/foods";
import FoodCard from "../components/FoodCard";
import MenuHeader from "../components/MenuHeader";
import type { IFood } from "@/types/user";
import { useCart } from "../contexts/cart-context";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Menu() {
  const query = useQuery();
  const restId = query.get("r");
  const filteredFoods = restId ? foodsByRestaurant[restId] || [] : [];
  const { addToCart } = useCart();

  return (
    <div className="py-4">
      <MenuHeader />
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {filteredFoods.map((food: IFood) => (
          <FoodCard
            key={food.foodId}
            food={food}
            onAdd={() => addToCart(food)}
          />
        ))}
      </div>
    </div>
  );
};