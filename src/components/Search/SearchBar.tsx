import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({searchHandler, keyword}:{searchHandler:(value:string)=>void, keyword:string}) {
  const navigation = useNavigate();

  const handleOnKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter') {
      if(e.target.value){
        searchHandler(e.target.value)
      }else{
        navigation("/search");
      }
    }
  };

  return (
    <div>
      <div className="mt-2">
        <input
          type="text"
          name="search"
          id="search"
          className="pl-4 shadow-sm h-10 bg-gray-100 block w-full sm:text-sm border-gray-300 rounded-full" //TODO text indent
          placeholder="Search"
          defaultValue={keyword}
          onKeyPress={(e) => handleOnKeyPress(e)}
        />
      </div>
    </div>
  );
}
