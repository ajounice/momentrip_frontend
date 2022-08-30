import React from 'react';
import { Link } from 'react-router-dom';

const TagItem = ({ id, name, value }: { id: string; name: string; value: string }) => {
  value = '#' + value;

  return (
    <div>
      <div>
        <Link to={'?keyword=' + id}>
          <button
            name={name}
            id={id}
            // TODO max wide로 태그 갯수 설정 -> 디스플레이 속성보고 맞춰서 하기
            className={
              'text-sm text-center mr-2 px-2 mt-2 shadow-sm h-8 bg-gray-100  block sm:text-sm border-gray-300 rounded-full'
            }
          >
            {value}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TagItem;
