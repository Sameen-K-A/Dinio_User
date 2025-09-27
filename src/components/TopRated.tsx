import React from "react";
import type { IFood } from "@/types/general";
import { FaStar } from "react-icons/fa";
import { getAverageRating } from "@/lib/utils";
import FoodDetailsDrawer from "./FoodDetailsDrawer";

interface TopRatedProps {
  foods: IFood[];
}

const TopRated: React.FC<TopRatedProps> = ({ foods }) => {
  return (
    <section className="pt-3">
      <h2 className="text-lg font-semibold mb-2">Top Rated</h2>
      <div className="flex gap-2 overflow-x-auto pb-6 custom-scrollbar">
        {foods.map((food) => (
          <FoodDetailsDrawer
            key={food.foodId}
            food={food}
            trigger={
              <div className="bg-card cursor-pointer overflow-hidden border border-transparent dark:border-border rounded-2xl hover:shadow-lg shadow-muted-foreground/5 transition-all duration-300 p-2 py-5 flex-shrink-0 flex flex-col items-center relative w-[180px]">
                {food.isSpecial && (
                  <div className="absolute top-2.5 -left-5 bg-red-500 text-white font-medium text-[8px] px-6 py-0.5 -rotate-45">
                    {food.isSpecial && <span>Special</span>}
                  </div>
                )}
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-24 h-24 rounded-full object-cover border mb-4"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder/placeholder.svg";
                  }}
                />
                <div className="font-semibold text-base text-center mt-1 line-clamp-1">
                  {food.name}
                </div>
                <p className="text-xs text-muted-foreground flex gap-1 items-center">
                  <FaStar className="text-amber-500" />
                  {getAverageRating(food.reviews).toFixed(1)}
                </p>
                <div className="text-sm mt-1">
                  <span className="font-semibold">₹{food.amount.toFixed(2)}</span>
                </div>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default TopRated;