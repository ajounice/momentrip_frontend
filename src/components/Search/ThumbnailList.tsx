import React from 'react';
import RoundSF from '../ShortForm/RoundSF';

interface InterThumbnail {
  src: string;
  href: string;
}
const ThumbnailList = ({ DataThumbnailList }: any) => {
  return (
    <div className="flex overflow-x-auto">
      <div className="gap-1 flex ml-4git ">
        {DataThumbnailList.map((data: any) => (
          <RoundSF key={data.id} src={data.src} href={data.href} shortFormId={1} likeCount={data.likeCount} />
        ))}
      </div>
    </div>
  );
};

export default ThumbnailList;
