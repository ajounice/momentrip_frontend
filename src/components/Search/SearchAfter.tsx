import React, { useState } from 'react';
import InnerTab from '../common/InnerTab';
import { ISearchResult } from "../../pages/search/SearchPage";

const SearchAfter = ({keyword, searchResult}:{keyword:string, searchResult: ISearchResult}) => {
  // TODO: keyword 검색 내용을 요청하는 api

  const tabs = ['게시물', '계정'];

  const [tabSelected, setTabSelected] = useState(tabs[0]);
  return (
    <div>
      <InnerTab
        tabs={tabs}
        selected={tabSelected}
        onChangeButton={(e) => setTabSelected(e.currentTarget.textContent)}
      ></InnerTab>

      {tabSelected === tabs[0] ? (
        <div>
          <>{keyword}에 대한 게시물 검색결과</>
        </div>
      ) : (
        <div>
          <>{keyword}에 대한 계정 검색 결과</>
          {
            searchResult['user'].map( d => {
              return <h1>{d.name}</h1>
            })
          }
        </div>
      )}
    </div>
  );
};

export default SearchAfter;
