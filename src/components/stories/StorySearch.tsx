import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import React from "react";

const StorySearch = () => {
  return (
    <div>
      <div className="flex flex-row border-2 rounded-lg p-4">
        <form className="relative flex flex-1 w-full" action="#" method="GET">
          <MagnifyingGlassIcon className="w-8 h-8" />
          <input
            id="search-field"
            className="block h-full w-full border-0 py-0 pl-2 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 "
            placeholder="Search..."
            type="search"
            name="search"
          />
        </form>
      </div>
    </div>
  );
};

export default StorySearch;
