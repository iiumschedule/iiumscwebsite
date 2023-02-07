---
title: from i-ma'luum
---

# Extract subjects from i-ma'luum

You are viewing the steps to extract schedule information via **I-ma'luum website**. For prereg, click [here](../prereg/).

:::note

You'll need to access the browser's developer tools to follow this guide. Therefore, **only desktop browsers is supported**.
For Android, you may use **import from i-Ma'luum** directly.

:::

### 1. Open [i-ma'luum](https://imaluum.iium.edu.my) in desktop browser

and navigate to **My Academic >** [**Class Timetable**](https://imaluum.iium.edu.my/MyAcademic/schedule).

Make sure to select the correct semester. (This should be same semester and session you have set in IIUM Schedule app)

![semester imaluum](./screenshots/2022-03-05-191546.png)

### 2. Open Developer Tools

Press keyboard shortcut <kbd>F12</kbd> or find the **Developer Tools** on your browser.

![devtools brave](./screenshots/Screenshot-2022-03-06-072635.png)

Then, change to **Console** tab.

:::info

The steps might be different on **Apple Safari**. Kindly follow this [article](https://balsamiq.com/support/faqs/browserconsole/#apple-safari).

:::

![devtools console brave](./screenshots/2022-03-05-192905.png)

### 3. Run script

Next, **copy** the code below and **paste** to the console. Then press <kbd>**Enter**</kbd>.

:::tip

**Firefox** may have paste protection enabled as a security feature. To allow pasting, type `allow pasting` in the console before pasting the code below.

:::

```js
const tableBody = document.getElementsByClassName("table table-hover")[0];
const data = tableBody.getElementsByTagName("tr");

const extractedData = [];

for (let i = 1; i < data.length; i++) {
  // skip empty rows
  if (data[i].cells[2].getAttribute("rowspan") === null) continue;

  const coursecode = data[i].cells[0].innerText;
  const sect = parseInt(data[i].cells[2].innerText);
  extractedData.push({
    courseCode: coursecode,
    section: sect,
  });
}

const json = JSON.stringify(extractedData); // data
const myUrl = new URL("https://iiumschedule.iqfareez.com/qrcode");
myUrl.searchParams.append("data", json);
console.log(myUrl.href);
window.open(myUrl.href); // go to target url
```

The script will scrap the subject course code and its section. After the process completed, another site will be opened to show the QR code and Raw JSON data. Just follow the instruction there.

![site qrcode](./screenshots/frame_generic_light.png)

### 4. Finish

Finally, Paste the JSON result into the app's **JSON input** (Create schedule > Input kulliyyah > Input courses > Import from... > JSON.

![json input iium schedule](./screenshots/iiumschedule-json-input.png)
