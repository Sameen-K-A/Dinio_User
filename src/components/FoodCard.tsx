import type { IFood } from "@/types/user";

interface FoodCardProps {
  food: IFood;
}

export default function FoodCard({ food }: FoodCardProps) {
  return (
    <div className="flex items-center bg-muted/50 rounded-2xl border p-2">
      <img
        src={food.image}
        alt={food.name}
        className="w-20 h-20 rounded-lg object-cover border"
        onError={(e) => {
          e.currentTarget.src = "/placeholder/placeholder.svg";
        }}
      />
      <div className="flex-1 ml-3">
        <p className="font-semibold text-base truncate line-clamp-1">{food.name}</p>

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <svg width="16" height="16" fill="#FFD700" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
          <span className="font-medium">{food.rating.toFixed(1)}</span>
        </div>

        <div className="mt-2">
          <span className="font-semibold">₹{food.amount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};