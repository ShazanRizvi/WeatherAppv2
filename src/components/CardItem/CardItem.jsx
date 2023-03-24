import React from 'react'
import axios from 'axios';
import './CardItem.css'


const CardItem = ({temp,name,time}) => {
  return (
    <>
      <h1 className="Cities">Cities</h1>
      <div class="widget">
        <img
          className="image"
          src="https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ></img>

        <div class="left-panel panel">
          <div class="temp">{temp}&deg; F</div>
        </div>
        <div class="right-panel panel">
          <div class="city">{name}</div>
          <div class="date">{time}</div>
        </div>
      </div>
    </>
  );
}

export default CardItem

