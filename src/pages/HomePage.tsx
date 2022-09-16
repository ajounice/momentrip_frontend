import React, { useEffect, useState } from 'react';
import { IButton } from '../globalType';
import VerticalNavigation from '../components/Navigation/VerticalNavigation';
import { ShortForm } from '../components/View/ShortForm';

function HomePage() {
  const defaultData: IButton = {
    text: '팔로우',
    buttonType: 'submit',
    styleType: 'full',
    color: 'red',
    size: 'sm',
    fontWeight: 'normal',
    disabled: true,
  };

  const [follow, setFollow] = useState<IButton>(defaultData);

  // eslint-disable-next-line no-undef,max-len,no-unused-vars
  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (follow.text === '팔로잉') {
      setFollow(defaultData);
    } else {
      const prop: IButton = defaultData;
      prop.text = '팔로잉';
      prop.styleType = 'line';
      setFollow(prop);
    }
  };

  return (
    <div className="home-page-container">
      <ShortForm />
    </div>
  );
}

export default HomePage;
