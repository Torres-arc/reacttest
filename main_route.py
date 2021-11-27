import json
# from flask_script import Manager
import webbrowser

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask import render_template
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)  # 在该模块中Flask标识，可以传入任意字符串
# manager = Manager(app)
CORS(app)

filename = 'state.json'
count = 20
@app.route('/send_email', methods=['POST'])
def send_email():
    json_dict = request.form.get('data')

    state_dict = json.loads(json_dict)
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(json.dumps(state_dict))
        f.close()
    with open(filename, 'r', encoding='utf-8') as f:
        state = json.load(f)
        if state['name'] != '':
            name = state['name']
        else:
            name = '无场馆数据'
        f.close()
    f1 = open('state.json', 'rb')
    test_msg1 = f1.read()
    subject = '采集表结果-'+name
    body = '<p>这是-' + name + '-的问卷结果<p>'
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
        return jsonify({"code": 200, "message": "{}".format('成功！')})
    except:
        print('邮件发送失败')
        return jsonify({"code": "异常", "message": "{}".format('失败')})

@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/set_state', methods=['POST'])  # 装饰器第一个参数为路由
def index():
    json_dict = request.form.get('data')
    state_dict = json.loads(json_dict)
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            state = json.load(f)
            f.close()
        for key in state_dict:
            state[key] = state_dict[key]
            print(key, state[key])
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(json.dumps(state))
                f.close()
        js = {
            "msg": "ok"
        }
        return json.dumps(js), 200, [("Access-Control-Allow-Origin", "*"), ("Cache-Control", "no-cache")]
    except Exception as e:
        print(e)
        return jsonify({"code": "异常", "message": "{}".format(e)})


# @app.route('/')
# def index():
#     print('index')
#     return app.send_static_file('index.html')
@app.route('/get_state')  # 装饰器第一个参数为路由
def sender():
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            state = json.load(f)
            data = json.dumps(state)
            f.close()
            return data, 200, {"ContentType": "application/json", 'Access-Control-Allow-Origin': '*'}
    except Exception as e:
        print(e)
        return jsonify({"code": "异常", "message": "{}".format(e)})


if __name__ == '__main__':
    # manager.run()
    webbrowser.open_new('http://localhost:8080/')
    app.run(host='0.0.0.0', port=8080)  # 启动flask
