import React from 'react'
import Dropdown from './DropDown';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
const MyMenuComponent = ({ items }) => {
  return (
    <>
      {items.submenu ? (
        <>
          <Dropdown submenus={items.submenu} title={items.title} />
        </>
      ) : (
        <Menu menuButton={<MenuButton>{items.title}</MenuButton>} />
      )}
    </>
  );
};

export default MyMenuComponent
