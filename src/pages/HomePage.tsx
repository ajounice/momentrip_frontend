import React, { useState } from 'react';
import Tag from '../components/common/Tag';
import Button from '../components/Button/Button';
import { BottomNavigation, TopNavigation } from '../components/common/Navigation';
import {
  IButton,
} from '../globalType';

function HomePage() {
  const defaultData:IButton = {
    text: '팔로우',
    buttonType: 'submit',
    styleType: 'full',
    color: 'purple',
    size: 'sm',
    fontWeight: 'normal',
    disabled: false,
  };

  const [follow, setFollow] = useState<IButton>(defaultData);

  // eslint-disable-next-line no-undef,max-len
  const onClickHandler:React.MouseEventHandler<HTMLButtonElement> = (event :React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (follow.text === '팔로우') {
      setFollow({
        text: '팔로잉',
        buttonType: 'submit',
        styleType: 'line',
        color: 'purple',
        size: 'sm',
        fontWeight: 'normal',
        disabled: false,
      });
    } else {
      setFollow({
        text: '팔로우',
        buttonType: 'submit',
        styleType: 'full',
        color: 'purple',
        size: 'sm',
        fontWeight: 'normal',
        disabled: false,
      });
    }
  };

  return (
    <div className="home-page-container">
      <TopNavigation />
      Home
      <Tag tag="Home" />
      <Button
        buttonStyle={follow}
        onClickEvent={onClickHandler}
      />
      <BottomNavigation />
    </div>
  );
}

export default HomePage;
