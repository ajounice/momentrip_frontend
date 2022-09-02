import React from 'react';
import { useState } from 'react';
import InnerTab from '../../components/common/InnerTab';

const tabs = ['게시물', '검색', '탭바3'];
const ComInnerTab = () => {
  const [selected, setSelected] = useState(tabs[0]);
  return (
    <>
      <InnerTab
        tabs={tabs}
        selected={selected}
        onChangeButton={(e) => {
          setSelected(e.currentTarget.textContent);
        }}
      ></InnerTab>
      {selected === '게시물' ? <>게시물선택</> : selected === '검색' ? <>검색 선택</> : <>ㅁㅁ</>}
    </>
  );
};

export default ComInnerTab;
