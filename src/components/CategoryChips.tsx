interface CategoryChipsProps {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
}

export default function CategoryChips({
  categories,
  selected,
  onSelect,
}: CategoryChipsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto py-2 mb-4 custom-scrollbar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-1.5 rounded-full border font-medium text-sm transition-colors whitespace-nowrap ${selected === cat
            ? "bg-accent-foreground text-accent border-primary"
            : "bg-muted text-muted-foreground border-muted-foreground/20 hover:bg-muted-foreground/10"
            }`}
          onClick={() => onSelect(cat)}
          type="button"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}