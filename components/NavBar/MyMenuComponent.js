import React from "react";
import Dropdown from "./DropDown";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

const MyMenuComponent = ({ items }) => {
  return (
    <>
      {items.submenu ? (
        <Dropdown submenus={items.submenu} title={items.title} />
      ) : (
        <Menu
          menuButton={
            <MenuButton className="focus:outline-none">
              {items.title}
            </MenuButton>
          }
        >
          {/* If needed, you can add static default menu items */}
        </Menu>
      )}
    </>
  );
};

export default MyMenuComponent;
