import type { IFood } from "@/types/general";
import { FaStar } from "react-icons/fa";
import { getAverageRating } from "@/lib/utils";

interface FoodCardProps {
  food: IFood;
}

export default function FoodCard({ food }: FoodCardProps) {
  return (
    <div className="flex items-center bg-card relative border border-transparent dark:border-border cursor-pointer overflow-hidden rounded-2xl hover:shadow-lg shadow-muted-foreground/5 transition-all duration-300 p-4">
      {food.isSpecial && (
        <div className="absolute top-2 -left-6 bg-red-500 text-white font-medium text-[8px] px-6 py-0.5 -rotate-45">
          {food.isSpecial && <span>Special</span>}
        </div>
      )}
      <div className="flex-1 space-y-1 ml-1">
        <p className="font-semibold text-base line-clamp-1 text-left">{food.name}</p>
        <p className="text-xs text-muted-foreground line-clamp-1 text-left">{food.description}</p>
        <p className="text-xs text-muted-foreground flex gap-2 items-center text-left">
          <FaStar className="text-amber-500" />
          {getAverageRating(food.reviews).toFixed(1)}/5 based on {food.reviews.length} reviews
        </p>

        <div className="mt-2 text-left">
          <span className="font-semibold">₹{food.amount.toFixed(2)}</span>
        </div>
      </div>
      <img
        src={food.image}
        alt={food.name}
        className="w-20 h-20 rounded-lg object-cover border ml-3"
        onError={(e) => {
          e.currentTarget.src = "/placeholder/placeholder.svg";
        }}
      />
    </div>
  );
};