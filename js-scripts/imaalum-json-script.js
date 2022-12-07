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
