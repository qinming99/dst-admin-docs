---
sidebar_position: 1
---

# Ubuntu系统安装教程
:::tip 温馨提示
本教程基于腾讯云轻量级服务器 ubuntu 20.04系统，
由于ubuntu系统的依赖整合比较好，在安装Steam-CMD的时候，不会遇到缺失依赖的问题，可以一路畅通的安装，
所以建议您在安装部署dst-admin的时候，使用ubuntu系统可以是ubuntu 18.04 或者 ubuntu 20.04
:::tip


><font color="red">注意要开放四个端口：8080,10888,10998,10999 TCP/UDP都开放一下</font>

## 1、安装JDK1.8

```basc
#更新软件源
sudo apt-get update
#安装openJDK1.8
sudo apt-get install -y openjdk-8-jdk
#查看版本
java -version
显示 openjdk version "1.8.0_362" 就表示安装完成
```

## 2、下载dst-admin软件包

```bash
#进入到home目录
cd ~
#下载安装包
wget http://clouddn.tugos.cn/release/dst-admin-1.5.0.jar -O dst-admin.jar
```

## 3、运行dst-admin程序

```bash
java -jar dst-admin.jar
```
> 当出现了` dst-admin-饥荒管理平台-启动成功(Successfully started)` 表示已经启动了，<font color="red">按`ctrl + c`</font>键结束dst-admin进程

![Docusaurus logo](/img/getting-started/install/ubuntu/img_1.png)



## 4、安装饥荒服务器程序

```bash
#执行安装饥荒服务器程序，这一步必须执行成功，
#执行时间因网络下载速度决定，截止到2023-05月，饥荒服务器程序大小有4GB左右
 ./install.sh
```
>当出现了`Success! App '343050' fully installed` 表示饥荒服务器程序安装好了

![Docusaurus logo](/img/getting-started/install/ubuntu/img_2.png)

## 5、启动dst-admin

```bash
#执行管理脚本，按提示输入
./dstStart.sh
```
>dst-admin程序已经在后台运行了

![Docusaurus logo](/img/getting-started/install/ubuntu/img_3.png)


## 5、访问服务器
>在浏览器输入我们的访问地址，登陆管理后台，地址为服务器的公网IP（云服务都有提供），加端口号，默认端口是8080，即：http://xx.xx.xx.xx:8080
，输入用户名：admin 密码：123456 即可登陆，登陆成功开始设置服务器

![Docusaurus logo](/img/getting-started/install/ubuntu/img_4.png)

