import React from 'react';
import {Menu,Icon} from 'antd'
import {withRouter} from "react-router-dom"
import Logo from "../../assets/img/logo.png"
import './index.css'
const { SubMenu } = Menu;
const menuList = [
    {
        name:"首页",
        icon:"home",
        key:"/"
    },
    {
        name:"系统运行环境", //profile
        icon:"setting",
        key:'sub1',
        children:[
            {
                name:"安装证书",
                key:"/env/certificate",
            }
        ]
    },
    {
        name:"系统操作说明",
        icon:"profile",
        key:'sub2',
        children:[
            {
                name:"系统操作流程",
                key:"/explain/certificate",
            },
            {
                name:"登陆",
                key:"/explain/login",
            },
            {
                name:"首页",
                key:"/explain/home",
            },
            {
                name:"我的成果",
                key:"/explain/fruit",
            },
            {
                name:"我的项目",
                key:"/explain/project",
            },
            {
                name:"分析制图",
                key:"/explain/analysis",
            }
        ]
    }
];
class Menus extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuList:[],
            collapsed: false,
            activeKey:["/"]
        }
    }
    componentWillMount(){
        const menus = this.formatMenuList(menuList);
        this.setState({
            menuList:menus
        });
    }
    // 格化式菜单，支持无限嵌套
    formatMenuList(menus){
        return menus.map(item=>{
            if(item.children){
                return (
                    <SubMenu
                        key={item.key}
                        title={
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.name}</span>
                        </span>
                        }
                    >
                       {this.formatMenuList(item.children)}
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item key={item.key}>
                        <span>{item.icon?<Icon type={item.icon} />:''}{item.name}</span>
                    </Menu.Item>
                )
            }
        })
    }
    // 切换菜单形态
    toggleCollapsed = ()=>{
        // this.setState({
        //     collapsed:!this.state.collapsed
        // })
    }
    handleClickMenuItem = ({key,keyPath})=>{
        this.setState({
            activeKey:keyPath
        })
        this.props.history.push(key)
    }
    render(){
        return (
            <div className="side-bar">
                <h1 className="doc-title">
                    <img src={Logo} alt="logo" className="logo" onClick={this.toggleCollapsed} />
                    <span>技术创新中心</span>
                </h1>
                 <Menu  mode="inline" style={{border:0}} onClick={this.handleClickMenuItem} selectedKeys={this.state.activeKey}>
                    {this.state.menuList}
                </Menu>
            </div> 
        )
    }
}
export default withRouter(Menus)


