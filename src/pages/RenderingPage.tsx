import React from "react";
import { Link } from "react-router-dom";

function RenderingPage(){
  return(
    <Link to={'/login'}>
      <img src={'img/renderImg.png'} alt={'render image'}  className={'renderImg'} />
    </Link>
  );
}

export default RenderingPage;
