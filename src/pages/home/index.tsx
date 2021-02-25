import React from 'react'
import {Link} from 'react-router-dom'
import './index.sass'
export default function Home(){
    return (
        <div>
            <div className="title">home页面</div>
            
            <Link className="link-word" to="/about">跳转到</Link>
        </div>
    )
}