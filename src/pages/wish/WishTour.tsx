import React from 'react';
import '../../styles/pages/wish/WishTour.css';
import { TopBar } from "../../components/common/Navigation";
import { MapComponent } from "../../components/common/MapComponent";
import TagList from "../../components/Search/TagList";
import { dummyTourInfoData } from "../../components/Modal/Vertical/TourInfo";
import { useNavigate } from "react-router-dom";

function WishTour(){

  const navigation = useNavigate();

  return(
    <div className={'wish-tour-container'}>
      <TopBar beforeButton={true} centerText={"toru info name"} centerTextType={"page"} />
      <div className={'wish-tour-inner-container'}>
        <div className={'tour-info-image-container'}>
          <img className={'tour-info-image'} src={'data:image/jpeg;base64,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'} alt={"tour info"}/>
        </div>
        <div className={'tour-info-tag-price-container'}>
          <span className={'price-span'}>Price : </span>
        </div>

        <div className={'tour-info-tag-list'}>
          <TagList itemList={dummyTourInfoData.hashtags} onHandler={(value:string)=>navigation('/search?keyword='+value)}/>
        </div>

        <div className={'tour-info-map-container'}>
          <MapComponent latitude={37.5524979951415} longitude={126.989316855952} />
        </div>
      </div>
    </div>
  );
}

export default WishTour;
