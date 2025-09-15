import type { ICategory } from "@/types/general";

interface CategoryChipsProps {
  categories: ICategory[];
  selected: ICategory;
  onSelect: (cat: ICategory) => void;
}

export default function CategoryChips({
  categories,
  selected,
  onSelect,
}: CategoryChipsProps) {
  return (
    <div className="flex gap-1 overflow-x-auto py-2 mb-4 custom-scrollbar">
      {categories.map((cat) => (
        <button
          key={cat.catId}
          className={`px-4 py-1.5 cursor-pointer rounded-full font-medium text-sm transition-colors whitespace-nowrap ${selected === cat
            ? "bg-primary text-accent"
            : "bg-card hover:bg-muted-foreground/10 dark:border"
            }`}
          onClick={() => onSelect(cat)}
          type="button"
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}