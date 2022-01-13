const datas=[
    { range: "0-4", value: 9.3 },
    { range: "5-9", value: 8.8 },
    { range: "10-14", value: 8.6 },
    { range: "15-19", value: 8.80 },
    { range: "20-24", value: 8.90 },
    { range: "25-29", value: 8.10 },
    { range: "30-34", value: 7.30 },
    { range: "35-39", value: 7.10 },
    { range: "40-44", value: 6.60 },
    { range: "45-49", value: 6.00 },
    { range: "50-54", value: 5.10 },
    { range: "55-59", value: 4.50 },
    { range: "60-64", value: 3.40 },
    { range: "65-69", value: 2.60 },
    { range: "70-74", value: 2.10 },
    { range: "75-79", value: 1.50 },
    { range: "80 이상", value: 1.60 },
];

const expandSize=43.1;
const svgTag=d3.select("#svg__container").attr("transform","translate(10,10)");
const rectG=svgTag.append("g").attr("transform","translate(80,30)");
const textG=svgTag.append("g").attr("transform","translate(15,51)");

let count=0;
const rectSize=20;
const rectY=rectSize+5;
datas.forEach(({range,value})=>{
    rectG.append("rect").attr("x",0).attr("y",rectY*count).attr("width",value*expandSize).attr("height",rectSize);
    textG.append("text").attr("x",0).attr("y",rectY*count).attr("font-size",16).text(range);

    count++;
});

const percent=[0,2.5,5,7.5,10];
const lineG=svgTag.append("g").attr("transform","translate(80,20)").attr("stroke","black");
const lineLabelG=svgTag.append("g").attr("transform","translate(75,0)");
percent.forEach((width)=>{
    lineG.append("line").attr("x1",width*expandSize).attr("y1",5)
                        .attr("x2",width*expandSize).attr("y2",0);
    lineLabelG.append("text").attr("x",width*expandSize).attr("y",15).attr("font-size",16).text(`${width===0 ? width : width+"%"}`);
});