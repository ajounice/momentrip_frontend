import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ISearchResult } from "../../pages/search/SearchPage";

export default function SearchBar({searchHandler, keyword, searchResult, setSearchResult}:{searchHandler:(value:string)=>void, keyword:string, searchResult: ISearchResult, setSearchResult: Dispatch<SetStateAction<ISearchResult>> }) {
  const navigation = useNavigate();

  useEffect(() => {
    if(keyword !== '') {
      const requestType = ['user', 'form'];
      requestType.forEach( type => {
        axios({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}/search?type=${type}&tag=${keyword}`,
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('Token')}`,
          },
        })
          .then((res) => {
            const temp = JSON.parse(JSON.stringify(searchResult));
            if(type === 'user') {
              temp.user = res.data;
            }
            else {
              temp.form = res.data;
            }
            setSearchResult(temp);
          })
          .catch((err) => {
            console.log(err);
          });
      })
    }
  }, [keyword])

  useEffect(()=> {
    console.log(searchResult);
  },[searchResult]);

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
