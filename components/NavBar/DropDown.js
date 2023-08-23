import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import Dropdown1 from './DropDown1';
import { useEffect } from 'react';
const Dropdown = ({ title, submenus }) => {

    useEffect(() => {
        console.log(submenus.title)
      });
    

    return (
                <Menu menuButton={<MenuButton>{title}</MenuButton>} >
                    {
                        submenus.map((submenu, index) => {
                            return <MenuItem href={submenu.url} key={index}>{submenu.title}</MenuItem>
                        })
                    }
                </Menu>

        // <Menu menuButton={<MenuButton>{title}</MenuButton>} >
        //     {
        //         submenus.map((submenu, index) => {
        //             return <MenuItem href={submenu.url} key={index}>{submenu.title}</MenuItem>
        //         })
        //     }
        // </Menu>
    );
};

export default Dropdown;