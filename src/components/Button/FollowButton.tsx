import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import '../../styles/components/Button/FollowButton.css';

interface FollowProps {
  follow: boolean;
  setFollow: Dispatch<SetStateAction<boolean>>;
}

function FollowButton({ follow, setFollow }: FollowProps) {
  const [buttonCss, setButtonCss] = useState<string>('follow-button');
  const [buttonText, setButtonText] = useState<string>('팔로우');

  const onClickFollow = () => {
    if (follow) {
      setFollow(false);
      setButtonCss('following-button');
      setButtonText('팔로잉');
    } else {
      setFollow(true);
      setButtonCss('follow-button');
      setButtonText('팔로우');
    }
  };
  // useEffect(() => {
  // }, [follow]);

  return (
    <button className={buttonCss} onClick={onClickFollow} type="button">
      {buttonText}
    </button>
  );
}

export default FollowButton;
