import React, { Component } from "react";
import { Carousel } from "antd";
import "./style.less";
export default class TopCarousel extends Component {
    render(){
        return (
            <Carousel autoplay effect="fade">
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        )
    }
}