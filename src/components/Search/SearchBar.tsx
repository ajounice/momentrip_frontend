import React from 'react';

// const handleOnClick = (setKeyword) => {
//   setKeyword()
// };

const handleOnKeyPress = (
  e: React.KeyboardEvent<HTMLInputElement>,
  setKeyword: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (e.key === 'Enter') {
    // handleOnClick(e.target.value);
    setKeyword(e.target.value);
    console.log(e.target.value);
  }
};

export default function SearchBar({ setKeyword }: { setKeyword: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <div>
      <div className="mt-2">
        <input
          type="text"
          name="search"
          id="search"
          className="pl-4 shadow-sm h-10 bg-gray-100 block w-full sm:text-sm border-gray-300 rounded-full" //TODO text indent
          placeholder="Search"
          // onClick={handleOnClick}
          onKeyPress={(e) => handleOnKeyPress(e, setKeyword)}
        />
      </div>
    </div>
  );
}
