import React from "react"
import App from "./App"
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Menus from "./components/menus"
import Home from "./page/home"
import './assets/css/router.css'
// 1. 系统运行环境
import Env from './page/env'
import Certificate from './page/env/certificate' //1.1 安装证书
// 2.系统操作说明
import Explain from './page/explain'
import EProcess from './page/explain/process'   // 2.1 系统操作流程
import ELogin from './page/explain/login'       // 2.2 登录
import EHome from './page/explain/home'         // 2.3 首页
import EFruit from './page/explain/fruit'       // 2.4 我的成果
import EProject from './page/explain/project'   // 2.5 我的项目
import EAnalysis from './page/explain/analysis' // 2.6 分析制图
// 404页面
import NotFound from './page/notfound'
export default class IRouter extends React.Component {
    state = {
        isShirnk: false
    };
    toggleNav = () => {
        this.setState({
            isShirnk: !this.state.isShirnk
        })
    }
    render() {
        return (
            <HashRouter>
                <div className="container">
                    <div className={this.state.isShirnk ? 'shirnk nav' : 'nav'}>
                        <button className="toggle-btn" onClick={this.toggleNav}>切换</button>
                        <Menus />
                    </div>
                    <div className="main">
                        <App>
                            <Switch>

                                <Route path="/" component={Home} exact></Route>
                                <Route path="/env" render={() => {
                                    return (
                                        <Env>
                                            <Switch>
                                                <Route path="/env/" exact render={() => {
                                                    return (<Redirect to='/env/certificate'></Redirect>)
                                                }}></Route>
                                                <Route path="/env/certificate" component={Certificate}></Route>
                                            </Switch>
                                        </Env>
                                    )
                                }}></Route>
                                <Route path="/explain" render={() => {
                                    return (
                                        <Explain>
                                            <Switch>
                                                <Route path="/explain/" exact render={() => {
                                                    return (<Redirect to='/explain/process'></Redirect>)
                                                }}></Route>
                                                <Route path="/explain/process" component={EProcess}></Route>
                                                <Route path="/explain/login" component={ELogin}></Route>
                                                <Route path="/explain/home" component={EHome}></Route>
                                                <Route path="/explain/fruit" component={EFruit}></Route>
                                                <Route path="/explain/project" component={EProject}></Route>
                                                <Route path="/explain/analysis" component={EAnalysis}></Route>
                                            </Switch>
                                        </Explain>
                                    )
                                }}></Route>
                                <Route component={NotFound}></Route>
                            </Switch>
                        </App>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

