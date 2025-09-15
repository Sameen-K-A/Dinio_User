import type { IFood } from "@/types/general";

interface FoodCardProps {
  food: IFood;
}

export default function FoodCard({ food }: FoodCardProps) {
  return (
    <div className="flex items-center bg-card dark:border cursor-default overflow-hidden rounded-2xl hover:shadow-lg shadow-muted-foreground/5 transition-all duration-300 p-4">
      <div className="flex-1 space-y-1">
        <p className="font-semibold text-base line-clamp-1">{food.name}</p>
        <p className="text-xs text-muted-foreground line-clamp-2">{food.description}</p>

        <div className="mt-2">
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