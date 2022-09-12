import React, { Dispatch, SetStateAction } from "react";
import '../../../styles/components/Modal/Vertical/Share.css';
import { RiCloseFill } from "react-icons/ri";

interface IShare{
  setViewShare : Dispatch<SetStateAction<boolean>>;
}

function Share({setViewShare}:IShare){
  return(
    <div className={'share-modal-container'}>
      <div className={'share-modal-top-nav'}>
        <span className={'share-modal-top-nav-text'}>공유</span>
        <div className={'share-modal-close-icon-container'} onClick={()=>{setViewShare(false)}}>
          <RiCloseFill className={'close-icon'} size={30} />
        </div>
      </div>
    </div>
  );
}

export default Share;
