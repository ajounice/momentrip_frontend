import React from 'react';
import Avatar from "../common/Avatar";
import '../../styles/components/Card/Follow.css';

interface IFollow{
  profile : string;
  name : string;
  follow : boolean;
}

function Follow(){
  return(
    <div className={'follow-card-container'}>
      <div className={'follow-card-inner-container'}>
        <div className={'user-info-container'}>
          <Avatar size={'md'} src={'https://picsum.photos/200'} />
          <span className={'user-nickName'}>name</span>
        </div>
        <button className={'delete-button'}>삭제</button>
      </div>
    </div>
  );
}

export default Follow;
