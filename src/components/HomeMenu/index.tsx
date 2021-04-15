import React,{useState} from 'react';

import { Menu } from 'antd';

function HomeMenu() {

    const [current, setCurrent] = useState('menu1')

    const clickMenuItem = (e:any)=>{
        setCurrent(e.key)
    }
    return (
        <div>
            <Menu onClick={clickMenuItem} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="menu1" >菜单一</Menu.Item>
                <Menu.Item key="menu2" >菜单二</Menu.Item>
                <Menu.Item key="menu3" >菜单三</Menu.Item>
                <Menu.Item key="menu4" >菜单四</Menu.Item>
            </Menu>
        </div>
    );
}

export default HomeMenu;