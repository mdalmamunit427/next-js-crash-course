import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategoryChangeProps {
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ onCategoryChange }: CategoryChangeProps) => {
  const cateogries = ["all", "tech", "health", "sports", "business"];
  return (
    <div className="flex gap-2 items-center justify-center mx-4">
      <h3 className="font-bold text-lg mb-2 flex-shrink-0">Filter by Category:</h3>

      <Select
      onValueChange={(value) => onCategoryChange(value === 'all' ? "" : value)}
      >
        <SelectTrigger className="w-[180px] capitalize rounded-md">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {cateogries.map((category) => (
            <SelectItem key={category} value={category} className="capitalize">{category}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
