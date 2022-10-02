
import {navbar} from "../components/navbar.js"
let nvd=document.querySelector("#main");
nvd.innerHTML=navbar()


slide()
function slide(){
    const imgdata=[
        {imgurl:"https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/09/Myntra-Big-Fashion-Sale.jpg?w=1200&ssl=1"},

        {imgurl:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/LA/Jupiter22/P1/Header-pc.gif"},
        {imgurl:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/09/21/2540419-untitled-design-2022-09-21t133756.185.png"},
   
    ]
    let slidediv=document.querySelector("#slideimage");
    let img=document.createElement("img");
    let x=0;
    setInterval(function(){
   if(x==3){
   x=0;
   }
   img.src=imgdata[x].imgurl;
   slidediv.append(img);
   x++;
    },3000)
}


// appending big brands sections;

const branddata=[
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011800684-Black-Black-1000011800684_02-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011800684-Red-Burgundy-1000011800684_01-2100.jpg",title:"UPTO 40% OFF"}, 
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009493146-Blue-MidBlue-1000009493146_01-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011310009-Black-Black-1000011310009_01-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011310009-Black-Black-1000011310009_02-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011800690-Red-Red-1000011800690_04-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011800690-Blue-Navy-1000011800690_02-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011800690-Blue-Navy-1000011800690_04-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011962045-Blue-Navy-1000011962045_01-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010438612-Black-Black-1000010438612_02-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010438612-White-White-1000010438612_01-2100.jpg",title:"UPTO 40% OFF"}

]
branddata.forEach(function(elem){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=elem.bimg;
    let title=document.createElement("h4");
    title.innerHTML=elem.title;
    div.append(img,title);
    document.querySelector("#brands").append(div)
})

const bigdata=[
    
        {img1:"https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-menstripbanner-02Sep2022A.jpg"},
       {img1:"https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-9modblock-StripBanner2-D-26Sep2022.jpg"},
        {img1:"https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-8modblock-oneBythree-D-14Sept2022.gif"},
    
]

bigdata.forEach(function(elem){
    let div=document.createElement("div");

    let bigi=document.createElement("img");
    bigi.src=elem.img1;
    div.append(bigi)
    document.querySelector("#bigimage1").append(div);
})


// shop by category;

const shopdata=[
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"T-SHIRT",title2:"From $299"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010928141-Grey-1000010928141_01-2100.jpg",title:"CASUAL SHIRT",title2:"From $299"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010618263-Black-1000010618263_01-2100.jpg",title:"TRACK PANTS",title2:"From $299"}, 
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011054612-Blue-MidBlue-1000011054612_01-2100.jpg",title:"JEANS",title2:"From $299"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008751544_01-2100.jpg",title:"WATCHES",title2:"From $299"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010438443-Beige-Beige-1000010438443_01-2100.jpg",title:"SHORTS",title2:"From $499"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011185918-Black-1000011185918_01-2100.jpg",title:"SHOES",title2:"UPTO 50% OFF"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010668365-Black-Black-1000010668365_02-2100.jpg",title:"CASUAL TROUSERS",title2:"From $599"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000006290827-11118-Blue-Navy-1000006290827-11118_01-2100.jpg",title:"INNERWEAR",title2:"From $199"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010434516-Grey-Grey-1000010434516_01-2100.jpg",title:"FORMAL SHIRTS",title2:"From $599"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/Beckham-Red-Red-1000003426336_01-2100.jpg",title:"SPORTS WEAR",title2:"From $399"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011178135-Green-Green-1000011178135_01-2100.jpg",title:"ETHNIC WEAR",title2:"From $499"}

]

shopdata.forEach(function(elem){
    let div=document.createElement("div");
    let img1=document.createElement("img");
    img1.src=elem.bimg1;
    let title=document.createElement("h4");
    title.innerHTML=elem.title;
    let title2=document.createElement("h4");
    title2.innerText=elem.title2;
    div.append(img1,title,title2);
    document.querySelector("#shopcat").append(div)
})


// for trending

const trendingdata=[
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011558700-Green-Olive-1000011558700-2022_01-2100.jpg",title:"Starting $599"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011517422-Black-Black-1000011517422_01-2100.jpg",title:"Starting $989"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011456930-Green-Green-1000011456930_02-2100.jpg",title:"Starting $399"}, 
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011935092-Blue-Navy-1000011935092_01-2100.jpg",title:"Starting $599"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992209-Blue-Blue-1000011992209_01-2100.jpg",title:"Starting $999"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011769934-White-White-1000011769934-080822_01-2100.jpg",title:"Starting $899"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010451413-Blue-DarkBlue-1000010451413_01-2100.jpg",title:"UPTO 50% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179758-Grey-GreyMelange-1000011179758_01-2100.jpg",title:"UPTO 60% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010653014-Black-1000010653014_01-2100.jpg",title:"UPTO 30% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011143166-Blue-Navy-1000011143166_01-2100.jpg",title:"UPTO 20% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011047408-Green-1000011047408_01-2100.jpg",title:"UPTO 50% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000007648839-Brown-Brown-1000007648839_01-2100.jpg",title:"UPTO 30% OFF"}

]

trendingdata.forEach(function(elem){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=elem.timg;
    let title=document.createElement("h4");
    title.innerHTML=elem.title;
    div.append(img,title);
    document.querySelector("#trending").append(div)
})



const flashsale=()=>{
    
    let fimg=document.createElement("img");
    fimg.src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-modularblock7-oneBythree-A-Men-27Sep2022.gif"
  document.querySelector("#flashimg").append(fimg)
}
flashsale()


