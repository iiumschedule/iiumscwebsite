---
title: v1.1.0
authors: [fareez]
description: Improved UI and experiences
image: https://og-puce.vercel.app/api/og/iiumschedulem3?version=1.1.0
tags: [v1.1.0, minor]
---

[![GitHub Releases](https://img.shields.io/badge/github-release-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iqfareez/iium_schedule/releases/tag/1.1.0%2B21)

## Highlights

- 💅🏾 New **Material 3** (Material You) redesign. Thanks to [@ElyasAsmad](https://github.com/ElyasAsmad) [#52](https://github.com/iqfareez/iium_schedule/pull/52)

  - On supported devices, the app theme will match the device dynamic colour (wallpaper/accent colour).

  ![material 3 screenshots](https://user-images.githubusercontent.com/60868965/216872570-3ed6b8e4-f2cf-4811-a480-9c288e6ee6f5.png)

- :sparkles: Added **pull-to-refresh** feature. Thanks to [@ElyasAsmad](https://github.com/ElyasAsmad) [#51](https://github.com/iqfareez/iium_schedule/pull/51)
  - On saved schedule, pull the schedule to refresh subjects data (eg: venue) [[Watch demo video]](https://youtube.com/shorts/k4qmzEy7j3w?feature=share)
- :scroll: Schedule can now be **directly imported from** [**I-Ma'luum**](https://imaluum.iium.edu.my/MyAcademic/schedule) (class timetable). Be sure to select the correct semester and session in the i-ma'luum before adding downloading it to the app. [[Watch demo video]](https://youtube.com/shorts/pCS-3Z5_tOY) [#26](https://github.com/iqfareez/iium_schedule/issues/26)
  - Unfortunately, this feature is available on **Android only**. For web and Windows users, you may import the [JSON file from i-Ma'luum](/docs/extract/) instead.

## Others

- :truck: Migrated database from [Hive](https://docs.hivedb.dev/) to [**Isar**](https://isar.dev/). This migration is needed to fix issues related to schedule data. Worry not, your previously saved schedule are retained.
- :bug: Edited schedule now **persists** when user exited the app [#47](https://github.com/iqfareez/iium_schedule/issues/47)
- :zap: Force highest available **refresh rate** for certain devices. [#58](https://github.com/iqfareez/iium_schedule/pull/58)
- :zap: Previously when creating schedule, the schedule in validator page will not refresh (require manual refresh) when user go back and make changes in the input course page. Now, the issue was fixed. The validator page will **refresh automatically** based on the input courses. _I know you don't understand this part. Long story short, bug is squashed :skull:_
- :pencil2: Set default semester to **Semester 2** (Session 2022/2023)
- :lipstick: **Redesign** JSON import. [[Screenshot](https://imgur.com/jdtIApS.png)]
- :wrench: Added ability to parse some subject days format. So, you'll no longer see a weird grey area in course browser. [#42](https://github.com/iqfareez/iium_schedule/issues/42)
- :goal_net: JSON input is now **validated**. Incorrect format will be rejected. [`023f1ef`](https://github.com/iqfareez/iium_schedule/commit/023f1ef86f26df822c42d7b5d7b96806dd058c92)
- :heart: Added **favourites**. When search for subject in course browser, the subject can now be favourited by tapping the heart icon.
  ![favourite subject](https://imgur.com/BWCCqK6.png)
- :busts_in_silhouette: Added [link](https://github.com/iqfareez/iium_schedule#contributors) to contributors in about app dialog.
- :arrow_up: Upgraded framework to [Flutter 3.7](https://docs.flutter.dev/development/tools/sdk/release-notes/release-notes-3.7.0)
- :arrow_up: Upgraded app dependencies
- :arrow_up: Raised `minSdkVersion` to API level 17 (Android 4.2)

## Known issues

- This release is not published to the web due Isar incompatibility for Web. See [#60](https://github.com/iqfareez/iium_schedule/issues/60)
- Sometimes, the last modified date is not updated when the schedule is modified (changing venue, colours etc.).
