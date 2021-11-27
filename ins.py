from PyInstaller.__main__ import run

if __name__ == '__main__':
    opts = ['main_route.py',  # 主程序文件
            '-n 中国纪念馆百佳榜信息采集表',  # 可执行文件名称
            '-F',  # 打包单文件
            # '-w', #是否以控制台黑窗口运行
            # r'-i=D:/Project/Questionnaire/build/axkcd-4c5wx-001.ico',  # 可执行程序图标
            '-y',
            '--clean',
            # '-D',
            '--workpath=build',
            '--add-data=templates;templates',  # 打包包含的html页面
            '--add-data=static;static',  # 打包包含的静态资源
            '--distpath=build',
            '--specpath=./'
            ]

    run(opts)
