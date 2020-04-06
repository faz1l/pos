import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import Header from './Components/Header';
import Clock from './Components/Clock';
import ShoppingList from './Components/ShoppingList';

const App = () => {
  return (
    <div className = "app">
      <Clock />
      <Header name = "Наума" />
      <ShoppingList />
    </div>
  );
};


// ========================================

ReactDOM.render(
  <App /> ,
  document.getElementById('root')
);
