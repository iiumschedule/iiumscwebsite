# albiruni

[albiruni](https://pub.dev/packages/albiruni) is a scrapper wrapper for the IIUM Albiruni website so you won't be messing around with complicated code. Written in Dart to be easily integrated with Flutter or Dart projects.

## Get started

Create/open your Flutter/Dart project, and use this package as a library.

### Depend on it

Add the `albiruni` package to your Flutter or Dart project.

```yaml
dependencies:
  albiruni: <latest>
```

### Import it

Now in your Dart code, you can use:

```dart
import 'package:albiruni/albiruni.dart';
```

Do read more (features, changelog, example etc.) on [**pub.dev**](https://pub.dev/packages/albiruni).

## List of available kulliyyah

The list of kulliyyah are defined from [albiruni](http://albiruni.iium.edu.my/myapps/StudentOnline/schedule1.php)'s dropdown menu.

The values might **change over time**. To get the latest available kulliyyah, open the link above and **inspect the dropdown element** in the web browser, or **run the following scripts**:

```js
let trends = document.querySelector(
    "body > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > select"
  ),
  i;

const data = new Map();

for (i = 0; i < trends.length; i++) {
  data.set(trends[i].value, trends[i].text);
}
console.table(Array.from(data.entries()));
```

The **key** is what you supply to the Albiruni's `fetch` function.

_As of 7/8/2024_, the kulliyyah available are as follows:

| (index) |   Key   | Value                                                   |
| ------- | :-----: | ------------------------------------------------------- |
| 0       | `IRKHS` | AHAS KIRKHS                                             |
| 1       | `KAHS`  | ALLIED HEALTH SCIENCES                                  |
| 2       |  `AED`  | ARCHITECTURE                                            |
| 3       | `BRIDG` | BRIDGING PROGRAMME                                      |
| 4       |  `CFL`  | CELPAD                                                  |
| 5       | `CCAC`  | COCU                                                    |
| 6       | `DENT`  | DENTISTRY                                               |
| 7       | `EDUC`  | EDUCATION                                               |
| 8       | `ENGIN` | ENGIN                                                   |
| 9       | `ECONS` | ENMS                                                    |
| 10      | `KICT`  | ICT                                                     |
| 11      | `IHART` | INTERNATIONAL INSTITUTE FOR HALAL RESEARCH AND TRAINING |
| 12      | `IIBF`  | ISLAMIC BANKING AND FINANCE                             |
| 13      | `ISTAC` | ISTAC                                                   |
| 14      |  `KLM`  | KSTCL KLM                                               |
| 15      | `LAWS`  | LAWS                                                    |
| 16      | `MEDIC` | MEDICINE                                                |
| 17      | `NURS`  | NURSING                                                 |
| 18      | `PHARM` | PHARMACY                                                |
| 19      | `PLNET` | PLANETARY SURVIVAL FOR SUSTAINABLE WELL-BEING           |
| 20      |  `KOS`  | SCIENCE                                                 |
| 21      | `SC4SH` | SEJAHTERA CENTRE FOR SUSTAINABILTY AND HUMANITY         |

## Alternative links

If, for some reason that http://albiruni.iium.edu.my/myapps/StudentOnline/schedule1.php is not accessible, try using http://myapps.iium.edu.my/StudentOnline/schedule1.php

## Honourable mentions

1. [asdacap/iiumschedule](https://github.com/asdacap/iiumschedule)
2. [PlashSpeed-Aiman/IIUMCourseScheduleApp](https://github.com/PlashSpeed-Aiman/IIUMCourseScheduleApp)
