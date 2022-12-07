# git提交规范
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
### type
* feat: 新功能、新特性
* fix: 修改 bug
* perf: 更改代码，以提高性能
* refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
* docs: 文档修改
* style: 代码格式修改, 注意不是 css 修改（例如分号修改）
* test: 测试用例新增、修改
* build: 影响项目构建或依赖项修改
* revert: 恢复上一次提交
* ci: 持续集成相关文件修改
* chore: 其他修改（不在上述类型中的修改）
* release: 发布新版本
* workflow: 工作流相关文件修改
### scope
commit message 影响的功能或文件范围, 比如: route, component, utils, build...
### subject
commit message 的概述

### body
具体修改内容, 可以分为多行.

### footer
一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.
## 示例
```
build(global):项目初始化
```
# git提交流程
1. git clone xxxx.git -- 拉取代码
2. git branch dev -- 创建开发分支
3. git checkout dev -- 切换到开发分支
4. git add . -- 提交修改后的代码到暂存区
5. git commit -m '提交信息' -- 添加commit
6. git checkout main -- 切换到主分支
7. git merge dev -- 将开发分支的内容合并到主分支 并处理冲突
8. git push -- 将最新代码推送到远程仓库