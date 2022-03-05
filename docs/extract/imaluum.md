# Extract JSON from i-ma'luum

To extract the required information from i-ma'luum to use in IIUM Schedule, follow the steps below.

:::caution

You'll need to access the browser's developer tools to follow this guide. Therefore, **only desktop browsers is supported**.

:::
:::info

Tested with **Brave** browser (chromium based), it should work with other browsers too.

:::

### 1. Open [i-ma'luum](https://imaluum.iium.edu.my) in desktop browser

and navigate to **My Academic >** [**Class Timetable**](https://imaluum.iium.edu.my/MyAcademic/schedule).

Make sure to select the correct semester. (This should be same semester and session you have set in IIUM Schedule app)

### 2. Open Developer Tools

Press keyboard shortcut <kbd>F12</kbd> or find the **Developer Tools** on your browser.

Then, change to **Console** tab.

Next, **copy** the code below and **paste** to the console. Then press <kbd>**Enter**</kbd>.

```js
var tableBody = document.getElementsByClassName("table table-hover")[0];
var data = tableBody.getElementsByTagName("tr");

var nullIndex = new Array();
var courseCodes = new Array();
var sections = new Array();
var combinedSubjectDatas = new Array();

// section
for (let i = 1; i < data.length; i++) {
  // add unnecessary rows to unwanted array
  if (data[i].cells[2].getAttribute("rowspan") === null) nullIndex.push(i);
  // only extract the correct rows
  else sections.push(parseInt(data[i].cells[2].innerText));
}

// course code
for (let i = 1; i < data.length; i++) {
  // extract course code except the rows in unwanted array
  if (!nullIndex.includes(i)) courseCodes.push(data[i].cells[0].innerText);
}

// combine code & section
for (i = 0; i < sections.length; i++) {
  combinedSubjectDatas.push({
    courseCode: courseCodes[i],
    section: sections[i],
  });
}

var json = JSON.stringify(combinedSubjectDatas);
alert("Copy -----> " + json);
```

You'll see the **JSON result** from the dialog shown. Copy start from `[` and ends with `]`. For example, you should copy:

```json
[
  { "courseCode": "CCUB 4621", "section": 114 },
  { "courseCode": "MCTE 3104", "section": 1 },
  { "courseCode": "MCTE 3271", "section": 2 },
  { "courseCode": "MCTE 3312", "section": 1 },
  { "courseCode": "MCTE 3352", "section": 1 },
  { "courseCode": "MCTE 3372", "section": 1 },
  { "courseCode": "MCTE 3373", "section": 2 }
]
```

### 3. Last step

Finally, Paste the JSON result to the app's **JSON input**.
