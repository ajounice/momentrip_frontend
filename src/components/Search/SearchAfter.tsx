import React, { useState } from 'react';
import InnerTab from '../common/InnerTab';

const SearchAfter = ({keyword}:{keyword:string}) => {
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
        <>{keyword}에 대한 게시물 검색결과</>
      ) : (
        <>{keyword}에 대한 계정 검색 결과</>
      )}
    </div>
  );
};

export default SearchAfter;
