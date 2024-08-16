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
        "/images/slidernew/sn01.JPG" />
    </div>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/sn02.JPG" />
    </div>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/sn03.JPG" />
    </div>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/sn04.JPG" />
    </div>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/cs_01.jpg" />
    </div>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/cs_02.JPG" />
    </div>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/sn06.JPG" />
    </div>
    <div>
      <img className="object-contain h-96 w-full"
        src=
        "/images/slidernew/sn05.JPG" />
    </div>
  </Carousel>
);
export default Carousel1;