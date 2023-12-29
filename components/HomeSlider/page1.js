"use client"
import React from 'react';
import { Carousel } from 'antd';
// const contentStyle = {
//   height: '450px',
//   width: '1050px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };
const Carousel1 = () => (
  <Carousel autoplay>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/01.jpg" />
    </div>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/02.jpg" />
    </div>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/03.jpg" />
    </div>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/04.jpg" />
    </div>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/05.jpg" />
    </div>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/06.jpg" />
    </div>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/07.jpg" />
    </div>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/08.jpg" />
    </div>
  </Carousel>
);
export default Carousel1;