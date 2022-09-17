import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../components/common/Avatar';
import Folder from '../components/Wish/Folder';
import InnerTab from '../components/common/InnerTab';
import { SERVER_API } from '../config';
import axios from 'axios';
import { WishFolder } from '../globalType';

interface IFolder {
  name: string;
  id: number;
  wishlists: any;
}
// const mockFolderListData = {
//   Folders: [
//     {
//       name: '부산 여행들',
//       id: 1,
//       wishlists: [
//         'https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel',
//         'https://img.hankyung.com/photo/202205/AA.30084620.1.jpg',
//         'https://tubefactory.co.kr/wp-content/uploads/2021/08/%EB%B9%84%EC%88%98%EA%B8%B0%EB%B3%B4%EB%8B%A4-%ED%95%9C%EC%82%B0%ED%95%98%EB%8B%A4%EB%8A%94-%ED%95%B4%EC%9A%B4%EB%8C%80-%EC%8B%A4%EC%A0%9C%EB%AA%A8%EC%8A%B5.jpg',
//         'http://tourimage.interpark.com/BBS/Tour/FckUpload/202007/6373120505517084160.jpg',
//       ],
//       link: '',
//     },
//     {
//       name: '호텔 갈곳',
//       id: 2,
//       thumbnail: [
//         'https://i0.wp.com/blog.allstay.com/wp-content/uploads/2021/07/couple-main.jpg?resize=740%2C555&ssl=1',
//       ],
//       link: '',
//     },
//     {
//       name: '아무거나',
//       id: 3,
//       thumbnail: [
//         'https://post-phinf.pstatic.net/MjAxOTA5MTZfMjk3/MDAxNTY4NjA4MjM2MTMz.Zw5weDmwFFtJrBXK3M_6zmBkxThie1ry-pw-phpNwSIg.-ueJSvB1y9Mg5HkNkGi3d1Zp3CCPFsx9NBkDZMTLAcQg.JPEG/Korea_Yeosu_Yeosu_Venezia_Hotel__Resort_%284%29.jpg?type=w1200',
//         'https://post-phinf.pstatic.net/MjAyMDAzMDFfNDQg/MDAxNTgzMDQwODM4Nzc1.1Nq6rpkR1LO5iwc2aaDBgiVye1XlK0BOVIH2Emfkq8Eg.NkH2nLVh1b1PhgELR942qkemJGUlNY5odBBw-USMxqkg.JPEG/0-1.jpg?type=w1200',
//       ],
//       link: '',
//     },
//   ],
// };

function WishPage() {
  const tabs = ['RiVideoLine', 'RiMapPinLine'];
  const [selected, setSelected] = useState(tabs[0]);
  const [params, setParams] = useState<string | null>();

  // 한번만 마운트 되게
  const [mount, setMount] = useState<number>(0);

  const [wishList, setWishList] = useState<WishFolder[]>([]);

  // useEffect(() => {
  //   if (mount === 0) {
  //     setMount(1);
  //   } else {
  //     axios
  //       .get(`${SERVER_API}/wishlists`, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem('Token')}`,
  //         },
  //       })
  //       .then((res) => {
  //         if (res.status === 200) {
  //           setWishList(res.data.data);
  //         }
  //       });
  //   }
  // }, [mount]);

  /* ===== 서버 연동 ===== */
  const [accessToken, setAccessToken] = useState<string | null>();
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setParams(params.get('wish_id'));
    setAccessToken(window.localStorage.getItem('Token'));
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axios = require('axios');
  const instance = axios.create({
    baseURL: 'http://test.heroforyou.space/api',
    timeout: 3000,
  });
  useEffect(() => {
    async function getData() {
      try {
        const response = await instance.get('/wishlists', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          setFolders(response.data);
          console.log(response.data);
        }
        return null;
      } catch (error) {
        console.error(error);
      }
    }

    getData();
    // console.log(formsData);
  }, [accessToken]);

  return (
    <div className="px-4">
      <div className="my-20">
        {params ? (
          <>
            {/* wish inner page  */}
            <InnerTab
              tabs={tabs}
              selected={selected}
              onChangeButton={(e) => setSelected(e.currentTarget.textContent)}
              // onChangeButton={(e) => console.log(e.currentTarget.textContent)}
            ></InnerTab>
            {selected === tabs[0] ? <>shortform</> : selected === tabs[1] ? <>tourInfo</> : <>aa</>}{' '}
          </>
        ) : (
          <>
            {/* wish main page */}
            <div>
              {/* TODO 탑 네비게이션에서 텍스트받도록 수정 */}
              <div className="grid grid-cols-2 gap-2">
                {folders.map((data: IFolder, i) => (
                  <Folder label={data.name} id={data.id} thumbnail={data.wishlists}></Folder>
                ))}
                {/* FIXME: 위시리스트 섬네일 받아오게 수정되면 수정*/}
                {/*{*/}
                {/*  wishList.map((folder)=>{*/}
                {/*    <Folder label={folder.name} id={folder.id} thumbnail={""} />*/}
                {/*  })*/}
                {/*}*/}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default WishPage;
