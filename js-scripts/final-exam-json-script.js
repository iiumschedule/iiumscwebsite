const tableBody = document.getElementsByClassName("table table-hover")[0];
const data = tableBody.getElementsByTagName("tr");

const extractedData = [];

for (let i = 1; i < data.length; i++) {
    const date = data[i].cells[3].innerText;
    if (date === "No final") continue

    const coursecode = data[i].cells[0].innerText;
    const sect = parseInt(data[i].cells[2].innerText);
    const time = data[i].cells[4].innerText;
    const venue = data[i].cells[5].innerText;
    const seat = parseInt(data[i].cells[6].innerText);

    extractedData.push({courseCode: coursecode, section: sect, date: date, time: time, venue: venue, seat: seat,});
}

const json = JSON.stringify(extractedData); // data
const myUrl = new URL("https://iiumschedule.iqfareez.com/qrcode");
myUrl.searchParams.append("data", json);
console.log(myUrl.href);
window.open(myUrl.href); // go to target url
