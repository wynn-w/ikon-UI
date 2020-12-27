# ikon-UI
尝试造轮子，写一个自己的UI框架
* window 环境下运行"npm run dev-test"或者"npm run test"可能存在karma 不启动问题，此时需新建终端并运行"npm run karma"即可
* 关于travis测试完测试用例不结束问题，要配置 karma.conf.js 里面  "singleRun"并将其设置为 "true",否则浏览器不关闭 travis一直保持等待状态