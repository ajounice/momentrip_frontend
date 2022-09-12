import React, { MouseEventHandler, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

const TagItem = ({ id, name, value, onHandler }: { id: string; name: string; value: string; onHandler?: any }) => {
  value = '#' + value;

  return (
    <div>
      <div>
        {onHandler ? (
          <button
            name={name}
            id={id}
            className={
              'text-sm text-center mr-2 px-2 mt-2 shadow-sm h-8 bg-gray-100  block sm:text-sm border-gray-300 rounded-full'
            }
            value={id}
            onClick={(e) => onHandler(e.currentTarget.textContent?.replace('#', ''))}
          >
            {value}
          </button>
        ) : (
          <button
            name={name}
            id={id}
            className={
              'text-sm text-center mr-2 px-2 mt-2 shadow-sm h-8 bg-gray-100  block sm:text-sm border-gray-300 rounded-full'
            }
            value={id}
          >
            {value}
          </button>
        )}
      </div>
    </div>
  );
};

export default TagItem;