const top=[
    {pick:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-1-oneBythree-21June2022.jpg"},
    {pick:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-2-oneBythree-21June2022.jpg"},
    {pick:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-3-oneBythree-21June2022.jpg"},
]

top.forEach(function(elem){
let img=document.querySelector("img");
img.src=elem.pick;
document.querySelector("#toppicks").append(img)
})

let eimg=document.createElement("img");
eimg.src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-Men-27Sep2022.jpg"
document.querySelector("#e").append(eimg)


const mls1=[
    {mlsimg:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-1-oneBythreeA-07Sep2022.jpg"},
    {mlsimg:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-2-oneBythreeA-24June20221.jpg"},
    {mlsimg:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-3-oneBythreeA-24June2022.jpg"}
]

mls1.forEach(function(elem){
    let img=document.createElement("img");
    img.src=elem.mlsimg;
    document.querySelector("#mls").append(img);
})

const nct1=[
    {nctimg:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-A-Men-09Sep2022.jpg"},
    {nctimg:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-B-Men-09Sep2022.jpg"},
    {nctimg:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-C-Men-16Sept2022.gif"}
]

nct1.forEach(function(elem){
    let img=document.createElement("img");
    img.src=elem.nctimg;
    document.querySelector("#nct").append(img);
})

const high=[
    {highimg:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-1-oneBythree-24June2022.jpg"},
    {highimg:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-2-oneBythree-19July2022.jpg"}
]



high.forEach(function(elem){
    let img2=document.createElement("img");
    img2.src=elem.highimg;
  let div1=document.createElement("div");
  div1.setAttribute("div","slideshow1")
   
    

    
    document.querySelector("#highlights").append(img2);
})

// 

const tr=[
    {trimg:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-1-oneBythree-16Sep2022.jpg"},
    {trimg:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-2-oneBythree-16Sep2022.jpg"},
    {trimg:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-3-oneBythree-16Sep2022.jpg"}
]

tr.forEach(function(elem){
    let img=document.createElement("img");
    img.src=elem.trimg;
    document.querySelector("#tr").append(img)
})

const awdata=[
    {awimg:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-1-oneBythree-16Sep2022.jpg"},
    {awimg:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-2-oneBythree-16Sep2022.jpg"},
    {awimg:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-3-oneBythree-16Sep2022.jpg"}
]

awdata.forEach(function(elem){
    let img=document.createElement("img");
    img.src=elem.awimg;
    document.querySelector("#aw").append(img)
})


// for deal corner


const dealcorner=[
    {
        dealimg:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/Beckham-Blue-Navy-1000003426336_01-2100.jpg",p:"699",tt:"KAPPA solid Polo Neck T-shirt"
    },
    {
        dealimg:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008301238-Var89-White-1000008301238-Var89_01-2100.jpg",p:"995",tt:"FAHRENHEIT Solid Slim Fit Crew Neck T-shirt- Pack of 3"
    },
    {
        dealimg:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011177442-Blue-Navy-1000011177442_01-2100.jpg",p:"999",tt:"FAHRENHEIT Men Solid Printed Shirt"
    },
    {
        dealimg:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011178097-Black-Black-1000011178097_01-2100.jpg",p:"1,499",tt:"KAPPA Men Printed Joggers"
    },
    {
        dealimg:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011152454-Blue-LightBlue-1000011152454_01-2100.jpg",p:"717",tt:"FAHRENHEIT Men Striped Polo T-shirt"}
        
    
]

dealcorner.forEach(function(elem){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=elem.dealimg;
    let price=document.createElement("h4");
    price.innerText=elem.p;
    let name=document.createElement("p");
    name.innerText=elem.tt;
    div.append(img,price,name)
    document.querySelector("#deal").append(div)
});


// most loved brands;

const mlbdata=[
    {mlbimg:"https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1C-Men-14July2022.jpg"},
    {mlbimg:"https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1D-Men-14July2022.jpg"}
]
mlbdata.forEach(function(elem){
    let img=document.createElement("img");
    img.src=elem.mlbimg;
    document.querySelector('#mlb').append(img);
});



// for essentials

const essendata=[
    {essenimg:"https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-A-Men-12Sept2022.jpg"},
    {essenimg:"https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-B-Men-06Mar2022.jpg"}
]
essendata.forEach(function(elem){
    let img=document.createElement("img");
    img.src=elem.essenimg;
    document.querySelector("#efy").append(img)
})


// const twdata=[
//     {twimg1:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011402353_01-2100.jpg",price:"10,396",tt12:"GUESS Men Embellished Analog Watch"},
//     {twimg1:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000005305087_01-2100.jpg",price:"3,195",tt12:"CASIO Enticer-Mens Analog Watch A1177"},
//     {twimg1:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008396261_01-2100.jpg",price:"7,495",tt12:"CASIO G-Shock Carbon Core Guard Men Watch - GA-2100-4ADR (G988)"},
//     {twimg1:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000007737057_01-2100.jpg",price:"2995",tt12:"CASIO Enticer-Mens Analog Watch A1612"},
//     {twimg1:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009728206_01-2100.jpg",price:"8,595",tt12:"CASIO Men Digital Multifunction Watch - G1048"}
// ]

// twdata.forEach(function(elem){
//     let div123=document.querySelector("div");
//     let img123=document.createElement("img");
//     img123.src=elem.twimg1;

//     let price123=document.createElement("h4");
//     price123.innerText=elem.price;

//     let name3=document.createElement("p");
//     name3.innerText=elem.tt12;
//     div123.append(img123,price123,name3)
//     document.querySelector('#tw').append(div123)
// })

// for footer;
import { footer } from '../components/footer.js';

let footer_div = document.getElementById('footer');
footer_div.innerHTML = footer();














