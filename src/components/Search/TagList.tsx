import React, { SetStateAction } from 'react';
import TabItem from './TagItem';

const TabList = ({
  itemList,
  setKeyword,
  onHandler,
}: {
  itemList: any[];
  setKeyword: React.Dispatch<SetStateAction<string>>;
  onHandler?: any;
}) => {
  return (
    <div className="flex flex-wrap">
      {/* TODO 태그 최대 갯수 설정 */}
      {/* // TODO max wide로 태그 갯수 설정 -> 디스플레이 속성보고 맞춰서 하기 */}
      {itemList.map((item) => (
        <TabItem key={item.id} id={item.id} name={item.name} value={item.value} onHandler={onHandler} />
      ))}
    </div>
  );
};

export default TabList;
