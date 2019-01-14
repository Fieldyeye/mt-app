#### 计算属性

应用场景： 具有依赖关系的数据监听

#### 插槽

- slot 在子组件中 添加 `<slot></slot>`
父组件中可以在子组件标签内加内容，将渲染到子组件内

- 多对多的时候 父组件内标签`slot="a"` 子组件内`<slot name="a"></slot>`

#### vuex

- state: 存放数据及状态
- mutations：对数据进行直接操作的，定义数据的改变
- actions： 触发改变的行为

Vue组件 --Dispatch（触发）-->Actions--Commit（提交）-->Moutations(变化突变)--Mutate(使改变)-->State--Render-->Vue组件

#### Nuxt.js

```
1.npm install -g npx
2.npx create-nuxt-app preject-name
```


#### 首页开发
- 需求分析
    `模板设计  组件设计   数据结构设计  接口设计`

 - 接口设计
 ```
 注册
 /users/signup
 登录
 /users/signin
 验证
 /users/verify
 退出
 /users/exit
 获取用户
 /users/getUser

 用户类接口
 ```

 #### 数据库导入

 `mongoimport -d dbs(数据库) -c test(数据结合) pois.dat(数据源)`

