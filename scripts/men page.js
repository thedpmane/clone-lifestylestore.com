// code to import footer
import { footer } from '../components/footer.js';

let footer_div = document.getElementById('footer');
footer_div.innerHTML = footer();



// data for slideshow
const SlideShowData = [
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Men_Desktop-1-03Oct2022.gif',
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-MEN-03Oct2022.jpg",
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-2-03Oct2022.jpg',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-MEN-03Oct2022.gif',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-3-03Oct2022.jpg',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-MEN-03Oct2022.gif',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-4-03Oct2022.jpg',
    },
];

// code for slide show with the delay of 3 seconds starts here

let aslideshow1 = document.getElementById('aslideshow1');
aslideshow1.innerHTML = null;

let i = 0;
let image = document.createElement('img');
image.src = SlideShowData[0].img;
aslideshow1.append(image);
i++;

setInterval(function () {
    if (i === SlideShowData.length) {
        i = 0;
    }
    image.src = SlideShowData[i].img;
    aslideshow1.append(image);
    i++;
}, 3000);

// code for slide show with the delay of 3 seconds ends here



// data for brand
const BrandData = [
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg",
        title: "UPTO 40% OFF",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011800684-Black-Black-1000011800684_02-2100.jpg",
        title: "UPTO 40% OFF",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011800684-Red-Burgundy-1000011800684_01-2100.jpg",
        title: "UPTO 40% OFF",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000009493146-Blue-MidBlue-1000009493146_01-2100.jpg",
        title: "UPTO 40% OFF",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011310009-Black-Black-1000011310009_01-2100.jpg",
        title: "UPTO 40% OFF",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011310009-Black-Black-1000011310009_02-2100.jpg",
        title: "UPTO 40% OFF",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011800690-Red-Red-1000011800690_04-2100.jpg",
        title: "UPTO 40% OFF",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011800690-Blue-Navy-1000011800690_02-2100.jpg",
        title: "UPTO 40% OFF",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011800690-Blue-Navy-1000011800690_04-2100.jpg",
        title: "UPTO 40% OFF",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011962045-Blue-Navy-1000011962045_01-2100.jpg",
        title: "UPTO 40% OFF",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010438612-Black-Black-1000010438612_02-2100.jpg",
        title: "UPTO 40% OFF",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010438612-White-White-1000010438612_01-2100.jpg",
        title: "UPTO 40% OFF",
    },
];

// code for appending brand data starts here
const ShopByDept = () => {

    let container = document.getElementById('abrands');
    container.innerHTML = null;

    BrandData.forEach(function (el) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.img;
        let title = document.createElement("h4");
        title.innerHTML = el.title;
        div.append(img, title);
        container.append(div);
    });
};

ShopByDept();
// code for appending brand data ends here



// data for banner
const BannerData = [
    {
        img: "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-menstripbanner-02Sep2022A.jpg",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-9modblock-StripBanner2-D-26Sep2022.jpg",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-8modblock-oneBythree-D-14Sept2022.gif",
    },
];

// code for appending banner data starts here
const Banner = () => {

    let container = document.getElementById('abanner1');
    container.innerHTML = null;

    BannerData.forEach(function (el) {
        let div = document.createElement("div");
        let banner = document.createElement("img");
        banner.src = el.img;
        div.append(banner);
        container.append(div);
    });
};

Banner();
// code for appending banner data ends here



