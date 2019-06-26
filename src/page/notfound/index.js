import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import './index.css'
export default function NotFount() {
    return (
        <div className="wrap">
            <div className="error-title">
                404错误,当前页面不存在
            </div>
            <div className="error-container">
                <span className="danc1">4</span>
                <span className="danc2">0</span>
                <span className="danc3">4</span>
            </div>
            <div className="return-home"><Link to="/"><Button type="link">回到首页</Button></Link> </div>
        </div>
    )
}