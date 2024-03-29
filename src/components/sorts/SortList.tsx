"use client"
import Link from "next/link";
import React, { useState } from "react";

const initialStatusList = [
  {
    name: "Popular",
    selected: true,
  },
  {
    name: "Recommended",
    selected: false,
  },
  {
    name: "Ratings",
    selected: false,
  },
  {
    name: "Uploaded",
    selected: false,
  },
];

const Type = () => {
  const [types, setTypes] = useState(initialStatusList);

  const handleTypeClick = (selectedTypeName : string) => {
    const updatedTypes = types.map((type) => ({
      ...type,
      selected: type.name === selectedTypeName,
    }));
    setTypes(updatedTypes);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 font-bold font-quicksand">
        {types.map((item) => (
          <div key={item.name} onClick={() => handleTypeClick(item.name)}>
            <Link href="#" scroll={false}>
              <div
                className={` duration-200 ease-in-out text-base font-inter px-2 py-1 ${item.selected ? 'bg-ube-300 text-white text-white' : 'bg-white hover:bg-ube-50 text-ube-400'} rounded-md`}
              >
                {item.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Type;
``
