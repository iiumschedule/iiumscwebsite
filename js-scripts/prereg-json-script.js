const tableBody =
    document.querySelector("body > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td > table > tbody");

const courseCodes = [];
const sections = [];
const combinedSubjectDatas = [];

const bodyChildren = tableBody.children;

for (let index = 2; index < bodyChildren.length - 1; index++) {
    const element = bodyChildren[index].children;
    const subject = element[1].textContent
    const section = element[2].textContent
    courseCodes.push(subject)
    sections.push(section)
}

// combine code & section
for (let i = 0; i < sections.length; i++) {
    combinedSubjectDatas.push({ courseCode: courseCodes[i], section: parseInt(sections[i]) });
}

const json = JSON.stringify(combinedSubjectDatas);
const myUrl = new URL('https://iiumschedule.iqfareez.com/qrcode');
myUrl.searchParams.append('data', json);
console.log(myUrl.href); // log target url
window.open(myUrl.href); // go to target url
