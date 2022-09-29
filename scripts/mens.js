
slide()
function slide(){
    const imgdata=[
        {imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7wz67Yr1A_WLDDRFr50H2cTysoktHQXGmQ&usqp=CAU"},

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
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"}, 
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
       {bimg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"}

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
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"Casual shirt",title2:"From $299"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF",title2:"From $299"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF",title2:"From $299"}, 
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF",title2:"From $299"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF",title2:"From $299"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF",title2:"From $299"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF",title2:"From $299"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF",title2:"From $299"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF",title2:"From $299"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF",title2:"From $299"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF",title2:"From $299"},
    {bimg1:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF",title2:"From $299"}

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
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"}, 
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"},
    {timg:"https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",title:"UPTO 40% OFF"}

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
        dealimg:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011177442-Blue-Navy-1000011177442_01-2100.jpg",p:"699",tt:"KAPPA solid Polo Neck T-shirt"
    },
    {
        dealimg:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/Beckham-Blue-Navy-1000003426336_01-2100.jpg",p:"699",tt:"KAPPA solid Polo Neck T-shirt"
    },
    {
        dealimg:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/Beckham-Blue-Navy-1000003426336_01-2100.jpg",p:"699",tt:"KAPPA solid Polo Neck T-shirt"
    }
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
})









