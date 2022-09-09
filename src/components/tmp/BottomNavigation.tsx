import React from 'react';
import '../../styles/components/common/Navigation.css';
import { useNavigate } from 'react-router-dom';

import { RiInboxArchiveLine, RiUser3Line, RiVideoAddLine } from 'react-icons/ri';

interface IBottomNavigation {
  color: 'black' | 'white';
}

export default function BottomNavigation({ color }: IBottomNavigation) {
  const navigation = useNavigate();

  return (
    <></>
    // <div className="bottom-nav-container">
    //   <RiInboxArchiveLine
    //     onClick={() => {
    //       navigation('/wish');
    //     }}
    //     fill={color}
    //     className="icon"
    //   />
    //   <div className={'upload-button'}>
    //     <label htmlFor={'upload-file'}>
    //       <RiVideoAddLine
    //         onClick={() => {
    //           navigation('/upload');
    //         }}
    //         fill={color}
    //         className="icon"
    //       />
    //     </label>
    //     <input accept="video/*" type={'file'} id="upload-file" />
    //   </div>
    //   <RiUser3Line
    //     onClick={() => {
    //       navigation('/mypage');
    //     }}
    //     fill={color}
    //     className="icon"
    //   />
    // </div>
  );
}
