const mansOfCustom=[
    { target:"10", gender:"남성", mount:1000 },
    { target:"20", gender:"남성", mount:2000 },
    { target:"30", gender:"남성", mount:2200 },
    { target:"40", gender:"남성", mount:5000 },
    { target:"50", gender:"남성", mount:5500 },
    { target:"60+", gender:"남성", mount:1200 }
];
const womanOfCustom=[
    { target:"10", gender:"여성", mount:300 },
    { target:"20", gender:"여성", mount:4300 },
    { target:"30", gender:"여성", mount:6000 },
    { target:"40", gender:"여성", mount:3000 },
    { target:"50", gender:"여성", mount:2000 },
    { target:"60+", gender:"여성", mount:800 },
];
// 그래프 3개 그릴 겁니다.
// 성별 통합 그래프 / 남성 그래프 / 여성 그래프
let allOfCustom=[];
for (let index = 0; index<mansOfCustom.length; index++) {
    const { target, mount:manMount }=mansOfCustom[index];
    const { mount:womanMount }=womanOfCustom[index];

    allOfCustom.push({
        target,
        gender:"전체",
        mount:manMount+womanMount
    });
}

// css 기획
// 세로 막대기 그래프로...
const rectSize=20;
const rectX=rectSize+5;
const backColor="white";
const rectColor="#6c5ce7";
const maxOfGrpah=findMaxMount(allOfCustom);

const svgTag=d3.select("#svg__container");

draw(allOfCustom,{
    title:"전체 성별 그래프"
});
draw(mansOfCustom,{
    title:"남자 성별 그래프"
},200);
draw(womanOfCustom,{
    title:"여자 성별 그래프"
},400);

function draw(array, meta, xExpan=0, yExpan=0) {
    const rectG=svgTag.append("g").attr("transform",`translate(${80+xExpan},${30+yExpan})`);
    const rectLabelG=svgTag.append("g").attr("transform",`translate(${80+xExpan},${maxOfGrpah/20+yExpan + 45})`);
    const rectMeta=svgTag.append("g").attr("transform",`translate(${80+xExpan + 5},${maxOfGrpah/20+yExpan + 70})`);
    rectMeta.append("text").attr("font-size",20).text(meta.title);

    const rectLineG=svgTag.append("g").attr("transform",`translate(${80+xExpan},${maxOfGrpah/20 + 30})`);

    const arrayMax=findMaxMount(array);
    // 8000, 6000, 4000 이면 2000 간격으로 총 4개 3개 2개를 그어야 한다.
    // 선의 가로길이는 0부터 rectX * array.length
    console.log(arrayMax);

    for (let index=0; index<arrayMax/2000; index++) {
        const yModify=(-2000*index)/20;
        rectLineG.append("line")
            .attr("y1",yModify)
            .attr("y2",yModify)
            .attr("x1",-5)
            .attr("x2",rectX*array.length)
            .attr("stroke","grey");
        
        rectLineG.append("text")
            .attr("y",yModify+7)
            .attr("x",-40)
            .text(2000*index);
    }

    array.forEach(({target, gender, mount},key)=>{
        rectG.append("rect")
            .attr("x",rectX*key).attr("y",0)
            .attr("width",rectSize).attr("height",maxOfGrpah/20)
            .attr("fill",rectColor);
    
        rectG.append("rect")
            .attr("x",rectX*key).attr("y",0)
            .attr("width",rectSize).attr("height",(maxOfGrpah - mount)/20)
            .attr("fill",backColor);
    
        rectLabelG.append("text")
            .attr("x",rectX*key).attr("y",0)
            .text(target);
    });
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