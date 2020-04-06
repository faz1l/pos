import React from 'react';
import '../Styles/Header.css';

const Header = (props) => {
  return (
    <h1 className="listTitle">Список покупок {props.name}</h1>
  );
};

export default Header;
