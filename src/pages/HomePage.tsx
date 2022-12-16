import React, { useEffect } from 'react';
import { IButton } from '../globalType';
import { ShortForm } from '../components/View/ShortForm';
import axios from 'axios';
import '../styles/pages/HomePage.css';

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

  // const [follow, setFollow] = useState<IButton>(defaultData);

  // eslint-disable-next-line no-undef,max-len,no-unused-vars
  // const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //
  //   if (follow.text === '팔로잉') {
  //     setFollow(defaultData);
  //   } else {
  //     const prop: IButton = defaultData;
  //     prop.text = '팔로잉';
  //     prop.styleType = 'line';
  //     setFollow(prop);
  //   }
  // };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/my`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Token')}`,
        },
      })
      .then((res) => {
        console.log("/users/my in Home");
        if (res.data.nickname === null) {
          window.location.assign('/add/data');
        }
        else {
          window.sessionStorage.setItem('user', JSON.stringify(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home-page-container">
      <ShortForm />
    </div>
  );
}

export default HomePage;
