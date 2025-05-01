<<<<<<< HEAD
"use client";
=======
>>>>>>> e30d10096888b2ead7692d458102fd67070bca50
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./ui";
import { Card } from "./card";
<<<<<<< HEAD
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";
=======
>>>>>>> e30d10096888b2ead7692d458102fd67070bca50

interface Props {
  className?: string;
  title: string;
  items: any[];
<<<<<<< HEAD
  categoryId: number;
}

export const Catalog: React.FC<Props> = (props) => {
  const { className, title, items, categoryId } = props;
  const setCategory = useCategoryStore((state) => state.setCategory);
  const intersectionRef = React.useRef<HTMLDivElement | null>(null);
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLDivElement>,
    {
      threshold: 0.4,
    }
  );

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setCategory(categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, setCategory]);

  return (
    <div className={cn("", className)} id={title} ref={intersectionRef}>
=======
}

export const Catalog: React.FC<Props> = (props) => {
  const { className, title, items } = props;
  return (
    <div className={cn("", className)}>
>>>>>>> e30d10096888b2ead7692d458102fd67070bca50
      <Title className="mb-5" size={"l"} text={title} />
      <ul className="grid grid-cols-3 gap-5">
        {items.map((item) => (
          <li key={item.id}>
            <Card {...item} price={item.items[0].price} />
          </li>
        ))}
      </ul>
    </div>
  );
};
