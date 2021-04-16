import {
    Home,
    Login,
    Study,
    Experience,
    Project
} from '../pages'

export type RouterType = {
    path: string,
    component: React.LazyExoticComponent<any>,
    root: string[],
    notExect?: boolean,
    children?: RouterType[],
    redirect?: string
}
const StudyRouter: RouterType = {
    path: '/home/study',
    component: Study,
    root: []
}
const ProjectRouter: RouterType = {
    path: '/home/project',
    component: Project,
    root: []
}
const ExperienceRouter: RouterType = {
    path: '/home/experience',
    component: Experience,
    root: []
}
const HomeRouter: RouterType = {
    path: '/home',
    // redirect: '/home/study',
    component: Home,
    root: [],
    children:[
        StudyRouter,
        ProjectRouter,
        ExperienceRouter
    ]
}


const LoginRouter: RouterType = {
    path: '/login',
    component: Login,
    root: []
}

const Routers: RouterType[] = ([
    HomeRouter,
    LoginRouter
])

export {Routers}