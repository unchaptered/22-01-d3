const mansOfCustom=[
    { target:"10대", gender:"man", mount:1000 },
    { target:"20대", gender:"man", mount:2000 },
    { target:"30대", gender:"man", mount:2200 },
    { target:"40대", gender:"man", mount:5000 },
    { target:"50대", gender:"man", mount:5500 },
    { target:"60대 이상", gender:"man", mount:1200 }
];
const womanOfCustom=[
    { target:"10대", gender:"woman", mount:300 },
    { target:"20대", gender:"woman", mount:4300 },
    { target:"30대", gender:"woman", mount:6000 },
    { target:"40대", gender:"woman", mount:3000 },
    { target:"50대", gender:"woman", mount:2000 },
    { target:"60대 이상", gender:"woman", mount:800 },
];
let allOfCustom=[];
for (let index = 0; index<mansOfCustom.length; index++) {
    allOfCustom.push({
        target: mansOfCustom[index].target,
        gender: "all",
        mount: mansOfCustom[index].mount+womanOfCustom[index].mount
    });
}
const width=600;
const height=500;
const padding=50; // 50 으로 고정하세요!

const svgTag=d3.select(".main__area").append("svg")
                .attr("width", width)
                .attr("height", height);
const success=drawLines(mansOfCustom,womanOfCustom,allOfCustom);

const graph=document.querySelectorAll(".graph");
const sample1=document.getElementById("sample1");
const sample2=document.getElementById("sample2");
const sample3=document.getElementById("sample3");

sample1.addEventListener("click",()=>graph[0].classList.toggle("graph__toggle"));
sample2.addEventListener("click",()=>graph[1].classList.toggle("graph__toggle"));
sample3.addEventListener("click",()=>graph[2].classList.toggle("graph__toggle"));

function drawLines(...manyArrays) {
    // validation check
    let length=0;
    let isOkLengthValidation=true;
    manyArrays.forEach((array, key)=>{
        const { length:nowLength }=array;
        if (key!==0 && length!==nowLength) {
            isOkLengthValidation=false;
            return;
        }   
        length=nowLength;
    })
    if(!isOkLengthValidation) return null;

    // findMaxValueOFArrays
    const maxMount=findMaxValueOfArrays(...manyArrays);

    const yFold=maxMount/(height-padding*2);
    const xGap=Math.floor(width/length);

    let lineGs=[];
    manyArrays.forEach(array => {
        lineGs.push({graph: drawLine(array)});
    })

    lineGs.push({forms: drawFormat(arguments[1])});
    const graphLineTags=document.getElementsByClassName("graph");

    function drawLine(array) {
        const lineG=svgTag.append("g")
            .attr("x", 0).attr("y", 0)
            .attr("transform", `translate(${padding*2}, ${maxMount/yFold + padding})`)
            .attr("class",`graph graph__${array[0].gender} graph__toggle`);

        for (let index=0; index<length; index++) {
            if (index+1 !== length) {
                lineG.append("line")
                    .attr("x1", xGap*(index))
                    .attr("x2", xGap*(index + 1))
                    .attr("y1",-array[index].mount/yFold)
                    .attr("y2",-array[index + 1].mount/yFold)
                    .attr("class","graph__element");
            }
            lineG.append("text")
                .attr("x", xGap*(index)-20)
                .attr("y", -array[index].mount/yFold-10)
                .attr("class","graph__element__text")
                .text(array[index].mount);
        }

        return lineG;
    }
    function drawFormat(array) {
        const formG=svgTag.append("g")
            .attr("x", 0).attr("y", 0)
            .attr("class","graph__guide__xy")
            .attr("transform", `translate(${padding}, ${maxMount/yFold + padding})`);

        formG.append("line")
            .attr("x1", 0).attr("x2", xGap*length-padding)
            .attr("y1", 0).attr("y2", 0);

        formG.append("line")
            .attr("x1", 0).attr("x2", 0)
            .attr("y1", 0).attr("y2", -maxMount/yFold-padding/2);

        array.forEach(({ target }, key)=>{
            const xPosi=xGap*key

            formG.append("text")
                .attr("x", xPosi+30).attr("y", 20)
                .attr("class","graph__guide__xy__text")
                .text(target);

            // 세로 선 그리기
            formG.append("line")
                .attr("x1", xPosi+padding).attr("x2", xPosi+padding)
                .attr("y1", 0).attr("y2", -maxMount / yFold)
                .attr("class","graph__guideline");
        });

        const areaSize=Math.floor(maxMount/width);
        const areaGap=width/yFold;
        for (let areaCount=1; areaCount<=areaSize; areaCount++) {
            formG.append("text")
                .attr("x", -40).attr("y", -areaCount*areaGap+7)
                .attr("class","graph__guide__xy__text")
                .text(`${ areaCount*width }`);
            formG.append("line")
                .attr("x1", 0).attr("x2", xGap*length-padding*2)
                .attr("y1", -areaCount*areaGap).attr("y2", -areaCount*areaGap)
                .attr("class","graph__guideline");
        }

        return formG;
    }
}

function findMaxValueOfArrays(...manyArrays) {
    let maxMount=0;
    manyArrays.forEach( value =>{
        value.forEach(({ mount })=>{
            if(maxMount<mount) maxMount=mount;
        })
    })

    return maxMount;
}