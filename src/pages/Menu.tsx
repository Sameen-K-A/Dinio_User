import { useLocation } from "react-router-dom";
import { foodsByRestaurant } from "../constants/foods";
import FoodCard from "../components/FoodCard";
import MenuHeader from "../components/MenuHeader";
import TopRated from "../components/TopRated";
import CategoryChips from "../components/CategoryChips";
import type { IFood } from "@/types/user";
import { useState } from "react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Menu() {
  const query = useQuery();
  const restId = query.get("r");
  const allFoods = restId ? foodsByRestaurant[restId] || [] : [];
  const topRatedFoods = [...allFoods].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const categories = ["All", "Food items", "Drinks", "Dessert"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const filteredFoods = allFoods;

  return (
    <div className="py-4">
      <MenuHeader />
      <TopRated foods={topRatedFoods} />
      <CategoryChips categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
      <div className="font-semibold text-lg mb-2 mt-6">All</div>
      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
        {filteredFoods.map((food: IFood) => (
          <FoodCard
            key={food.foodId}
            food={food}
          />
        ))}
      </div>
    </div>
  );
};