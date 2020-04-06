import React from 'react';
import '../Styles/ShoppingList.css';

const Witcher = () => {
  return (
    <div className="witcher">
      <ul>
        <li><span class="badge badge-primary">Стандартное издание</span></li>
        <li><span class="badge badge-primary">Расширенное издание</span></li>
      </ul>
    </div>
  );
};

const Monitors = () => {
  return (
    <div className="monitors">
      <ul>
        <li><span class="badge badge-primary">AOC</span></li>
        <li><span class="badge badge-primary">DELL</span></li>
        <li><span class="badge badge-primary">Asus</span></li>
      </ul>
    </div>
  );
};

const Mouses = () => {
  return (
    <div className="mouses">
      <ul>
        <li><span class="badge badge-primary">Apple</span></li>
        <li><span class="badge badge-primary">Asus</span></li>
        <li><span class="badge badge-primary">Acer</span></li>
      </ul>
    </div>
  );
};

const ShoppingList = () => {
  return (
    <div className="shopping-list">
      <ul>
        <li><span class="badge badge-success">Ведьмак 2: Убийцы Королей</span>
          <Witcher />
        </li>
        <li><span class="badge badge-success">Монитор</span>
          <Monitors />
        </li>
        <li><span class="badge badge-success">Нормальная мышка</span>
          <Mouses />
        </li>
        <li><span class="badge badge-success">Коврик для мыши</span></li>
      </ul>
    </div>
  );
};

export default ShoppingList;
