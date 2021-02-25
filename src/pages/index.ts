import {lazy} from 'react'

const Home = lazy(()=>import('./home'))
const About = lazy(()=>import('./about'))

export {
    Home,
    About
}