import React from 'react'
import img1 from '../../../assets/img/explain/home/1.jpg'
import img2 from '../../../assets/img/explain/home/2.jpg'
import img3 from '../../../assets/img/explain/home/3.jpg'

export default function Home() {
    return (
        <div>
            <h3 >2.3 首页</h3>
            <h4 >2.3.1  功能描述</h4>
            <p>展示平台推荐轮播图、项目管理、分析制图、算法模型、数据资源四大模块的介绍和快捷入口。</p>
            <h4>2.3.2	操作方法</h4>
            <img src={img1} alt="" />
            <h5>2.3.2.1	查看常用推荐，点击想要查看的推荐，进入该推荐界面。也可点击【更多】进入常用推荐列表页；</h5>
            <img src={img2} alt="" />
            <p>2.3.2.2	快速入口，点击想要进入的专题模块，点击【进入】按钮，即可快速进入该模块</p>
            <img src={img3} alt="" />
        </div>
    )
}