import React, { Component } from 'react';
import Carousel2 from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Responsive = {
  widescreen:{
    breakpoint: {max:3000, min:1999},
    items:5,
    slidesToSlide: 4
  },

  Desktop: {
    breakpoint: {max: 1999, min: 1024},
    items:3,
    slidesToSlide: 3
  },
  tablet:{
    breakpoint: {max: 1024, min: 464},
    items: 2,
    slidesToSlide: 2
  },
  mobile:{
    breakpoint: {max:464, min:0},
    items: 1
  }
};


class Design extends Component {
    render() {
        return (
          <Carousel2 responsive={Responsive}>
            <div>0</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </Carousel2>


        );
    }
};


export default Design;
