import React from 'react';

const SearchBar = () => {
  return (
    <div>
      <div className="mt-2">
        <input
          type="text"
          name="search"
          id="search"
          className="shadow-sm h-10 bg-gray-100 block w-full sm:text-sm border-gray-300 rounded-full" //TODO text indent
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
