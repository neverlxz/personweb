import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'antd';

function HomeMenu() {

    const [current, setCurrent] = useState('menu1')

    const clickMenuItem = (e:any)=>{
        setCurrent(e.key)
    }
    return (
        <div>
            <Menu onClick={clickMenuItem} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="menu1" >
                    <Link to="/home/study">菜单一</Link>
                </Menu.Item>
                <Menu.Item key="menu2" >
                    <Link to="/home/project">菜单二</Link>
                </Menu.Item>
                <Menu.Item key="menu3" >
                    <Link to="/home/experience">菜单三</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default HomeMenu;