import React from "react";
import "./menu-item.styles.scss";
import {useNavigate, useLocation} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
  let Navigate = useNavigate();
  let Location = useLocation();
  let url= Location.pathname;
  return(
    <div className={`${size} menu-item`} onClick ={()=> Navigate(`${url}${linkUrl}`)} >
    <div style={
    {
      backgroundImage : `url(${imageUrl})`
    }
    }
   className="background-image">
    </div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <h2 className="subtitle">SHOP NOW</h2>
    </div>
  </div>
)};
  

export default MenuItem;