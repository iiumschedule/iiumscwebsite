---
title: v1.2.2
authors: [fareez]
description: Bug fixes in I-Maluum importer, change default to Sem 3 2022/2023 etc.
image: https://og-puce.vercel.app/api/og/iiumschedulem3?version=1.2.2
tags: [v1.2.2, patch, bug fix]
---

## What's Changed

- :bug: Add **validation in imaluum importer** to show error when the target HTML element is not found.
    - Without this fix, the laoding indicator will not stop, and user will not aware of this error, leading to bad UX.
    - Example when this is useful: _When Final exam is not available yet (ie finance block etc.)_.
    - Thanks _ElyasAsmad_ for reporting.
- :arrow_up: Upgrade dependencies
- :pencil2: Fix **help links** in Imaluum importer. _Importing course subject should point to [here](https://iiumschedule.iqfareez.com/docs/extract) and final exam should go [here](https://iiumschedule.iqfareez.com/docs/final-exams/)_
- :pencil2: Change **default semester** to sem 3 (`2022/2023`). Add **new session** `2023/2024`.

[![GitHub Releases](https://img.shields.io/badge/view%20on%20github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iqfareez/iium_schedule/releases/tag/1.2.2%2B34)