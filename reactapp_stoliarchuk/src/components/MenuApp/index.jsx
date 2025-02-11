
import React from 'react';
import Menu from '../Menu';

const MenuApp = ({ data }) => {
  return (
    <div>
      {data.map(menu => (
        <Menu key={menu.menuName} {...menu} />
      ))}
    </div>
  );
};

export default MenuApp;
