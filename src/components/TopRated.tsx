import React from "react";
import type { IFood } from "@/types/general";

interface TopRatedProps {
  foods: IFood[];
}

const TopRated: React.FC<TopRatedProps> = ({ foods }) => {
  return (
    <section className="pt-3">
      <h2 className="text-lg font-semibold mb-2">Top Rated</h2>
      <div className="flex gap-2 overflow-x-auto pb-6 custom-scrollbar">
        {foods.map((food) => (
          <div
            key={food.foodId}
            className="bg-card cursor-default border border-transparent dark:border-border rounded-2xl hover:shadow-lg shadow-muted-foreground/5 transition-all duration-300 p-2 py-5 flex-shrink-0 flex flex-col items-center relative w-[180px]"
          >
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
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold">₹{food.amount.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRated;