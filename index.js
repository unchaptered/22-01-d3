/*  파일 목적은?
    .main__grid 안에
    .main__content + .main__content__cover 을 injection 하기 위한 파일
 */

const divContainer=document.querySelector(".main__grid");

const linkList=[
    {
        fileName: "SVG from JS",
        fileLink: "./src/001 svg from js/index.html",
    },
    {
        fileName: "SVG from D3",
        fileLink: "./src/002 svg from d3/index.html",
    },
    {
        fileName: "SVG from D3 - 2",
        fileLink: "./src/003 svg from d3 - 2/index.html",
    },
    {
        fileName: "SVG from D3 - 3",
        fileLink: "./src/004 svg from d3 - 3/index.html",
    },
    {
        fileName: "SVG from D3 - 4",
        fileLink: "./src/005 svg from d3 - 4/index.html",
    },
    {
        fileName: "SVG from D3 - 5",
        fileLink: "./src/006 svg from d3 - 5/index.html",
    },
    {
        fileName: "SVG from D3 - 6",
        fileLink: "./src/007 svg from d3 - 6/index.html",
    },
];
const imgLink="./sample.jpg";
const className=[ "main__content","main__content__cover","main__content__title" ];

linkList.forEach(({fileName,fileLink})=>{
    const a=document.createElement("a");
    a.className=className[0];
    a.href=fileLink;
    
    const img=document.createElement("img");
    img.className=className[1];
    img.src=imgLink;

    const p=document.createElement("p");
    p.className=className[2];
    p.innerText=fileName;

    a.appendChild(img);
    a.appendChild(p);
    divContainer.appendChild(a);
})