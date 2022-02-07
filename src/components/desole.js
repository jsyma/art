import React, { Component } from 'react';
import Carousel2 from 'react-multi-carousel';

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

class Desole extends Component {
    render() {
        return (
          <Carousel2 className = "desole-carousel" responsive = {Responsive}>
            <div>
              <img src="https://lh3.googleusercontent.com/eWaAVYq2BbPUjN8JXl3sMU6-p17aQbVFxtf5eN4-2Ou1lNbVJBZ0NXqJj8OC2wIxw9PcIe05nQypmxrMOn5b1v-t08bIrZiIKp9t3cFicZ0rEm_pBNskrKKReieVKDgvvYsvaoc4tg=w2400" alt="desole"></img>
              <img src="https://lh3.googleusercontent.com/RNdJ6VSccTH84iJg93LDXDXQS7hKZhPEcyxzEzx8Q31WCBe_ePR53wI21cSAi-vTqPh4mFHXEIdkJjxEEMsiGeD_aKZMDOWOvYpo3eYf5eYyygw9y5lAhsJtmZBdxzaPv4WAxDBzoQ=w2400" alt="desole"></img>
            </div>
            <div>
              <img src="https://lh3.googleusercontent.com/zxgAVWxxNQL63EeGJCU8YYcfI-SD777AxjoBjjgleONl_aban0WVOqbGOuY3DOICKF0_WmCHoQQVqgcrwhJh04ocCN3nVbci0y199SCx7gvgYhRvNcCwdEy23CfGW9cDcuPIpldrDQ=w2400" alt=""></img>
              <img src="https://lh3.googleusercontent.com/X3t8_dCjvkzHSNNZPqVjWthFVdCl7ttnnA0Ue--NyCSEz53jfHNRKqXhBU0yIXjJVL_GYyASZrAYjDlIJrUEFnwqcmaQNvpLoaa-3nYWH3pHVwo5JSHHnAFnmaIdL-ehFdxsF9nYbw=w2400" alt="desole"></img>
            </div>
            <div>
              <img src="https://lh3.googleusercontent.com/loDiSzePlY3I_59PbzYEHFYiltUQX8qODl8y3lP_XX2mB4W230GmhTDAbuenxhL25vWQpFUPujBBYbtc5yBK4QcGUiNNFsMZ585ifKF3y2tK8q8kBk_XRn7dHqQ9YiSUms-dzb1Apg=w2400" alt="desole"></img>
              <img src="https://lh3.googleusercontent.com/hwjnlpW-ZkPhWPltqHr4MtqUtEp1sUyEk6Yn60r9tjy4vEiLu2AntZl0o1d4O7kR9AFV8waGjx77b6KNBpEFs3s6eOgBnbX3H_v4W5f_ZY98rk1GVAR-xRJLw0i-M-ZAs9rTwPoReA=w2400" alt="desole"></img>
            </div>
            <div>
              <img src="https://lh3.googleusercontent.com/FLoCTXPF6xm6YloD8bASdJyici4Nidc5Aq37JhndF7pcD6cK47o7g6M269dcaPo9RFNLMgiJg5DK5A-aVfZfgdSntLZuduvEVOgk7JoUGbkVo8M1CAftw97p2WP3mwxpCv5g9PDHJQ=w2400" alt="desole"></img>
              <img src="https://lh3.googleusercontent.com/GdjdXjr8dGH3fN8W6gWdDkU9-gtCWiRSTVdNiesDP76Hm261Yt_PqXDPxZUv78HUFX1Qz8qbRgaJLh4NyE47R9TcIAmtiI6qorgSkfHITf9h4lX5cJO0sHXJvpxzI1FxPpZanQaKRg=w2400" alt="desole"></img>
            </div>
            <div>
              <img src="https://lh3.googleusercontent.com/KYEyn_LXNW_Dnv0TJm9ByrhxUJtlcx6ajoxiquXKMguC8XiyODFbpmIEFk4_svlMYeGWCpn90DU-jEqJb18Hnm_lydC94B5W0eE-x6j4vRqhMRZGaPF2yP_sJBiAHduJcsZiPWonEg=w2400" alt="desole"></img>
              <img src="https://lh3.googleusercontent.com/oqusbBkGA_a9fpX-LebbrQCxPxoIuBTaZIKLMLTQ64KYYOpN0YDHf7LmhKNodI0M_VfQUeRVsvhrEH87ZR4tKAy5-z4etXHD5FVG-30Tl-YmICwfCPhUwD-I1FK1fST4b0fjVtO2-A=w2400" alt="desole"></img>
            </div>
            <div className = "desole-text">
              désolé
            </div>
          </Carousel2>
        );
    }
};
export default Desole;
