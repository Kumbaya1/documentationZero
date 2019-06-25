import React from 'react'
import img1 from '../../../assets/img/explain/process/1.jpg'
import img2 from '../../../assets/img/explain/process/2.jpg'

export default function Process() {
    return (
        <div>
            <h2>2.系统操作说明</h2>
            <h3 >2.1系统操作流程</h3>
            <p>系统总体流程：</p>
            <img src={img1} alt=""/>
            <p>以项目为驱动分析流程：</p>
            <img src={img2} alt="" style={{maxHeight:'unset'}} />


        </div>
    )
}