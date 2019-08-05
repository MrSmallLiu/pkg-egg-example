# pkg-egg-example
Package the egg.js code by pkg example
## 使用步骤
### 运行源码打包
1. 下载项目代码；
2. 执行build中的启动命令，linux直接执行start.sh与stop.sh即可，win查看start.txt；
3. 进入*src*路径，执行 `npm install `；
4. 修改*package.json*文件中build的参数*node8-win-x64*, win使用默认打包的则是node v8版本，linux用户修改为*node8-linux-x64*；
5. 执行`npm run build`，运行完成后会在当前目录生成打包后代码，将打包后代码放入build文件中对应平台的文件夹下；
6. 根据每个平台下对应start.sh与start.txt文件，查看启动命令启动；
7. 浏览器访问http://127.0.0.1:7007进行测试；
*联系作者 QQ:1016817543 邮箱:1016817543@qq.com*

