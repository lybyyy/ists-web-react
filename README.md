## 智能服务交易与监管技术基础平台
- 一、前提条件
- npm
- node
- git

- 二、使用方法
- 1. git clone
- 2. 进入目录
- 3. npm i
- 4. npm start

### *页面开发流程*
- 在pages文件夹下编写页面组件，一个页面写一个组件即可
- 编写组件样式时，采用模块化样式，样式文件在style文件夹下写，命名统一以 ***.module.css*** 结尾
```js
import style from './style/example.module.css'
//...
render() {
  return (
    <div className={style.yourClassName}>your content</div>
  )
}
//...
```
- 资源文件放在asset文件夹下
- 公共组件放在commponents文件夹下
- 引用页面时，在src文件夹下的 ***Body.jsx*** 文件中import导入页面组件，声明组件变量，然后在 ***getComponents()*** 方法中增加对应case
> 其参数name为 ***App.js*** 中对Body子组件绑定的属性

- 最后在 ***App.js*** 中增加导航菜单，声明其key属性，导航组件会相应点击事件并将自动key值绑定为Body的name属性

### *组件说明*
- 代码块组件
  * 通过import引入components/CodeBlock组件
  * 从父组件接受两个参数 ***language***、 ***codeString***，一个是代码用的语言[支持的语言列表在这](https://github.com/conorhastings/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD), 另一个是代码内容， ***\n*** 分隔代码的不同行

- 脚注组件
  * 通过import引入components/Footer组件
  * 通过 ```<Footer />``` 使用

- 数据表格组件
  * 通过import引入components/DataTable组件
  * 从父组件接受两个参数 ***columns***、 ***dataSource***，一个是描述表格每一列的列表数据，一个是表格内容的列表数据
  * 两个参数的具体说明可以看[文档](https://ant-design.gitee.io/components/table-cn/)

### *项目协作流程*
- 项目git仓库地址为[lyc的GitHub](https://github.com/lycxsj/hyperledger)/[ycx的GitHub](https://github.com/lybyyy/ists-web-react)
- 本地开发时先 ***Fork*** 到自己的GitHub仓库然后从自己的仓库拉取代码
```bash
#在项目工作路径下
$ git init
$ git remote add YOURNAME git@github.com:YOURGITHUB/hyperledger.git
$ git remote add origin git@github.com:lycxsj/hyperledger.git
$ git pull origin master
```
- 开始开发
- 提交改动时，先 ***git add .*** 然后 ***git commit -m "这里写提交原因"***
- 提交前先检查有无提交更新，pull一下origin库
- 向远程提交更新 ***git push***
- 向主仓库发 ***pull request***
