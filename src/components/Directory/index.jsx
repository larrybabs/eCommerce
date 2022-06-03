import React from 'react';
import './styles.scss'
import ShopMen from './../../assets/ShopMen.jpg'
import ShopWomen from './../../assets/ShopWomen.jpg'

const Directory = () => {
  return (
    <div className="directory">
      <div className="wrapper">
          <div
          className="item"
          style={{ backgroundImage: `url(${ShopWomen})`}}>
              <a href="/">Shop Women's</a>
          </div>
          <div
          className="item"
          style={{ backgroundImage: `url(${ShopMen})`}}>
              <a href="/">Shop Men's</a>
          </div>
      </div>
    </div>
  );
}

export default Directory;
