---
title: v1.4.3
authors: [fareez]
description: Fix issue where schedule cannot be saved to device due to insufficient permissions.
image: https://og-puce.vercel.app/api/og/iiumschedulem3apple?version=1.4.3
tags: [v1.4.3, patch]
---

Few bug fixes and improvements including:

- Fix issue where **schedule cannot be saved to devices**. This is due to the required permission isn't requested on Android 14+. Now, the app should save to image to Gallery correctly on all platforms. PR [#110](https://github.com/iiumschedule/iium_schedule/pull/110). Fixed issue [#105](https://github.com/iiumschedule/iium_schedule/issues/105) & [#109](https://github.com/iiumschedule/iium_schedule/issues/109).
- Update dependencies
- Bump `compileSdkVersion` to 34 & Kotlin version to 1.9.10
- Code Refactoring by [**@PlashSpeed-Aiman**](https://github.com/PlashSpeed-Aiman) in PR [#108](https://github.com/iiumschedule/iium_schedule/pull/108)
    - Added services class to encapsulate logic
    - Moved calendar function to dedicated utils folder
- Update copyright year

[![GitHub Releases](https://img.shields.io/badge/view%20on%20github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iqfareez/iium_schedule/releases/tag/1.4.3%2B42)