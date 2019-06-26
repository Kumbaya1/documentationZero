import React from 'react'
import { withRouter } from 'react-router-dom'
import { Icon } from 'antd'
import './index.css'
class ReturnTop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false,
            oApp: null
        }
    }

    componentDidMount() {
        let oApp = document.querySelector('.App');
        this.setState({
            oApp
        });
        oApp.addEventListener('scroll', () => {
            const oAppHeight = oApp.offsetHeight;
            const scrollTop = oApp.scrollTop;
            if (scrollTop >= oAppHeight) {
                // 出现返回顶部
                this.setState({
                    isShow: true
                })
            } else {
                this.setState({
                    isShow: false
                })
            }
            // console.log(oApp.offsetHeight)
            // console.log(oApp.scrollHeight)
            // console.log(oApp.scrollTop)
        }, true)
        window.addEventListener('hashchange', (e) => {
            oApp.scrollTop = 0;
        })
    }
    handleTop = () => {
        let oApp = this.state.oApp;
        this.slowMoveScrollTop(oApp)
        // oApp.scrollTop = 0;
    }
    slowMoveScrollTop = (el, size = 200, delayed = 20) => {
        const top = el.scrollTop;
        if (top <= size) {
            el.scrollTop = 0;
        } else {
            setTimeout(() => {
                el.scrollTop = top - size;
                this.slowMoveScrollTop(el);
            }, delayed)
        }
    }
    render() {
        return (
            <div className={this.state.isShow ? "return-top" : 'return-top hide'} onClick={this.handleTop}><Icon type="caret-up" /></div>
        )
    }
}
export default withRouter(ReturnTop)