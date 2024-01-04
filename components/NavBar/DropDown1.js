import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';

const Dropdown1 = ({ title, submenus }) => {
    return (
        <>

            <Menu menuButton={<MenuButton>{title}</MenuButton>} >
                {
                    submenus.map((submenu, index) => {
                        return <MenuItem href={submenu.url} key={index}>{submenu.title}</MenuItem>
                    })
                }
            </Menu>

        </>

        // <Menu menuButton={<MenuButton>{title}</MenuButton>} >
        //     {
        //         submenus.map((submenu, index) => {
        //             return <MenuItem href={submenu.url} key={index}>{submenu.title}</MenuItem>
        //         })
        //     }
        // </Menu>
    );
};

export default Dropdown1;