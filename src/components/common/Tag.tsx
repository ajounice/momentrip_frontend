import React from 'react';
import '../../styles/components/common/Tag.css';

interface TagProps{
    tag : string;
}

function Tag({ tag }:TagProps) {
  return (
    <div className="tag-container">
      <span className="tag-text">
        #&nbsp;
        {tag}
      </span>
    </div>
  );
}

export default Tag;
