import React from 'react';
import './styles.scss'
import ShopMen from './../../assets/ShopMen.jpg'
import ShopWomen from './../../assets/ShopWomenB.jpg'
import { motion } from "framer-motion"

const Directory = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3
      }
    }
  }

  return (
    <motion.div 
    variants={container}
    initial="hidden"
    animate="show" 
    className="directory">

      <div className="wrapper">
          <div
          className="item"
          style={{ backgroundImage: `url(${ShopWomen})`}}>
              <a href="/">Shop Women's</a>
          </div>
          <div
          className="item"
          style={{ backgroundImage: `url(${ShopMen})`, 
          marginLeft: "10px"}}>
              <a href="/">Shop Men's</a>
          </div>
      </div>
    </motion.div>
  );
}

export default Directory;
