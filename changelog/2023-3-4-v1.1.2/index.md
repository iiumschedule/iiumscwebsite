---
title: v1.1.2
authors: [fareez]
description: Added venue/section display options, fixed icons and banner bugs, and upgraded dependencies. Also, improved i-Ma'luum importer with new refresh button and style.
image: https://og-puce.vercel.app/api/og/iiumschedulem3?version=1.1.2
tags: [v1.1.2, patch]
---

## What's New

- ✨ Added option to display **venue**, or **section**, or **default** (time) [#39](https://github.com/iqfareez/iium_schedule/issues/39)
    ![screenshot1](https://imgur.com/MFGpU4m.png)
- 🐛 Fixed some icons are that not tappable in subject page. [[Video]](https://imgur.com/KdwvjHD.mp4)
- 🐛 Fixed Material Banner cannot be dismissed from i-Ma'luum importer [#71](https://github.com/iqfareez/iium_schedule/issues/71).
- 🚸 Added refresh button in i-Ma'luum importer.
- 🎨 New button style for adding subject from i-Ma'luum importer.
    ![screenshot imaluum](./i-ma'luum-importer.png)

- 🎨 Make subject padding smaller a bit to make some room to its content. cb03f9e
- 🔥 Removed <kbd>View details</kbd> button in subject dialog (I think it's no longer needed) [[Screenshot]](https://imgur.com/GJ28eTz.png). Also removed [admonitions](https://pub.dev/packages/admonitions) package
- ➕ Upgraded dependency - [html](https://pub.dev/packages/html)

___
[![GitHub Releases](https://img.shields.io/badge/view%20on%20github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iqfareez/iium_schedule/releases/tag/1.1.2%2B24)