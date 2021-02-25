import React from 'react'
import {Link} from 'react-router-dom'

export default function Home(){
    return (
        <div>
            about页面
            <Link to="/home">跳转到</Link>
        </div>
    )
}