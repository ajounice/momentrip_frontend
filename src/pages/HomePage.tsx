import React, { useState } from 'react';
import Tag from '../components/common/Tag';
import FollowButton from '../components/Button/FollowButton';
import { BottomNavigation, TopNavigation } from '../components/common/Navigation';

function HomePage() {
  const [follow, setFollow] = useState<boolean>(true);

  return (
    <div className="home-page-container">
      <TopNavigation />
      Home
      <Tag tag="Home" />
      <FollowButton follow={follow} setFollow={setFollow} />

      <BottomNavigation />
    </div>
  );
}

export default HomePage;
