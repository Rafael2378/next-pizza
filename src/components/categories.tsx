"use client";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}
const categories = [
  { name: "Пиццы" },
  { name: "Напитки" },
  { name: "Сладкие" },
  { name: "Вегетарианские" },
  { name: "С курицей" },
].map((obj, idx) => ({ ...obj, id: idx + 1 }));

export const Categories: React.FC<Props> = (props) => {
  const { className } = props;
  const category = useCategoryStore((state) => state.category);
  return (
    <ul
      className={cn(
        "flex items-center gap-2 bg-gray-200 rounded-2xl px-1 py-3",
        className
      )}
    >
      {categories.map((item) => (
        <li key={item.id}>
          <Link
            className={cn(
              "px-3 py-2 rounded-2xl",
              item.id === category && "bg-white"
            )}
            href={`#${item.name}`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
