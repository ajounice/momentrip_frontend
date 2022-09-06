import React from 'react';
import RoundSF from '../../components/ShortForm/RoundSF';
import FullSF from '../../components/ShortForm/FullSF';
import SquareSF from '../../components/ShortForm/SquareSF';

const mockShortFormListsData = {
  shortForm: [
    {
      userId: 1,
      shortFormId: 1,
      src: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      href: 'https://blog.kakaocdn.net/dn/RS1O8/btqEwRYEgAG/SI0UZck2vAg7NAy4ZybGFk/img.png',
      likeCount: 12,
      innerAvatar: {
        src: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfMTUw/MDAxNTYzMTEyNjcwNzIy.fE7H6I1cLHlImgwlfFK6iSafnnIscZ9Hp-lIbWPtDV4g.UP4blzQP-WlF4XqHZZBn0p7HMbsqF064zo5mSWtzl2sg.JPEG.studygir/tejuTyY_(17).jpg?type=w800',
      },
    },
    {
      userId: 1,
      shortFormId: 1,
      src: 'https://png.pngtree.com/thumb_back/fh260/png-vector/20200530/ourmid/pngtree-beach-png-image_2215226.jpg',
      href: 'https://png.pngtree.com/thumb_back/fh260/png-vector/20200530/ourmid/pngtree-beach-png-image_2215226.jpg',
      likeCount: 12,
      innerAvatar: {
        src: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTRfMTUw/MDAxNTYzMTEyNjcwNzIy.fE7H6I1cLHlImgwlfFK6iSafnnIscZ9Hp-lIbWPtDV4g.UP4blzQP-WlF4XqHZZBn0p7HMbsqF064zo5mSWtzl2sg.JPEG.studygir/tejuTyY_(17).jpg?type=w800',
      },
    },
  ],
};

const ComSF = () => {
  return (
    <>
      {mockShortFormListsData.shortForm.map((data) => (
        <RoundSF
          src={data.src}
          href={data.href}
          shortFormId={data.shortFormId}
          likeCount={data.likeCount}
          // innerAvatar={data.innerAvatar}
        ></RoundSF>
      ))}
      <div className="grid grid-cols-2 gap-1">
        {mockShortFormListsData.shortForm.map((data) => (
          <FullSF
            src={data.src}
            href={data.href}
            shortFormId={data.shortFormId}
            likeCount={data.likeCount}
            innerAvatar={data.innerAvatar}
          ></FullSF>
        ))}
      </div>
      <div className="grid grid-cols-2">
        {mockShortFormListsData.shortForm.map((data) => (
          <SquareSF
            src={data.src}
            href={data.href}
            shortFormId={data.shortFormId}
            // likeCount={data.likeCount}
            // innerAvatar={data.innerAvatar}
          ></SquareSF>
        ))}
      </div>
      <div className="grid grid-cols-3">
        {mockShortFormListsData.shortForm.map((data) => (
          <SquareSF
            src={data.src}
            href={data.href}
            shortFormId={data.shortFormId}
            // likeCount={data.likeCount}
            // innerAvatar={data.innerAvatar}
          ></SquareSF>
        ))}
      </div>
    </>
  );
};

export default ComSF;
