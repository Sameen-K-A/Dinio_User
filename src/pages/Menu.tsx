import { useLocation } from "react-router-dom";
import { foodsByRestaurant } from "../constants/foods";
import FoodCard from "../components/FoodCard";
import MenuHeader from "../components/MenuHeader";
import TopRated from "../components/TopRated";
import CategoryChips from "../components/CategoryChips";
import type { ICategory, IFood } from "@/types/general";
import { useState } from "react";
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton";
import { mockCategories } from "@/constants/category";
import FoodDetailsDrawer from "@/components/FoodDetailsDrawer";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Menu() {
  const query = useQuery();
  const restId = query.get("r");
  const allFoods = restId ? foodsByRestaurant[restId] || [] : [];
  const categories = mockCategories;
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [topRatedFoods] = useState([...allFoods].sort(() => Math.random() - 0.5).slice(0, 5));
  const filteredFoods = allFoods;

  const onCategoryChange = (cat: ICategory) => {
    setSelectedCategory(cat)
  };

  return (
    <>
      <div className="flex justify-between items-center pt-10 md:pt-0">
        <h3 className="font-bold text-3xl text-primary">Hi, Welcome</h3>
        <ThemeToggleButton />
      </div>
      <h6 className="mb-6">Let's find your best food Order and Eat.</h6>

      <MenuHeader />

      <TopRated
        foods={topRatedFoods}
      />

      <CategoryChips
        categories={categories}
        selected={selectedCategory}
        onSelect={onCategoryChange}
      />

      <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] mt-5">
        {filteredFoods.map((food: IFood) => (
          <FoodDetailsDrawer
            key={food.foodId}
            trigger={<FoodCard food={food} />}
            food={food}
          />
        ))}
      </div>
    </>
  );
};