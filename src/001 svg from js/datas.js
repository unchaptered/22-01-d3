const datas=[
    { range: "0-4세", value: 9.3 },
    { range: "5-9세", value: 8.8 },
    { range: "10-14세", value: 8.6 },
    { range: "15-19세", value: 8.80 },
    { range: "20-24세", value: 8.90 },
    { range: "25-29세", value: 8.10 },
    { range: "30-34세", value: 7.30 },
    { range: "35-39세", value: 7.10 },
    { range: "40-44세", value: 6.60 },
    { range: "45-49세", value: 6.00 },
    { range: "50-54세", value: 5.10 },
    { range: "55-59세", value: 4.50 },
    { range: "60-64세", value: 3.40 },
    { range: "65-69세", value: 2.60 },
    { range: "70-74세", value: 2.10 },
    { range: "75-79세", value: 1.50 },
    { range: "80세 이상", value: 1.60 },
];

const svgContainer=document.getElementById("svg__container");

let count=1;
const height=20;
const lineHeight=22;
const widthMultiply=43.1;

let rect="";
let text="";
rect+=`<g transform="translate(100,30) scale(${widthMultiply},1)">`;
text=`<g transform="translate(0,45)">`;

datas.reverse().forEach(({range, value})=>{
    rect+=`<rect x="0" y="${lineHeight*count}" height="${height}"width="${value}"/>`;
    text+=`<text x="0" y="${lineHeight*count}">${range}</text>"`;
    
    count++;
});
rect+="</g>";
text+="</g>";

//  축 만들기 (2.5 % 간격으로 10%까지 (0, 2.5%, 5%, 7,5% 10%))
const widthGap=2.5;

let lines="";
let linesLable="";
lines+=`<g transform="translate(100,30)" stroke="black">`;
linesLable+=`<g transform="translate(100,30)" text-anchor="middle">`;
count=0;
do {
    const widthAbsolute=widthGap*count;
    const widthRelative=widthAbsolute*widthMultiply;

    lines+=`<line x1="${widthRelative}" y1="15" x2="${widthRelative}" y2="5"/>`;
    linesLable+=`<text x="${widthRelative}" y="0">${(widthAbsolute===0) ? widthAbsolute : widthAbsolute+"%"}</text>`;

    count++;
    if (count>=5) break;
} while(true);
lines+="</g>";
linesLable+="</g>";

svgContainer.innerHTML=(rect+text+lines+linesLable);