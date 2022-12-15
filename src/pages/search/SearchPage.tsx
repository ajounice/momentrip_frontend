import React from 'react';
import SearchBar from '../../components/Search/SearchBar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchAfter from '../../components/Search/SearchAfter';
import SearchBefore from '../../components/Search/SearchBefore';

const SearchPage = () => {
  const navigation = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState('');
  const searchResult = useState({
    'user' : [],
    'form' : [],
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search).get('keyword');
    setSearchKeyword(params !== null ? params : '');
  }, [new URLSearchParams(location.search).get('keyword')]);

  function searchHandler(value: string) {
    navigation('/search?keyword=' + value)
    location.reload();
  }

  return (
    <div className="px-4">
      {/* SearchBar */}
      <div className="mt-20 h-full">
        <SearchBar searchHandler={searchHandler} keyword={searchKeyword} searchResult={searchResult} />
      </div>
      {/* Search Contents */}
      {searchKeyword ? <SearchAfter keyword={searchKeyword}></SearchAfter> : <SearchBefore searchHandler={searchHandler}></SearchBefore>}
    </div>
  );
};

export default SearchPage;
