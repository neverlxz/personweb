import React,{ useState } from 'react';
import './index.scss'
import {Link} from 'react-router-dom'
import { Input } from 'antd'
interface HeaderProps{
    name: String
}

const { Search } = Input

function HomeHeader(props:HeaderProps) {
    const [name, setName] = useState(props.name)
    
    const onSearch = (value:string)=>{
        if(value) setName(value)
        console.log(value)
    }

    return (
        <div className="header-container">
            <div className="info">{ name }</div>
            <Search style={{ width: 500,lineHeight: '40px' }} placeholder="input search text" onSearch={onSearch} enterButton />
            <Link className="link-word" to="/login">登录</Link>
        </div>
    );
}

export default HomeHeader;