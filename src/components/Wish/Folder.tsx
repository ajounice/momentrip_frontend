import React from 'react';

interface IFolder {
  label?: string;
  id: number;
  thumbnail: string[];
  link?: string;
}

const Folder = ({ label, id, thumbnail, link }: IFolder) => {
  return (
    <div className="">
      <a href={'/wish?wish_id=' + id}>
        <div className="bg-gray-100">
          {thumbnail.length === 1 ? (
            <div className="w-full relative after:pb-[100%] after:block">
              <img src={thumbnail[0]} className="w-full h-full object-cover absolute" />
            </div>
          ) : (
            <div className="grid grid-rows-2 grid-cols-2">
              {thumbnail.map(() => (
                <div className="w-full relative after:pb-[100%] after:block">
                  <img src={thumbnail[0]} className="w-full h-full object-cover absolute" />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="pt-2 pl-1 font-semibold">{label}</div>
      </a>
    </div>
  );
};

export default Folder;