// data for shop by category
const ShopByCatData = [
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011273713-Red-Red-1000011273713_01-2100.jpg", title: "T-SHIRT", title2: "From $299"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010928141-Grey-1000010928141_01-2100.jpg", title: "CASUAL SHIRT", title2: "From $299"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010618263-Black-1000010618263_01-2100.jpg", title: "TRACK PANTS", title2: "From $299"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011054612-Blue-MidBlue-1000011054612_01-2100.jpg", title: "JEANS", title2: "From $299"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010438443-Beige-Beige-1000010438443_01-2100.jpg", title: "SHORTS", title2: "From $499"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010668365-Black-Black-1000010668365_02-2100.jpg", title: "CASUAL TROUSERS", title2: "From $599"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000006290827-11118-Blue-Navy-1000006290827-11118_01-2100.jpg", title: "INNERWEAR", title2: "From $199"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010434516-Grey-Grey-1000010434516_01-2100.jpg", title: "FORMAL SHIRTS", title2: "From $599"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/Beckham-Red-Red-1000003426336_01-2100.jpg", title: "SPORTS WEAR", title2: "From $399"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011178135-Green-Green-1000011178135_01-2100.jpg", title: "ETHNIC WEAR", title2: "From $499"
    },
];

// code for appending shop by category data starts here
ShopByCatData.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    let title = document.createElement("h4");
    title.innerHTML = el.title;
    let title2 = document.createElement("h4");
    title2.innerText = el.title2;
    div.append(img, title, title2);
    document.querySelector("#shopcat").append(div)
});
// code for appending shop by category data ends here



// data for trending
const TrendingData = [
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011558700-Green-Olive-1000011558700-2022_01-2100.jpg",
        title: "Starting $599"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011517422-Black-Black-1000011517422_01-2100.jpg",
        title: "Starting $989"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011456930-Green-Green-1000011456930_02-2100.jpg",
        title: "Starting $399"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011935092-Blue-Navy-1000011935092_01-2100.jpg",
        title: "Starting $599"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011992209-Blue-Blue-1000011992209_01-2100.jpg",
        title: "Starting $999"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011769934-White-White-1000011769934-080822_01-2100.jpg",
        title: "Starting $899"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010451413-Blue-DarkBlue-1000010451413_01-2100.jpg",
        title: "UPTO 50% OFF"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179758-Grey-GreyMelange-1000011179758_01-2100.jpg",
        title: "UPTO 60% OFF"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010653014-Black-1000010653014_01-2100.jpg",
        title: "UPTO 30% OFF"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011143166-Blue-Navy-1000011143166_01-2100.jpg",
        title: "UPTO 20% OFF",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011047408-Green-1000011047408_01-2100.jpg",
        title: "UPTO 50% OFF",
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000007648839-Brown-Brown-1000007648839_01-2100.jpg",
        title: "UPTO 30% OFF",
    },
];

// code for appending trending data starts here
TrendingData.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    let title = document.createElement("h4");
    title.innerHTML = el.title;
    div.append(img, title);
    document.querySelector("#trending").append(div)
});
// code for appending trending data ends here



// data for flashsale
const flashsale = () => {

    let img = document.createElement("img");
    img.src = "https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-modularblock7-oneBythree-A-Men-27Sep2022.gif";
    document.querySelector("#flashimg").append(img);
};

// code for appending flash sale data starts here
flashsale();
// code for appending flash sale data ends here



// data for toppicks
const TopPickData = [
    {
        img: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-1-oneBythree-21June2022.jpg"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-2-oneBythree-21June2022.jpg"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modularblock-3-oneBythree-21June2022.jpg"
    },
];

// code for appending top picks data starts here
TopPickData.forEach(function (el) {
    let img = document.querySelector("img");
    img.src = el.img;
    document.querySelector("#toppicks").append(img)
});
// code for appending top picks data ends here



// code for appending banner data starts here
let img = document.createElement("img");
img.src = "https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-Men-27Sep2022.jpg";
document.querySelector("#e").append(img);
// code for appending banner data ends here



// data for most loved
const MostLovedData = [
    {
        mlsimg: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-1-oneBythreeA-07Sep2022.jpg"
    },
    {
        mlsimg: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-2-oneBythreeA-24June20221.jpg"
    },
    {
        mlsimg: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-3-oneBythreeA-24June2022.jpg"
    },
];

// code for appending most loved data starts here
MostLovedData.forEach(function (el) {
    let img = document.createElement("img");
    img.src = el.mlsimg;
    document.querySelector("#mls").append(img);
});
// code for appending most loved data ends here



