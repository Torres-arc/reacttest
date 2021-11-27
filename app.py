import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def send_email(name='无场馆名称'):
    f1 = open('state.json', 'rb')
    test_msg1 = f1.read()
    subject = '测试发送-'+name
    body = '<p>这是' + name + '的问卷结果<p>'
    msgRoot = MIMEMultipart('related')
    # 邮件标题
    msgRoot['Subject'] = subject
    msgRoot['From'] = '781707715@qq.com'
    msgRoot['To'] = 'ctti@nju.edu.cn'
    # 邮件内容
    body = MIMEText(body, 'html', 'utf-8')  # 正文
    att1 = MIMEText(test_msg1, 'base64', 'utf-8')
    att1['Content-Type'] = 'application/octet-stream'
    att1.add_header('Content-Disposition', 'attachment', filename=('utf-8', '', (name+"state.json")))
    msgRoot.attach(att1)
    msgRoot.attach(body)

    try:
        server = smtplib.SMTP_SSL("smtp.qq.com", 465)  # 发件人邮箱中的SMTP服务器，端口是465，固定的，不能更改
        server.login('781707715@qq.com', 'chvqgrpndrlabdfi')  # 括号中对应的是发件人邮箱账号、邮箱密码
        server.set_debuglevel(1)
        server.sendmail('781707715@qq.com', 'ctti@nju.edu.cn', msgRoot.as_string())
        server.quit()  # 关闭连接
        print('邮件发送成功')
    except:
        print('邮件发送失败')


if __name__ == '__main__':
    send_email()
