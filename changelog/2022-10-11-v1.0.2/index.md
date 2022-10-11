---
title: v1.0.2
authors: [fareez]
description: Second patches, I've listed to your feedback
image: https://res.cloudinary.com/iqfareez-cloud/image/upload/v1665446690/IIUM%20Schedule/v1.0.2_kl5crp.png
tags: [v1.0.2, patch]
---

[![GitHub Releases](https://img.shields.io/badge/github-release-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iqfareez/iium_schedule/releases/tag/1.0.2%2B17)

## Changelog

Responding to your feedback & suggestions, I've added the following:

- :sparkles: Added ability to **edit saved subject**. Currently only changing **venue** property is possible. Partially fixes issue [#37](https://github.com/iqfareez/iium_schedule/issues/37)
 
  ![demo video](edit-schedule.gif)
- :sparkles: Added ability to **delete** individual saved subject. Issue [#37](https://github.com/iqfareez/iium_schedule/issues/37)
   
  ![demo video](remove-subject.gif)
- :sparkles: Added ability to **add** subject. Fixes [#38](https://github.com/iqfareez/iium_schedule/issues/38)
     
  ![demo video](add-subject.gif)
- :sparkles: Add **Usrah in Action** prompt in COCU page in course browser, due to I think some of us can't find it and thinking the courses in not available in app.

  ![screenshot usrah](flutter_04.png)
- :sparkles: Kulliyyah other than main kulliyyah (eg: `COCU` etc), in course validator are now **automatically overriden**. So you won't need to override manually.

  ![gif override kulliyyah](auto-fetch.gif)
- :children_crossing: Add **hints** to save the schedule first before editing in schedule layout and its dialog. So you would no the schedule is customizable, but there is a need of some extra steps. Also, if you've
  noticed, I've added the **section information** in the dialog, so you would not accidentally enter the wrong class

  ![screenshot hint save](flutter_03.png)
- :children_crossing: Add **hint** in input scope to select the main kulliyyah. Initial implementation of [#41](https://github.com/iqfareez/iium_schedule/issues/41)
- :lipstick: Update button theme to **improve visibility** in dark mode
- :pencil2: Added **session** (academic year) and **semester** to **metadata dialog**.
- :bento: Update web `og:image` metatag asset
- :technologist: [DEV]
  - Add `uuid` (for future implementation), `session` and `semester` in SavedSchedule Hive object.

