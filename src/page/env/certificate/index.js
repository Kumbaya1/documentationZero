import React from "react"
import img1 from '../../../assets/img/env/certificate/1.jpg'
import img2 from '../../../assets/img/env/certificate/2.jpg'
import img3 from '../../../assets/img/env/certificate/3.jpg'
import img4 from '../../../assets/img/env/certificate/4.jpg'
import img5 from '../../../assets/img/env/certificate/5.jpg'
import img6 from '../../../assets/img/env/certificate/6.jpg'
import img7 from '../../../assets/img/env/certificate/7.jpg'
import img8 from '../../../assets/img/env/certificate/8.jpg'
import img9 from '../../../assets/img/env/certificate/9.jpg'
import img10 from '../../../assets/img/env/certificate/10.jpg'
import img11 from '../../../assets/img/env/certificate/11.jpg'
import img12 from '../../../assets/img/env/certificate/12.jpg'
import img13 from '../../../assets/img/env/certificate/13.jpg'
import img14 from '../../../assets/img/env/certificate/14.jpg'
import img15 from '../../../assets/img/env/certificate/15.jpg'
import img16 from '../../../assets/img/env/certificate/16.jpg'

export default function Certificate() {
    return (
        <div>
            <h2>1.系统运行环境</h2>
            <h3>1.1 安装证书</h3>
            <p>为了平台的正常使用，用户需安装数字证书。以下步骤可用于Windows系统电脑导入：</p>
            <p>① 点击此 <a href="http://172.30.11.120:9080/thucity/download/certificate.zip">链接</a> ，下载数字证书，并解压文件
            </p>
            <p>②双击打开client.p12证书</p>
            <img src={img1} alt="" />
            <p>③存储位置选择当前用户，点击【下一步】</p>
            <img src={img2} alt="" />
            <p>④选择默认路径，无需修改路径，点击【下一步】</p>
            <img src={img3} alt="" />
            <p>⑤在密码输入框输入123456，导入选项选择默认最后一项，无需修改，点击【下一步】</p>
            <img src={img4} alt="" />
            <p>⑥	选择默认自动选择证书存储，点击【下一步】</p>
            <img src={img5} alt="" />
            <p>⑦	点击【完成】，即可成功导入client.p12证书</p>
            <img src={img6} alt="" style={{ width: '60%', marginRight: '10%' }} /><img src={img7} alt="" style={{ width: '20%' }} />
            <p>⑧	双击sever.cer证书</p>
            <img src={img8} alt="" />
            <p>⑨	在窗口中，点击【安装证书】</p>
            <img src={img9} alt="" />
            <p>⑩	存储位置选择当前用户，点击【下一步】</p>
            <img src={img10} alt="" />
            <p>⑪	选择【将所有的证书都放入下列存储】，然后点击【浏览】</p>
            <img src={img11} alt="" />
            <p>⑫	选择【受信任的根证书办法机构】，点击【确定】，最后点击【下一步】</p>
            <img src={img12} alt="" style={{ width: '45%', marginRight: '5%' }} /><img src={img13} alt="" style={{ width: '45%'}} />
            <p>⑬	点击【完成】，在弹窗中选择【是】，即可成功导入</p>
            <img src={img14} alt="" />
            <br/>
            <br/>
            <img src={img15} alt="" style={{ width: '60%', marginRight: '10%' }} />
            <img src={img16} alt="" style={{ width: '20%' }} />
            











        </div>
    )
}