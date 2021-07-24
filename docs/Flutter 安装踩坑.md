---
title: Flutter 安装踩坑
date: 2019-01-30
author: cj0x39e
---

## 卡在 Initializing gradle...

#### 原因

被墙。

#### 解决方法

1. 手动下载 gradle 资源包，比如踩坑先驱们提供的包：https://pan.baidu.com/s/1vBA4MmyYORMGLumVVwUrKg?errno=0&errmsg=Auth%20Login%20Sucess&&bduss=&ssnerror=0&traceid=

2. 修改 `项目目录/android/gradle/wrapper/gradle-wrapper.properties` 文件，将 `distributionUrl` 配置为下载的对应版本：

   ```
   #distributionUrl=https\://services.gradle.org/distributions/gradle-4.6-all.zip
   distributionUrl=https\://services.gradle.org/distributions/gradle-4.10.1-all.zip
   ```

3. 然后再启动下程序，让工具在 `/Users/taozhi/.gradle/wrapper/dists/` (mac 路径) 下建立该包的文件夹，比如通过 2 的配置，将会在该路径下建立 `gradle-4.10.1-all` 文件夹，点进去，会发现一个随机命名的文件夹，比如我的是 `455itskqi2qtf0v2sja68alqd` ，继续点进去。

4. 在第 3 步的文件夹中，下载失败后应该有两个文件 `gradle-4.10.1-all.zip.part` 和 `gradle-4.10.1-all.zip.lck` 删除 `gradle-4.10.1-all.zip.part` 文件。复制一份 `gradle-4.10.1-all.zip.lck` 文件并重命名为 `gradle-4.10.1-all.zip.ok`。然后把第 1 步下载的 `gradle-4.10.1-all.zip` 文件复制到该文件夹下，并解压一份。该文件夹下应该有四个文件：

   ```
   - gradle-4.10.1-all.zip.lck
   - gradle-4.10.1-all.zip.ok
   - gradle-4.10.1-all.zip
   - gradle-4.10.1-all
   ```

5. Initializing gradle… 这一步应该可以跨过了。

#### 参考资料：

1. https://blog.csdn.net/QasimCyrus/article/details/78457609
2. https://blog.csdn.net/chrisyuu/article/details/52711025

## 卡在 Resolving dependencies...

### 原因

还是被墙。

### 解决方法：

打开 `项目名/android/build.gradle` 文件，修改相关源，感谢阿里巴巴。

```
buildscript {
    repositories {
        maven{ url 'https://maven.aliyun.com/repository/google'}
        maven{ url 'https://maven.aliyun.com/repository/gradle-plugin'}
        maven{ url 'https://maven.aliyun.com/repository/public'}
        maven{ url 'https://maven.aliyun.com/repository/jcenter'}
        google()
        jcenter()
    }

    dependencies {
        classpath 'com.android.tools.build:gradle:3.2.1'
    }
}

allprojects {
    repositories {
        maven{ url 'https://maven.aliyun.com/repository/google'}
        maven{ url 'https://maven.aliyun.com/repository/gradle-plugin'}
        maven{ url 'https://maven.aliyun.com/repository/public'}
        maven{ url 'https://maven.aliyun.com/repository/jcenter'}
        google()
        jcenter()
    }
}
```
