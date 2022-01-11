/*  파일 목적은?
    .main__grid 안에
    .main__content + .main__content__cover 을 injection 하기 위한 파일
 */

const divContainer=document.querySelector(".main__grid");

const linkList=[
    "./index.html",
    "./index.html",
    "./index.html",
    "./index.html",
    "./index.html",
    "./index.html",
];
const imgLink="./sample.jpg";
const className=[ "main__content","main__content__cover","main__content__title" ];

linkList.forEach((value)=>{
    const a=document.createElement("a");
    a.className=className[0];
    a.href=value;
    
    const img=document.createElement("img");
    img.className=className[1];
    img.src=imgLink;

    const p=document.createElement("p");
    p.className=className[2];
    p.innerText="하이";

    a.appendChild(img);
    a.appendChild(p);
    divContainer.appendChild(a);
})