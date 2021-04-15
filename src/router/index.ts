import {
    Home,
    Login
} from '../pages'

export type RouterType = {
    path: string,
    component: React.LazyExoticComponent<any>,
    root: string[],
    notExect?: boolean
}

const HomeRouter: RouterType = {
    path: '/home',
    component: Home,
    root: []
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