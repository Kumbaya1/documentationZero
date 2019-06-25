import React from 'react'
import img1 from '../../../assets/img/explain/analysis/1.jpg'
import img2 from '../../../assets/img/explain/analysis/2.jpg'
import img3 from '../../../assets/img/explain/analysis/3.jpg'
import img4 from '../../../assets/img/explain/analysis/4.jpg'
import img5 from '../../../assets/img/explain/analysis/5.jpg'
import img6 from '../../../assets/img/explain/analysis/6.jpg'
import img7 from '../../../assets/img/explain/analysis/7.jpg'
import img8 from '../../../assets/img/explain/analysis/8.jpg'
import img9 from '../../../assets/img/explain/analysis/9.jpg'
import img10 from '../../../assets/img/explain/analysis/10.jpg'
import img11 from '../../../assets/img/explain/analysis/11.jpg'
import img12 from '../../../assets/img/explain/analysis/12.jpg'
import img13 from '../../../assets/img/explain/analysis/13.jpg'
import img14 from '../../../assets/img/explain/analysis/14.jpg'
import img15 from '../../../assets/img/explain/analysis/15.jpg'
import img16 from '../../../assets/img/explain/analysis/16.jpg'
import img17 from '../../../assets/img/explain/analysis/17.jpg'
import img18 from '../../../assets/img/explain/analysis/18.jpg'
import img19 from '../../../assets/img/explain/analysis/19.jpg'
import img20 from '../../../assets/img/explain/analysis/20.jpg'
import img21 from '../../../assets/img/explain/analysis/21.jpg'
import img22 from '../../../assets/img/explain/analysis/22.jpg'
import img23 from '../../../assets/img/explain/analysis/23.jpg'
import img24 from '../../../assets/img/explain/analysis/24.jpg'
import img25 from '../../../assets/img/explain/analysis/25.jpg'
import img26 from '../../../assets/img/explain/analysis/26.jpg'
import img27 from '../../../assets/img/explain/analysis/27.jpg'
import img28 from '../../../assets/img/explain/analysis/28.jpg'
import img29 from '../../../assets/img/explain/analysis/29.jpg'





import Icon1 from '../../../assets/img/explain/analysis/icon1.jpg'
import Icon2 from '../../../assets/img/explain/analysis/icon2.jpg'
import Icon3 from '../../../assets/img/explain/analysis/icon3.jpg'
import Icon4 from '../../../assets/img/explain/analysis/icon4.jpg'
import Icon5 from '../../../assets/img/explain/analysis/icon5.jpg'
import Icon6 from '../../../assets/img/explain/analysis/icon6.jpg'
import Icon7 from '../../../assets/img/explain/analysis/icon7.jpg'
import Icon8 from '../../../assets/img/explain/analysis/icon8.jpg'
import Icon9 from '../../../assets/img/explain/analysis/icon9.jpg'

