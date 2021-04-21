import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { Home, About } from './pages'
import { Routers } from './router'
import './App.scss'
function App () {
   type RouterType = {
    path: string,
    component: React.LazyExoticComponent<any>,
    root: string[],
    notExect?: boolean,
    children?: RouterType[],
    redirect?: string

}
    //该组件通过递归的方式，将所有route中带有children路由的父路由进行解构,最终用createBasicRoute函数来渲染
    const createFixRoute = (route:RouterType, index:number) => {
      const { path, component: RouteComponent, children } = route;
      if (children) {
        return (
          <Route
            key={index}
            path={path}
            children={props => {
              let redirectPath = null;
              return <RouteComponent {...props}>
                <Switch>
                  {children.map((child, index2) => {
                    const { path: childPath, redirect } = child;
                    if (redirect){
                      redirectPath = childPath;
                    }
                    return createFixRoute({...child, path: path + childPath}, Number(`${index}-${index2}`));
                  })}
                  <Redirect from={`${path}`} to={`${path}${redirectPath || children[0].path}`} />
                </Switch>
              </RouteComponent>;
            }}
          />
        );
      } else {
        return createBasicRoute(route, index);
      }
    };
  
    const createBasicRoute = (route:RouterType, index:number) => {    //  最基础的Router 用法
      const { path, component: Component } = route;
      return <Route exact key={index} path={path} component={(props: any) => {
        return <Component {...props} />;
      }} />;
    };
  return (
      <Switch>
        {
          // Routers.map(router => (
          //   <Route
          //     exact={!router.notExect}
          //     key={router.path}
          //     path={router.path}
          //     component={router.component}
          //   >
          //   </Route>
          // ))
          
          Routers.map((route, index) => createFixRoute(route, index))
          
        }
        {/* 设置默认路由 推荐方法一*/}
        {/* 方法一 */}
        {/* <Route path="/" component={Home} exact></Route> */}
        {/* <Route path="/about" component={About} exact></Route> */}
        {/* <Route path="/about" component={About} exact></Route> */}
        {/* 方法二 重定向*/}
        <Redirect path="/" to="/home" />
      </Switch>
  )
}

export default withRouter(App)
