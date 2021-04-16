import {lazy} from 'react'

const Home = lazy(()=>import('./home'))
const About = lazy(()=>import('./about'))
const Login = lazy(()=>import('./login'))
const Study = lazy(()=>import('./study'))
const Experience = lazy(()=>import('./experience'))
const Project = lazy(()=>import('./project'))

export {
    Home,
    About,
    Login,
    Study,
    Experience,
    Project
}