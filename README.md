# pkg-egg-example
Package the egg.js code by pkg example
## 使用步骤
### 运行打包后代码
1. 下载build中代码
2. 将对应的平台代码拷贝到自己的机器上
3. 执行build中的启动命令，linux直接执行start.sh与stop.sh即可，win查看start.txt
### 运行源码打包
1. 下载src中代码
2. 执行 `npm install `
3. 修改*package.json*文件中build的参数*node8-win-x64*, win使用默认打包的则是node v8版本，linux用户修改为*node8-linux-x64*
4. 执行`npm run build`，运行完成后会在当前目录生成打包后代码，运行命令按照**测试运行打包后代码**执行即可
*联系作者 QQ:1016817543 邮箱:1016817543@qq.com*

