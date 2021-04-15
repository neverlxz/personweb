import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './index.scss'
import {Button} from 'antd'
import HomeHeader from '../../components/pageHeader/index'
import HomeMenu from '../../components/HomeMenu/index'

export default function Home(){
    const history = useHistory();
    const clickJump:()=>void  = ()=>{
        history.push('/about')
    }

    return (
        <div className="home-container">
            {/* <div className="title">home页面</div>
            <Button onClick= {clickJump} type="primary">我也可以跳转哦</Button>

            <Link className="link-word" to="/about">跳转到</Link> */}

            {/* 顶部操作栏 */}
            <HomeHeader name="一二三四" />
            
            {/* 顶部菜单栏 */}
            <HomeMenu />
        </div>
    )
}