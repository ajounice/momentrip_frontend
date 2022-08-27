import React from 'react';
import Thumbnail from './Thumbnail';

interface InterThumbnail {
  src: string;
  href: string;
}
const ThumbnailList = ({ DataThumbnailList }: any) => {
  return (
    <div className="flex overflow-x-auto">
      <div className="gap-1 flex ml-4git ">
        {DataThumbnailList.map((data: any) => (
          <Thumbnail key={data.id} src={data.src} href={data.href} />
        ))}
      </div>
    </div>
  );
};

export default ThumbnailList;
