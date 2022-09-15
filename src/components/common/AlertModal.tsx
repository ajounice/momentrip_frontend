import React, { Dispatch, EventHandler, SetStateAction } from "react";
import '../../styles/components/common/AlertModal.css';
import { RiCloseFill } from "react-icons/ri";

interface AlertModal{
  close? :boolean; // close 버튼 유무
  closeEvent? : EventHandler<any> // close버튼 있으면 클릭 이벤트
  TitleText : string;
  subText? : string;
  okButton? : any;
  noButton? : any;
  okButtonEvent? :Dispatch<SetStateAction<any>>;
  noButtonEvent? : Dispatch<SetStateAction<any>>;
}

function AlertModal({close,closeEvent, TitleText, subText, okButton , noButtonEvent, okButtonEvent, noButton}:AlertModal){
  return(
    <div className={'alert-modal-container'}>
      <div className={'alert-modal-top-container'}>
        { close && closeEvent !== undefined
          ? <div onClick={closeEvent}>
              <RiCloseFill className={'alert-close-icon'}/>
            </div>
          :null}
      </div>
      <div className={'alert-modal-text-container'}>
          <h1 className={'title-text'}>{TitleText}</h1>
        <h3 className={'sub-text'}>{subText}</h3>
      </div>
      <div className={'button-container'}>
        {
          okButton && okButtonEvent ?
          <button onClick={okButtonEvent} className={'button ok'} type={'submit'}>예</button>
            :null
        }
        {
          noButton && noButtonEvent?
          <button onClick={noButtonEvent} className={'button no'} type={'button'}>아니오</button>
            :null

        }
      </div>
    </div>
  );
}

export default AlertModal;
