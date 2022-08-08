import React from 'react';
import '../../styles/components/common/Tag.css';

interface ITag{
    tag : string;
}

function Tag({ tag }:ITag) {
  return (
    <div className="tag-container">
      <span className="tag-text">
        #
        {tag}
      </span>
    </div>
  );
}

export default Tag;
