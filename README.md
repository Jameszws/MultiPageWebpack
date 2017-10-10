#webpack多页应用

项目结构说明

|--config     webpack配置 <br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|--webpack.build.js<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|--webpack.dev.config.js<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|--webpack.prod.config.js<br/>
|<br/>
|--dist       压缩文件 <br/>
|<br/>
|--server      dev环境服务 <br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|--app.js<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|--proxy.config.js<br/>
|<br/>
|--src        代码源文件 <br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|--common     公共业务代码 <br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|--controllers     控制器 <br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|--models          数据操作 <br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|--libs            第三方依赖 <br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|--utils          公共代码 <br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|--loadThirdJsDll.js         公共加载第三方js类 <br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|--util.js         公共代码 <br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|--static          静态资源文件 <br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|--css         样式文件 <br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|--image       图片文件 <br/>
|&nbsp;&nbsp;&nbsp;&nbsp;| <br/>
|&nbsp;&nbsp;&nbsp;&nbsp;|--views     页面<br/>
|  
|--package.json  包管理文件 <br/>
|<br/>
|--README.md     项目说明
