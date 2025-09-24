import { useState } from "react";
import { Button } from "../ui/button";
import { FaStar } from "react-icons/fa";

export default function RatingForm() {
  const [rating, setRating] = useState(0);

  return (
    <div className="bg-card rounded-2xl p-4 space-y-4">
      <h4 className="text-lg font-semibold">Write Your Review</h4>

      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={`text-xl transition-transform duration-150 ${star <= rating ? "text-amber-400" : "text-muted-foreground"}`}
          >
            <span className="inline-block transform transition-transform duration-150 active:scale-105 hover:scale-105 cursor-pointer">
              <FaStar />
            </span>
          </button>
        ))}
      </div>

      <div>
        <label className="block text-sm mb-1">Your Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Your Review</label>
        <textarea
          placeholder="Share your experience..."
          rows={4}
          className="w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-primary resize-none"
        />
      </div>

      <Button
        type="button"
        className="w-full rounded-lg bg-primary py-2 cursor-pointer"
      >
        Submit Review
      </Button>
    </div>
  );
};