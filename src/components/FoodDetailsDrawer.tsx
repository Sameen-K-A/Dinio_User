import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { getAverageRating, getRatingDistribution } from "@/lib/utils";
import type { IFood } from "@/types/general";
import type { JSX } from "react";
import { Badge } from "./ui/badge";
import { StarRating } from "./ui/Star_rating";
import { ReviewCard } from "./ui/ReviewCard";
import { RatingBreakdown } from "./ui/Rating_breakdown";

interface IFoodDetailsDrawerProps {
  trigger: JSX.Element;
  food: IFood;
};

export default function FoodDetailsDrawer({ food, trigger }: IFoodDetailsDrawerProps) {
  const averageRating = getAverageRating(food.reviews);
  const ratingDistribution = getRatingDistribution(food.reviews);

  return (
    <Drawer>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent>
        <div className="h-[90dvh] overflow-y-auto p-4 md:p-8">

          <div className="space-y-6">
            <div className="relative max-w-xs mx-auto">
              <img
                src={food.image}
                alt={food.name}
                className="w-full aspect-square object-cover rounded-xl shadow-lg"
              />
              <Badge
                variant="secondary"
                className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm border-0 shadow-md"
              >
                {food.category.name}
              </Badge>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-6">
              <div className="space-y-6 w-full">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{food.name}</h2>
                  <p className="text-3xl font-bold text-primary mb-4">₹{food.amount.toFixed(2)}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{food.description}</p>
                </div>


                <div className="pt-6 border-t">
                  <div className="text-4xl font-bold mb-2">{getAverageRating(food.reviews).toFixed(1)}</div>
                  <StarRating rating={averageRating} size="lg" className="justify-start mb-2" />
                  <p className="text-sm text-muted-foreground">
                    based on {food.reviews.length} review{food.reviews.length !== 1 ? 's' : ''}
                  </p>
                </div>

                {food.reviews.length > 0 && (
                  <div className="mt-6">
                    <RatingBreakdown distribution={ratingDistribution} />
                  </div>
                )}
              </div>

              <div className="space-y-6 w-full">
                {food.reviews.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-4 text-muted-foreground">
                      Customer Reviews
                    </h4>
                    <div className="space-y-3">
                      {food.reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                      ))}
                    </div>
                  </div>
                )}

                {food.reviews.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <p>No reviews yet</p>
                    <p className="text-sm">Be the first to review this item!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}