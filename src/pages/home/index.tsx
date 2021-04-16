import React from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import './index.scss'
import HomeHeader from '../../components/pageHeader/index'
import HomeMenu from '../../components/HomeMenu/index'
import { Study,Experience,Project} from '../index'

export default function Home(){
    return (
        <div className="home-container">
            {/* 顶部操作栏 */}
            <HomeHeader name="一二三四" />
            
            {/* 顶部菜单栏 */}
            <HomeMenu />

            {/* 路由 */}
            <Switch>
                <Route exact path="/home/study" component={Study} />
                <Route exact path="/home/experience" component={Experience} />
                <Route exact path="/home/project" component={Project} />
                <Redirect path="/home" to="/home/study" />
            </Switch>
        </div>
    )
}