export default function Analysis() {
    return (
        <div>
            <h3 >2.5 分析制图</h3>
            <h4>2.5.1	功能描述</h4>
            <p>通过模型工具为驱动，可分析空间、模型、图表等分析内容。</p>
            <h4>2.5.2	操作方法</h4>
            <h5>2.5.2.1	登录平台（请参考1.2系统登录章节）</h5>
            <h5>2.5.2.2	点击【分析制图】，即可进入分析制图模块；</h5>
            <img src={img1} alt="" />
            <h5>2.5.2.3	选择模型工具，在筛选条件中选择专题领域和分类，点击想要分析的工具模型可进入第2步输入参数页面。鼠标放在【i】上，可查看该任务的功能介绍。</h5>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <h5>2.5.2.4	输入参数</h5>
            <img src={img4} alt="" />
            <p>①	选择数据来源；</p>
            <img src={img5} alt="" />
            <p>②	空间范围和分析的空间精度，点击【选择范围】，在弹窗中选择要添加的地区范围，注意：地区选择只能同一个尺度下的范围；</p>
            <img src={img6} alt="" />
            <p>③	例如：选河北省-石家庄市下的全部区县，则在省下拉菜单中选择河北省，在市下拉菜单中选择石家庄市，点击【全选】，即可选择全部区县</p>
            <img src={img7} alt="" />
            <p>④	点击【i】可查看选择的空间范围</p>
            <img src={img8} alt="" />
            <p>⑤	指标项，点击【选择数据】，弹窗可选择平台数据（我的数据开发中），在下拉菜单中选择指标的大类，然后在列表中点击选择想要分析的数据指标项；</p>
            <img src={img9} alt="" />
            <p>⑥	时间范围，选择时间开始时间和结束时间，只可选择有数据的时间范围；</p>
            <img src={img10} alt="" />
            <p>⑦	查看数据，点击【查看数据】可查看该指标、空间、时间下的数据表和字段；</p>
            <img src={img11} alt="" />
            <p>⑧	关联字段，选择要渲染的字段；</p>
            <img src={img12} alt="" />
            <p>⑨	如有别的参数请按需填写选择；</p>
            <img src={img13} alt="" style={{ width: '35%', marginRight: '5%' }} />
            <img src={img14} alt="" style={{ width: '35%' }} />
            <h5>2.5.2.5	智能制图</h5>
            <img src={img15} alt="" />
            <br />
            <br />
            <img src={img16} alt="" />
            <p>①	返回上一步，点击【<img src={Icon1} alt="" className="icon-img" />】，可跳转到上一步操作；</p>
            <p>②	添加新分析，点击【+新分析】按钮，可添加新的分析；</p>
            <p>③	添加图层，点击【<img src={Icon2} alt="" className="icon-img" />】，在弹窗中选择空间范围图层，点击即可添加。</p>
            <img src={img17} alt="" />
            <p>④	保存分析，点击【<img src={Icon3} alt="" className="icon-img" />】，第一次保存时，会弹窗让用户填写分析名称和描述，点击【保存】即可保存该分析；之后保存点击【<img src={Icon4} alt="" className="icon-img" />】按钮，即可直接保存。</p>
            <p>⑤	导出结果，点击【<img src={Icon5} alt="" className="icon-img" />】，在弹窗中填写导出的文件标题，其他选项可按需求选择，点击【导出】后，在已导出文件会生成该文件，等加载结束后点击即可打开。</p>
            <img src={img18} alt="" />
            <p>⑥	导入样式，点击【<img src={Icon6} alt="" className="icon-img" />】，弹出之前保存过的分析样式列表，点击挑选想要导入的样式即可导入。</p>
            <img src={img19} alt="" />
            <p>⑦	查看属性表，点击【<img src={Icon7} alt="" className="icon-img" />】，可查看该分析结果的属性表。</p>
            <img src={img20} alt="" />
            <p>⑧	删除图层，点击【<img src={Icon8} alt="" className="icon-img" />】，在弹窗提示中选择【确定】，则删除该图层。</p>
            <img src={img21} alt="" />
            <p>⑨	调整图层顺序，拖拽要调整的图层，图层显示顺序按照由上至下显示。</p>
            <img src={img22} alt="" />
            <p>⑩	选择显示属性，在第2步-输入参数界面中多选的关联字段，可在显示属性的下拉菜单中切换。</p>
            <img src={img23} alt="" />
            <p>⑪	样式选择，点击图片可切换到该样式效果</p>
            <img src={img24} alt="" style={{ width: '40%', marginRight: '5%' }} />            <img src={img25} alt="" style={{ width: '40%' }} />
            <p>⑫	样式调整，可以按照需求调整渲染效果样式。</p>
            <img src={img26} alt="" style={{ width: '30%', marginRight: '5%' }} />
            <img src={img27} alt="" style={{ width: '30%', marginRight: '5%' }} />
            <img src={img28} alt="" style={{ width: '30%' }} />
            <p>⑬	更换底图，点击右上角【<img src={Icon9} alt="" className="icon-img" />】按钮，可在弹窗中选择底图样式进行更换。</p>
            <img src={img29} alt="" />

        </div>
    )
}