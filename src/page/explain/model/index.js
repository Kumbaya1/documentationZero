import React from "react"
import img1 from '../../../assets/img/explain/model/1.jpg'
import img2 from '../../../assets/img/explain/model/2.jpg'
import img3 from '../../../assets/img/explain/model/3.jpg'
import img4 from '../../../assets/img/explain/model/4.jpg'

export default function Model() {
    return (
        <div>
            <h3 >2.6	算法模型</h3>
            <h4>2.6.1	功能描述</h4>
            <p>已开发工具/模型介绍、用途介绍；已开发的模型/工具可直接选择切换到对应的分析任务；如果用户有其他工具/模型的需求，也可在页面提出需求。</p>
            <h4>2.6.2	操作方法</h4>
            <h5>2.6.2.1	登录平台（请参考2.2登录章节）</h5>
            <h5>2.6.2.2	点击【算法模型】，即可进入算法模型模块</h5>
            <img src={img1} alt="" />
            <h5>2.6.2.3	在搜索框输入想要搜索的模型关键词，即可搜索模型，点击可查看该模型介绍</h5>
            <img src={img2} alt="" style={{width:'40%'}} />
            <h5>2.6.2.4	可从左侧菜单中点击查看模型介绍</h5>
            <img src={img3} alt="" style={{width:'40%'}} />
            <h5>2.6.2.5	如有模型需求，可点击右上角【模型需求】按钮，进行模型需求提交</h5>
            <img src={img4} alt="" style={{width:'40%'}} />
        </div>
    )
}