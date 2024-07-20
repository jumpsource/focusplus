import { cn } from "@/lib/utils";
import React from "react";

type SimpleGridProps = {
  rows: number;
  columns: number;
  classNames: string;
};

export const SimpleGrid = ({ rows, columns, classNames }: SimpleGridProps) => {
  const gridStyles = {
    gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
  };

  return (
    <div className={cn("grid gap-4", classNames)} style={gridStyles}>
      {Array.from({ length: rows * columns }).map((_, index) => (
        <div
          key={String(index * 2)}
          className="flex items-center justify-center border border-gray-300"
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};
