---
title: v1.2.1
authors: [fareez]
description: Sorry, I've made an oopsie
image: https://og-puce.vercel.app/api/og/iiumschedulem3?version=1.2.1
tags: [v1.2.1, patch, bug fix]
---

## Hotfix Update

🐛 Fixes issue where **previously saved schedule is missing**. [[Issue #86]](https://github.com/iqfareez/iium_schedule/issues/86). 
Thanks to Faruq for reporting this issue. 

After installing this update, your previously saved schedule should be restored.

### Cause of the issue

On previous release, I've upgraded [isar](https://pub.dev/packages/isar) version to version `3.1.0`. 
This version introduced a breaking changes where parameter `directory` is now required for `Isar.open()` method. Unfortunately, 
no migration steps were given, so I refer to the example code. However, the directory defined in example code is on different
location of where isar store things in previous release. Hence, previous data is not loaded.

So, I went through deeper to isar issues and find [this issue](https://github.com/isar/isar/issues/1219). So in this issue, 
people discussed the correct directory path that should be passed to to `Isar.open` method. Thus, I've updated the code to
use the correct directory path. *Unfortunately, they didn't discuss for Windows. So' I can't guarantee you'll get you data back or not*

___
[![GitHub Releases](https://img.shields.io/badge/view%20on%20github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iqfareez/iium_schedule/releases/tag/1.2.1%2B33)