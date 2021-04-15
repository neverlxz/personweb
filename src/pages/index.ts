import {lazy} from 'react'

const Home = lazy(()=>import('./home'))
const About = lazy(()=>import('./about'))
const Login = lazy(()=>import('./login'))

export {
    Home,
    About,
    Login
}