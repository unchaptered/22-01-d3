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


/* 선이란 무엇인가?
    선은 두 점 사이를 짓는 직선으로 정의하고자 한다.
    즉, P1(x1, y1) 과 P2(x2, y2) 를 연결하는 직선 P1P2 를 구해야 한다.
    
    우리가 그리고자 하는 가로로 확장하는 선 그래프에서는 x 값은 등차수열이다.
    또한 (y1, y2) 의 값은 (datas[1].value, datas[2].value) 와 같다.

    이 예제에서는 점이 17개 이므로 선은 16개 그려야 한다.
 */
const widthGap=50;
const heightExpan=50;
const svgTag=d3.select("#svg__container");
const maxOfArray=findMaxMount(datas);

const lineG=svgTag.append("g")
    .attr("x",0).attr("y",0)
    .attr("stroke","black")
    .attr("transform",`translate(80,${11*heightExpan})`);
const lineLabelG=svgTag.append("g")
    .attr("x",0).attr("y",0)
    .attr("stroke","grey")
    .attr("transform",`translate(80,${11*heightExpan})`);
const lineZeroG=svgTag.append("g") // 그래프 원점 좌표
    .attr("x",0).attr("y",0)
    .attr("stroke","grey")
    .attr("transform",`translate(80,${11*heightExpan})`);
const linePercentLabelG=svgTag.append("g")
    .attr("x",0).attr("y",0)
    .attr("stroke","grey")
    .attr("transform",`translate(80,${11*heightExpan})`);
for (let index = 0; index<datas.length; index++) {
    if (datas[index+1]!==undefined) {
        const line=lineG.append("line")
            .attr("x1",widthGap*index).attr("x2",widthGap*(index+1))
            .attr("y1",10-datas[index].value*heightExpan)
            .attr("y2",10-datas[index+1].value*heightExpan);
    }
    const lineLabel=lineLabelG.append("text")
        .attr("x",widthGap*index-10)
        .attr("y",40)
        .attr("font-size",13)
        .text(datas[index].range);
    const lineVerticalLabel=lineLabelG.append("line")
        .attr("x1",widthGap*index).attr("x2",widthGap*index)
        .attr("y1",20)
        .attr("y2",10-datas[index].value*heightExpan)
        .attr("font-size",13)
        .attr("stroke-dasharray",3);
}
lineZeroG.append("line")
    .attr("x1",0).attr("x2",widthGap*16)
    .attr("y1",20).attr("y2",20);
lineZeroG.append("line")
    .attr("y1",20).attr("y2",-10*heightExpan)
    .attr("x1",0).attr("x2",0);

const linePercent=[2,4,6,8,10];
linePercent.forEach((percent,key)=>{
    linePercentLabelG.append("text")
        .attr("x",-40)
        .attr("y",-2*(key+1)*heightExpan+8)
        .text(percent+"%");
})
    
function findMaxMount(array) {
    let maxValue=0;
    array.forEach(({value})=>{
        if (maxValue<=value){
            maxValue=value;
        }
    });
    return maxValue;
}