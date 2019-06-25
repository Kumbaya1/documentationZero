import React from 'react'
import img1 from '../../../assets/img/explain/dataresource/1.jpg'
import img2 from '../../../assets/img/explain/dataresource/2.jpg'
import img3 from '../../../assets/img/explain/dataresource/3.jpg'
import img4 from '../../../assets/img/explain/dataresource/4.jpg'


import Icon1 from '../../../assets/img/explain/dataresource/icon1.jpg'

export default function Dataresource() {
    return (
        <div>
            <h3 >2.7	数据资源</h3>
            <h4>2.7.1	功能描述</h4>
            <p>已经上线的数据目录及数据资产介绍，用户有其他数据需求，也可在页面提出，集中收集后进行抓取或采购。</p>
            <h4>2.7.2	操作方法</h4>
            <h5>2.7.2.1	登录平台（请参考2.2登录章节）</h5>
            <h5>2.7.2.2	点击【数据资源】，即可进入数据资源模块</h5>
            <img src={img1} alt="" />
            <h5>2.7.2.3	在搜索框输入想要搜索的数据关键词，点击【<img src={Icon1} alt="" className="icon-img" />】或者按回车即可搜索数据F</h5>
            <h5>2.7.2.4	也可点击【高级】按钮，进行数据筛选搜索</h5>
            <img src={img2} alt="" />
            <h5>2.7.2.5	在数据列表页，点击【查看示例数据】可查看该数据的示例数据</h5>
            <img src={img3} alt="" />
            <h5>2.7.2.6	如有数据需求，可点击右上角【数据需求】按钮，进行数据需求提交</h5>
            <img src={img4} alt="" style={{width:'40%'}} />

        </div>
    )
}