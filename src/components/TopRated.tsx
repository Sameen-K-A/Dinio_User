import React from "react";
import type { IFood } from "@/types/user";

interface TopRatedProps {
  foods: IFood[];
  onAdd: (food: IFood) => void;
}

const TopRated: React.FC<TopRatedProps> = ({ foods, onAdd }) => {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold">Top Rated</h2>
      <div className="flex gap-2 overflow-x-auto py-2 custom-scrollbar">
        {foods.map((food) => (
          <div
            key={food.foodId}
            className="bg-muted/50 rounded-2xl border p-2 flex-shrink-0 flex flex-col items-center relative w-[180px]"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-24 h-24 rounded-full object-cover border mb-2"
              onError={(e) => {
                e.currentTarget.src = "/placeholder/placeholder.svg";
              }}
            />
            <div className="font-semibold text-base text-center mt-1 mb-1 line-clamp-1">
              {food.name}
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="font-semibold">₹{food.amount.toFixed(2)}</span>
              <span>|</span>
              <span className="flex items-center gap-0">
                <svg
                  width="18"
                  height="18"
                  fill="#FFD700"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span>
                  {food.rating.toFixed(1)}
                </span>
              </span>
            </div>

            <button
              className="flex items-center cursor-pointer gap-1 px-3 py-1 rounded-full border bg-accent-foreground text-accent text-sm font-medium hover:bg-accent-foreground/70 transition"
              onClick={() => onAdd(food)}
            >
              <span className="text-lg leading-none">+</span> Add
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRated;
