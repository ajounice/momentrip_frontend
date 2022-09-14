import React, { Dispatch, SetStateAction } from "react";
import '../../styles/pages/UploadPage.css';

interface UploadPageDropDownProps{
  dropDownList : string[];
  setCategory : Dispatch<SetStateAction<string>>;
  setCategoryList : Dispatch<SetStateAction<boolean>>;
}

function UploadPageDropDown({dropDownList,setCategory, setCategoryList}:UploadPageDropDownProps){
  return(
    <ul className={"upload-page-category-list-container"}>
      {
        dropDownList.map((menu)=>{
          return (<li onClick={()=>{
            setCategory(menu)
            setCategoryList(false)
          }} id={menu}>{menu}</li>)
        })
      }
    </ul>
  )
}

export default UploadPageDropDown;
