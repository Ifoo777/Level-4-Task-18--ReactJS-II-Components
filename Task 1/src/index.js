import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Product array to be used as props

const products = [
  {item:'One piece suit - Grey' , price: 10000, photo:require('./images/suit.jpg'), id:1},
  {item:'Premium Shoes', price: 5000, photo:require('./images/shoes.jpg' ), id:2},
  {item:'Designer Shirt – Brown shirt', price: 3250, photo:require('./images/shirt.jpg' ), id:3}

];

/* Render in page */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<App login = {true} products={products}/>

  </React.StrictMode>
);

reportWebVitals();
