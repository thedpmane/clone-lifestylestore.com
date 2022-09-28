
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

