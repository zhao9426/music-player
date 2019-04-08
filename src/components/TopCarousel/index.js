import React, { Component } from "react";
import { Carousel } from "antd";
import "./style.less";
const LIST = [
  "https://pmusic.oss-cn-hangzhou.aliyuncs.com/banner/bb1.jpg",
  "https://pmusic.oss-cn-hangzhou.aliyuncs.com/banner/bb2.jpg",
  "https://pmusic.oss-cn-hangzhou.aliyuncs.com/banner/bb3.jpg",
  "https://pmusic.oss-cn-hangzhou.aliyuncs.com/banner/bb4.jpg",
  "https://pmusic.oss-cn-hangzhou.aliyuncs.com/banner/bb5.jpg",
  "https://pmusic.oss-cn-hangzhou.aliyuncs.com/banner/bb6.jpg",
  "https://pmusic.oss-cn-hangzhou.aliyuncs.com/banner/bb2.jpg",
];

export default class TopCarousel extends Component {
    render(){
        return (
          <Carousel autoplay effect="fade">
            {LIST.map((item,index) => <div key={index} className="carousel-item">
                <img src={item} style={{width: "100%", height: 445}} alt=""/>
            </div>)}
          </Carousel>
        );
    }
}