var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'qq', 
    secureConnection: true, // 使用SSL安全通道
    port: 465, // 端口配置
    auth: {
        user: '345469066@qq.com',
        pass: 'wvasfesjbodhbhaj' //qq邮箱授权
    }
});

var mailOptions = {
    from: '345469066@qq.com', // 发信人
    to: '1581324862@qq.com', // 收信人
   // cc : '1581324862@qq.com', //抄送
   // bcc : '1581324862@qq.com',//密送
    subject: 'Hello ✔', // 标题
    text: 'Hello world ✔', 
    html: '<b>Hello world ✔</b>' ,
    //发送附件
    attachments : [{
    	filename : 'text.txt',
    	path : './text.txt'
    }]
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('发送成功');
    }
});