// data for cool/new
const CoolData = [
    {
        img: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-A-Men-09Sep2022.jpg"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-B-Men-09Sep2022.jpg"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-C-Men-16Sept2022.gif"
    },
];

// code for appending cool/new data starts here
CoolData.forEach(function (el) {
    let img = document.createElement("img");
    img.src = el.img;
    document.querySelector("#nct").append(img);
});
// code for appending cool/new data ends here



// data for highlight
const HighlightData = [
    {
        img: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-1-oneBythree-24June2022.jpg"
    },
    {
        img: "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-2-oneBythree-19July2022.jpg"
    },
];

// code for appending highlighted data starts here
HighlightData.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    div.append(img);
    document.querySelector("#highlights").append(div);
});
// code for appending highlighted data ends here



// data for trendset
const TrendsetData=[
    {
        img:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-1-oneBythree-16Sep2022.jpg"
    },
    {
        img:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-2-oneBythree-16Sep2022.jpg"
    },
    {
        img:"https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-3-oneBythree-16Sep2022.jpg"
    },
];

// code for appending trendsetting data starts here
TrendsetData.forEach(function(el){
    let img=document.createElement("img");
    img.src=el.img;
    document.querySelector("#tr").append(img)
});
// code for appending trendsetting data ends here



// data for activewear
const ActWarData=[
    {
        img:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-1-oneBythree-16Sep2022.jpg"
    },
    {
        img:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-2-oneBythree-16Sep2022.jpg"
    },
    {
        img:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-3-oneBythree-16Sep2022.jpg"
    },
];

// code for appending active wardrobe data starts here
ActWarData.forEach(function(el){
    let img=document.createElement("img");
    img.src=el.img;
    document.querySelector("#aw").append(img);
});
// code for appending active wardrobe data ends here



// data for deal corner
const DealcornerData=[
    {
        img:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/Beckham-Blue-Navy-1000003426336_01-2100.jpg",p:"699",tt:"KAPPA solid Polo Neck T-shirt",
    },
    {
        img:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000008301238-Var89-White-1000008301238-Var89_01-2100.jpg",p:"995",tt:"FAHRENHEIT Solid Slim Fit Crew Neck T-shirt- Pack of 3",
    },
    {
        img:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011177442-Blue-Navy-1000011177442_01-2100.jpg",p:"999",tt:"FAHRENHEIT Men Solid Printed Shirt",
    },
    {
        img:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011178097-Black-Black-1000011178097_01-2100.jpg",p:"1,499",tt:"KAPPA Men Printed Joggers",
    },
    {
        dealimg:"https://lmsin.net/cdn-cgi/image/h=444,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011152454-Blue-LightBlue-1000011152454_01-2100.jpg",p:"717",tt:"FAHRENHEIT Men Striped Polo T-shirt",
    },  
];

// code for appending deal corner data starts here
DealcornerData.forEach(function(el){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.img;
    let price=document.createElement("h4");
    price.innerText=el.p;
    let name=document.createElement("p");
    name.innerText=el.tt;
    div.append(img,price,name);
    document.querySelector("#deal").append(div);
});
// code for appending deal corner data ends here



// data for most loved
const MstLvdData=[
    {
        img:"https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1C-Men-14July2022.jpg"
    },
    {
        img:"https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1D-Men-14July2022.jpg"
    },
];

// code for appending most loved data starts here
MstLvdData.forEach(function(el){
    let img=document.createElement("img");
    img.src=el.img;
    document.querySelector('#mlb').append(img);
});
// code for appending most loved data ends here



// data for essentials
const EssData=[
    {
        img:"https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-A-Men-12Sept2022.jpg"
    },
    {
        img:"https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-B-Men-06Mar2022.jpg"
    },
];

// code for appending essentials data starts here
EssData.forEach(function(el){
    let img=document.createElement("img");
    img.src=el.img;
    document.querySelector("#efy").append(img);
});
// code for appending essentials data ends here