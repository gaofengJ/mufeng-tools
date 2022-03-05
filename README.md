# mufeng-tools

常用工具方法合集

## 发布流程

### 一、将代码同步到远程仓库

### 二、npm login 登录

1、npm 报错： npm ERR Unexpected token in JSON at position 0 while parsing near 解决方案

可能是开了代理

2、使用淘宝镜像登录时使用`npm login --registry https://registry.npmjs.org`

### 三、npm publish

使用淘宝镜像发布时使用`npm publish --registry https://registry.npmjs.org`

### 四、查看发布结果

淘宝镜像大概十分钟更新一次

## 使用 jsdoc 生成文档

## Jest 单元测试的几个指标

**%stmts**：语句覆盖率（statement coverage）：是不是每个语句都执行了？

**%Branch**：分支覆盖率（branch coverage）：是不是每个 if 代码块都执行了？

**%Funcs**：函数覆盖率（function coverage）：是不是每个函数都调用了？

**%Lines**：行覆盖率（line coverage）：是不是每一行都执行了？
