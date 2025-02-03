import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
const Dropdown = ({ title, submenus }) => {

    return (
                <Menu menuButton={<MenuButton>{title}</MenuButton>} >
                    {
                        submenus.map((submenu, index) => {
                            return <MenuItem href={submenu.url} key={index}>{submenu.title} &nbsp;</MenuItem>
                        })
                    }
                </Menu>
    );
};

export default Dropdown;