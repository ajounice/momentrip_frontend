import React from 'react';
import TabItem from './TagItem';

const TabList = ({ itemList }: { itemList: any[] }) => {
  return (
    <div className="flex flex-wrap">
      {/* TODO 태그 최대 갯수 설정 */}
      {itemList.map((item) => (
        <TabItem key={item.id} id={item.id} name={item.name} value={item.value} />
      ))}
    </div>
  );
};

export default TabList;
