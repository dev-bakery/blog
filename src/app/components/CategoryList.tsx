"use client";
import React from "react";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function CategoryList({ categories, selected, onClick }: Props) {
  return (
    <div className='p-4'>
      {categories.map((category) => (
        <button type='button' key={category} onClick={() => onClick(category)} className={`mr-4 cursor-pointer hover:text-sky-500 ${category === selected && "text-sky-600 font-bold"}`}>
          {category}
        </button>
      ))}
    </div>
  );
}
