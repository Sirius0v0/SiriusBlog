---
title: Git学习
date: 2020-10-31 00:41:24
permalink: /pages/921798/
categories:
  - 《Git》学习笔记
  - 学习笔记
tags:
  - git
---
# Git学习

## Git基本工作流程

+ Git 工作区域
  + Git Repository（Git 仓库）
  + 暂存区
  + Working Directory工作区

+ 可以使用`git status`查看当前状态；`git add`将文件从工作区提交到暂存区；`git commit -m "描述"`将文件从暂存区提交到git仓库

## Git初始化及仓库创建和操作（本地操作）

### 设置基本信息

设置用户名

```git
git config --global user.name 'Sirius0v0'
```

设置用户名邮箱

```git
git config --global user.email '***@qq.com'
```

查看设置

```git
git config --list
```

### 初始化仓库

```git
git init
```

### 提交代码到本地的操作

查看状态

```git
git status
```

提交到暂存区

```git
git add filename
```

提交到仓库

```git
git commit -m '描述'
```

### 回滚的操作

查看版本记录

```git
git log
git log --decorate --all --oneline --graph
```

回滚到指定版本

```git
git reset --hard <版本号>
```

+ 回滚之后使用`git log`将不能看到指定版本以后的记录，可以使用下述方法查看

  ```git
  git reflog
  ```

### 一图小结

<img src="https://pic.downk.cc/item/5f9eca881cd1bbb86b1c487c.jpg" alt="小结1" style="zoom:50%;" />

```python
git init
git add test.py
git reset HEAD test.py
git checkout -- test.py
```

### 其他操作

新建文件夹

```Linux
mkdir 文件夹名
```

新建文件

```Linux
touch filename
```

打开编辑文件并退出

```Linux
vi filename

Esc + :wq
```

删除文件

```Linux
rm -rf filename
```

查看文件

```Linux
cat filename
```

从Git中删除文件

```git
git rm filename
```

## 初识分支

+ 默认主干名为`master`;
+ 分出来的分支可以重新合并到主干上

### 相关操作

查看当前所在分支

```git
git branch
```

创建分支

```git
git branch 分支名
```

切换分支

```git
git checkout 分支名
```

创建并切换到分支

```git
git checkout -b 分支名
```

合并分支

```git
git checkout master
git merge <要合并的分支名>
git merge --no-ff <>
```

删除分支

```git
git branch -d 分支名
```

## Git管理远程仓库

### 将本地代码保存至云端

为远程仓库的地址起名为`origin`

```git
git remote add origin https://github.com/Sirius0v0/XXX.git
```

将本地代码推送至云端

```git
git push -u origin <要推送的分支>master
```

### 在其他PC端拉取代码

克隆代码

```git
git clone 代码仓库地址
```

更新代码

```git
git pull origin <要更新的分支>dev

等同于下述语句
git fetch origin dev
git merge origin/dev
```

<img src="https://images2017.cnblogs.com/blog/425762/201708/425762-20170812194454960-1674213106.png" alt="小结2" style="zoom: 50%;" />

## rebase的应用

### 合并简介提交记录

在本地进行操作时，多次提交使得提交记录冗余繁杂，在push到线上之前可以利用`rebase`进行合并

<img src="https://pic.downk.cc/item/5f9d6af21cd1bbb86bc3c3f1.jpg" alt="实例1" style="zoom: 50%;" />

```git
git rebase -i 版本号			  从当前记录合并到指定版本（不包括）的记录
git rebase -i HEAD~3			从当前版本向前三个版本记录合并
```

执行`git rebase -i a171f915264b65b9cd4fc6c1ccea1eb0ab0126f3`后，根据提示修改信息保存

<img src="https://pic.downk.cc/item/5f9d6bff1cd1bbb86bc45ded.jpg" alt="实例2" style="zoom:50%;" />

<img src="https://pic.downk.cc/item/5f9d6cdd1cd1bbb86bc4d0e5.jpg" alt="实例3,修改了s" style="zoom:50%;" />

然后再重新进行提交记录填写

<img src="https://pic.downk.cc/item/5f9d6d191cd1bbb86bc4ed84.jpg" alt="实例4" style="zoom:50%;" />

+ 【注意】：不要将已提交至远程仓库的记录进行合并

### 将分支记录合并到master

```git
git checkout dev		切换到dev分支
git rebase master		进行变基操作
git checkout master		切换回master
git merger dev			

```

### 拉取时不产生分支记录

```git 
//将前面所述的代码进行修改即可
git pull origin dev
//改为
git fetch origin dev
git rebase origin/dev
```

### 注意

+ 有冲突时解决完冲突执行`git rebase --continue`

+ 可以使用`beyond compare`解决冲突

  + 安装

  + 配置

    ```git
    git config --local merge.tool bc3
    git config --local mergetool.path 'path'
    git config --local mergetool.keepBackup false
    ```

  + 使用软件解决冲突

    ```git
    git mergetool
    ```

# 多人协同

## 邀请他人协同开发

+ 直接在设置里邀请好友协同
+ 创建一个组织，在组织里新建仓库开发

## 标签tag

```git
git tag -a <版本号> -m '版本的描述'

git push origin --tags
```

+ 例如`git tag -a v1 -m '第一版'`则对最近一次提交打上了标签（本地）;`git push origin --tags`则将这个标签推送至云端，同时在`release`中出现了发布版本

## 代码review

通过`pull requests`实现，在此之前，先进行一些配置

### 配置

+ 进入`Settings-Branches`进行分支规则设置

<img src="https://pic.downk.cc/item/5f9e8dc11cd1bbb86b0d1808.jpg" alt="配置1" style="zoom:50%;" />

<img src="https://pic.downk.cc/item/5f9e8ea61cd1bbb86b0d499f.jpg" alt="配置2" style="zoom:50%;" />

之后根据网页提示完成review或根据所提示的代码在控制台上进行

# 给开源项目贡献代码

+ fork源码到自己的仓库
+ 修改代码
+ 通过`pull requests`推送给原作者

# 补充内容

## 配置文件

+ 项目配置文件:`/.git/config`

  ```git
  git config --local user.name 'XXX'
  git config --local user.email 'xxx@xx.com'
  ```

+ 全局配置文件:`Users/.gitconfig`

  ```git
  git config --global user.name 'XXX'
  git config --global user.email 'xxx@xx.com'
  ```

+ 系统配置文件:`~/etc/gitconfig`

  ```git
  git config --system user.name 'XXX'
  git config --system user.email 'xxx@xx.com'
  
  注意：需要有root权限
  ```

## 免密登录

+ 通过URL体现

  ```git
  原来的地址: https://github.com/Sirius0v0/NOJ.git
  修改的地址: https://用户名:密码@github.com/Sirius0v0/NOJ.git
  
  git remote add origin https://用户名:密码@github.com/Sirius0v0/NOJ.git
  git push origin master
  ```

+ SSH 实现

  ```
  ssh-keygen
  git remote add origin <ssh地址>
  ```

+ 现在有git自动管理凭证

## .gitignore忽略文件

```
*.h		//忽略所有.h的文件
!a.h	//忽略除了a.h以外的文件
files/	//忽略files文件夹下的文件
```

+ 可以在[github/gitignore](https://github.com/github/gitignore)中找到常用的忽略文件

## 任务管理

+ issues， 文档及任务管理
+ wiki， 项目文档


