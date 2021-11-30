import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demo from './App';

// axios.get('http://localhost:8080/hello').then((res)=>{
//   console.log('res',res)
// })

ReactDOM.render(

  <Demo />,

  document.getElementById('root')
);

// let zjDiv = document.getElementsByClassName("ant-form ant-form-vertical ant-form-large");
// var BottomHeight = document.defaultView.getComputedStyle(zjDiv[0], null).height;
// console.log('height', BottomHeight)
// var myCanvas = "<canvas id='waterMark' width='" + screen.availWidth + "px' height='" + (BottomHeight + 200) + "px'></canvas>";
// document.body.insertAdjacentHTML("beforeBegin", myCanvas);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
