const mansOfCustom=[
    { target:"10대", gender:"남성", mount:1000 },
    { target:"20대", gender:"남성", mount:2000 },
    { target:"30대", gender:"남성", mount:2200 },
    { target:"40대", gender:"남성", mount:5000 },
    { target:"50대", gender:"남성", mount:5500 },
    { target:"60대 이상", gender:"남성", mount:1200 }
];
const womanOfCustom=[
    { target:"10대", gender:"여성", mount:300 },
    { target:"20대", gender:"여성", mount:4300 },
    { target:"30대", gender:"여성", mount:6000 },
    { target:"40대", gender:"여성", mount:3000 },
    { target:"50대", gender:"여성", mount:2000 },
    { target:"60대 이상", gender:"여성", mount:800 },
];
let allOfCustom=[];
for (let index = 0; index<mansOfCustom.length; index++) {
    allOfCustom.push({
        target: mansOfCustom[index].target,
        gender: "전체",
        mount: mansOfCustom[index].mount+womanOfCustom[index].mount
    });
}

const maxOfArray=findMaxMount(allOfCustom);

/* <svg> 의 초기 설정을 해줘야 합니다.
    svgWidth : <svg>.width
    svgHeigth : <svg>.heigth

    svgWidthCanUse : <svg>.width - padding(한 방향)*2;
    svgHeightCanUse : <svg>.heigth - padding(한 방향)*2;

    padding 값을 주는 이유는 그래프에 text 를 추가할 목적으로 공간을 비우는 것입니다.
*/
const svgTag=d3.select("#svg__container");
const svgWidth=1000;
const svgHeight=600;
const svgWidthCanUse=svgWidth-(50*2);
const svgHeightCanUse=svgHeight-(50*2);

drawLine(allOfCustom, maxOfArray);
drawLine(mansOfCustom, maxOfArray, "blue");
drawLine(womanOfCustom, maxOfArray, "red");

drawFormat(allOfCustom, maxOfArray);

/**
 *  drawLine 함수는 인자로 받은 배열의 길이에 대응하여 그래프를 그려줍니다.
 * 
 *  이 함수 호출에 주의사항은 다음과 같습니다.
 * 
 *  1. svgTag 라는 이름의 <svg> 를 선언해둘 것.
 *  2. svgWidthCanUse 와 svgHeigthCanUse 를 선언해둘 것.
 *  3. 또한 해당 버전의 함수에서는 세부 조절값을 조정해야 합니다.
 * 
 *  > svgWidthCanUse 는 svgTag 의 길이인 svgWidth 에서 padding(한 방향)*2 를 제외한 값입니다.
 * 
 *  > svgHeightCanUse 는 svgTag 의 길이인 svgHeight 에서 padding(한 방향)*2 를 제외한 값입니다.
 * 
 * @param {*} datas 객체 배열의 길이와 무관하게 늘려준다.
 * @param {*} maxOfDatas 전체 배열 중에 최댓값을 찾는다.
 * @param {*} color 선 그래프의 색상을 결정한다.
 */
function drawLine(datas, maxOfDatas, color="black") {
    const { length }=datas;
    
    const yFold=maxOfDatas/svgHeightCanUse; // 16.4 
    const xGap=Math.floor(svgWidth/length);

    const lineG=svgTag.append("g")
        .attr("x",0).attr("y",0)
        .attr("stroke",color)
        .attr("transform", `translate(100,${maxOfDatas / yFold+50})`);
    // 마지막에 50 을 더한 것은 padding 만큼 내려준 것이다.

    for (let index=0; index<length; index++) {
        // 마지막 index 를 제외하고 P1,...,Pn까지 선긋기
        if (index+1 !== length) {
            lineG.append("line")
                .attr("x1", xGap*(index))
                .attr("x2", xGap*(index+1))
                .attr("y1", - datas[index].mount / yFold)
                .attr("y2", - datas[index+1].mount / yFold);
        }
    }
}

/**
 *  drawFormat 함수는 인자로 받은 배열의 길잉 대응하여 기본 양식을 그려줍니다,
 * 
 *  이 함수 호출에 주의사항은 다음과 같습니다.
 * 
 *  1. svgTag 라는 이름의 <svg> 를 선언해둘 것.
 *  2. svgWidthCanUse 와 svgHeigthCanUse 를 선언해둘 것.
 *  3. 또한 해당 버전의 함수에서는 세부 조절값을 조정해야 합니다.
 * 
 *  > svgWidthCanUse 는 svgTag 의 길이인 svgWidth 에서 padding(한 방향)*2 를 제외한 값입니다.
 * 
 *  > svgHeightCanUse 는 svgTag 의 길이인 svgHeight 에서 padding(한 방향)*2 를 제외한 값입니다.
 * 
 * @param {*} maxDatas 단수의 선을 그렸다면 해당 객체 배열을, 복수의 선을 그렸다면 최댓값이 가장 큰 객체 배열을 넣어주세요.
 * @param {*} maxOfDatas 모든 객체 배열 중 최댓값을 넣어주세요.
 */
function drawFormat(maxDatas, maxOfDatas) {
    const { length }=maxDatas;

    const yFold=maxOfDatas/svgHeightCanUse;
    const xGap=Math.floor(1000/length);
    const fontSize=15;
    const fontWeight=300;

    const formG=svgTag.append("g")
        .attr("x",0).attr("y",0)
        .attr("stroke","black")
        .attr("transform", `translate(50,${maxOfDatas / yFold + 50})`);

    formG.append("line")
        .attr("x1", 0).attr("x2", xGap*length-100)
        .attr("y1", 0).attr("y2", 0);
    formG.append("line")
        .attr("x1", 0).attr("x2", 0)
        .attr("y1", 0).attr("y2", -maxOfDatas / yFold);

    maxDatas.forEach(({ target }, key)=>{
        const xPosi=xGap*key

        formG.append("text")
            .attr("x", xPosi+30).attr("y", 20)
            .attr("font-size", fontSize).attr("font-weight", fontWeight)
            .text(target);

        // 세로 선 그리기
        formG.append("line")
            .attr("x1", xPosi+50).attr("x2", xPosi+50)
            .attr("y1", 0).attr("y2", -maxOfDatas / yFold)
            .attr("stroke", "grey")
            .attr("stroke-dasharray",3);
    });
    
    const areaSize=Math.floor(maxOfDatas/1000);
    const areaGap=1000/yFold;
    for (let areaCount=1; areaCount<=areaSize; areaCount++) {
        formG.append("text")
            .attr("x", -40).attr("y", -areaCount*areaGap+7)
            .attr("font-size", fontSize).attr("font-weight", fontWeight)
            .text(`${ areaCount*1000 }`);
        formG.append("line")
            .attr("x1", 0).attr("x2", xGap*length-100)
            .attr("y1", -areaCount*areaGap).attr("y2", -areaCount*areaGap)
            .attr("stroke", "grey")
            .attr("stroke-dasharray", 3);
    }
}

function findMaxMount(array) {
    let maxMount=0;
    array.forEach(({mount})=>{
        if (maxMount<=mount){
            maxMount=mount;
        }
    });
    return maxMount;
}