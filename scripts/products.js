
import { footer } from '../components/footer.js';
let footer_div = document.getElementById('footer');
// console.log(footer())
footer_div.innerHTML = footer();
const products_arr = [
    {
      "id": "1",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/Beckham-Red-Red-1000003426336_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/Beckham-Red-Red-1000003426336_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/Beckham-Red-Red-1000003426336_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/Beckham-Red-Red-1000003426336_04-2100.jpg",
      "name": "KAPPA Solid Polo Neck T-Shirt",
      "price": "629",
      "type": "tshirt",
      "color": "Red",
      "fabric": "Polyester Blend",
      "brand": "KAPPA",
      "size": "S",
      "desc": "red tshirt"
    },
    {
      "id": "2",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010259935-Yellow-Mustard-1000010259935_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010259935-Yellow-Mustard-1000010259935_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010259935-Yellow-Mustard-1000010259935_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010259935-Yellow-Mustard-1000010259935_04-2100.jpg",
      "name": "U.S. POLO ASSN. Men Solid Regular Fit Polo T-shirt",
      "price": "949",
      "type": "tshirt",
      "color": "Yellow",
      "fabric": "Cotton",
      "brand": "POLO",
      "size": "M",
      "desc": "yellow tshirt"
    },
    {
      "id": "3",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010436128-Grey-Lightgrey-1000010436128_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010436128-Grey-Lightgrey-1000010436128_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010436128-Grey-Lightgrey-1000010436128_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010436128-Grey-Lightgrey-1000010436128_04-2100.jpg",
      "name": "KAPPA Men Printed Hooded Sweatshirt",
      "price": "999",
      "type": "tshirt",
      "color": "White",
      "fabric": "Cotton Blend",
      "brand": "KAPPA",
      "size": "L",
      "desc": "full sleeve tshirt"
    },
    {
      "id": "4",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010640156-Green-1000010640156_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010640156-Green-1000010640156_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010640156-Green-1000010640156_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010640156-Green-1000010640156_04-2100.jpg",
      "name": "PEPE JEANS Men Checked Regular Fit Casual Shirt",
      "price": "1319",
      "type": "shirt",
      "color": "Green",
      "fabric": "Cotton",
      "brand": "PEPE JEANS",
      "size": "S",
      "desc": "checked shirt"
    },
    {
      "id": "5",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179771-Orange-Coral-1000011179771_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179771-Orange-Coral-1000011179771_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179771-Orange-Coral-1000011179771_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011179771-Orange-Coral-1000011179771_04-2100.jpg",
      "name": "SmileyWorld Men Printed Trackpants",
      "price": "1049",
      "type": "trackpant",
      "color": "Orange",
      "fabric": "Cotton",
      "brand": "SmileyWorld",
      "size": "M",
      "desc": "orange trackpant"
    },
    {
      "id": "6",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011195454-Black-Black-1000011195454_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011195454-Black-Black-1000011195454_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011195454-Black-Black-1000011195454_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011195454-Black-Black-1000011195454_04-2100.jpg",
      "name": "CODE Men Printed Regular Fit Polo T-shirt",
      "price": "899",
      "type": "tshirt",
      "color": "Black",
      "fabric": "Cotton",
      "brand": "CODE",
      "size": "M",
      "desc": "black tshirt"
    },
    {
      "id": "7",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010698953-Blue-1000010698953_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010698953-Blue-1000010698953_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010698953-Blue-1000010698953_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010698953-Blue-1000010698953_04-2100.jpg",
      "name": "PEPE JEANS Men Striped Regular Fit Polo T-shirt",
      "price": "1019",
      "type": "tshirt",
      "color": "Blue",
      "fabric": "Cotton",
      "brand": "PEPE JEANS ",
      "size": "M",
      "desc": "blue t"
    },
    {
      "id": "8",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010618263-Black-1000010618263_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010618263-Black-1000010618263_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010618263-Black-1000010618263_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010618263-Black-1000010618263_04-2100.jpg",
      "name": "US POLO Men Printed Track Pants",
      "price": "749",
      "type": "pant",
      "color": "Black",
      "fabric": "Polyester",
      "brand": "POLO",
      "size": "M",
      "desc": "black trackpant"
    },
    {
      "id": "9",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011178135-Green-Green-1000011178135_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011178135-Green-Green-1000011178135_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011178135-Green-Green-1000011178135_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011178135-Green-Green-1000011178135_04-2100.jpg",
      "name": "MELANGE Men Printed Band Collar Waistcoat",
      "price": "1049",
      "type": "shirt",
      "color": "Green",
      "fabric": "Polyester",
      "brand": "MELANGE",
      "size": "M",
      "desc": "waistcoat"
    },
    {
      "id": "10",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011177751-Yellow-Yellow-1000011177751_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011177751-Yellow-Yellow-1000011177751_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011177751-Yellow-Yellow-1000011177751_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011177751-Yellow-Yellow-1000011177751_04-2100.jpg",
      "name": "MELANGE Men Embroidered Band Collar Kurta",
      "price": "1049",
      "type": "top",
      "color": "Yellow",
      "fabric": "Cotton",
      "brand": "MELANGE",
      "size": "XS",
      "desc": "yellow kurta "
    },
    {
      "id": "11",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920418-Red-WINE-1000010920418_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920418-Red-WINE-1000010920418_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920418-Red-WINE-1000010920418_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010920418-Red-WINE-1000010920418_04-2100.jpg",
      "name": "MELANGE Men Solid Regular Fit Short Kurta",
      "price": "559",
      "type": "top",
      "color": "Red",
      "fabric": "Cotton",
      "brand": "MELANGE",
      "size": "XL",
      "desc": "red kurta"
    },
    {
      "id": "12",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011784753-White-White-1000011784753_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011784753-White-White-1000011784753_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011784753-White-White-1000011784753_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011784753-White-White-1000011784753_04-2100.jpg",
      "name": "ADIDAS Men Graphic Logo Printed Slim Fit T-shirt",
      "price": "1399",
      "type": "top",
      "color": "White",
      "fabric": "Cotton",
      "brand": "ADIDAS",
      "size": "M",
      "desc": "white t"
    },
    {
      "id": "13",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011915761-Grey-DarkGrey-1000011915761_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011915761-Grey-DarkGrey-1000011915761_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011915761-Grey-DarkGrey-1000011915761_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011915761-Grey-DarkGrey-1000011915761_04-2100.jpg",
      "name": "ADIDAS Men Solid Sports Track Pants",
      "price": "2299",
      "type": "bottom",
      "color": "Grey",
      "fabric": "Cotton",
      "brand": "ADIDAS",
      "size": "M",
      "desc": "black trackpant"
    },
    {
      "id": "14",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011873822-Black-Black-1000011873822_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011873822-Black-Black-1000011873822_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011873822-Black-Black-1000011873822_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011873822-Black-Black-1000011873822_04-2100.jpg",
      "name": "PUMA Men Solid Zip-Up Sweatshirt",
      "price": "3499",
      "type": "top",
      "color": "Black",
      "fabric": "Cotton Blend",
      "brand": "PUMA",
      "size": "S",
      "desc": "tshirt"
    },
    {
      "id": "15",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011873812-Red-Red-1000011873812_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011873812-Red-Red-1000011873812_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011873812-Red-Red-1000011873812_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011873812-Red-Red-1000011873812_04-2100.jpg",
      "name": "PUMA Men Solid High Neck Sweatshirt",
      "price": "3499",
      "type": "top",
      "color": "Red",
      "fabric": "Cotton Blend",
      "brand": "PUMA",
      "size": "M",
      "desc": "sweatshirt"
    },
    {
      "id": "16",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010652899-Yellow-1000010652899_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010652899-Yellow-1000010652899_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010652899-Yellow-1000010652899_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010652899-Yellow-1000010652899_04-2100.jpg",
      "name": "PUMA Men Solid Zip Sweatshirt",
      "price": "2099",
      "type": "top",
      "color": "Yellow",
      "fabric": "Cotton Blend",
      "brand": "PUMA",
      "size": "M",
      "desc": "sweatshirt"
    },
    {
      "id": "17",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010949894-Orange-Orange-1000010949894_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010949894-Orange-Orange-1000010949894_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010949894-Orange-Orange-1000010949894_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010949894-Orange-Orange-1000010949894_04-2100.jpg",
      "name": "LEVI'S Men Solid Hooded Sweatshirt",
      "price": "2889",
      "type": "top",
      "color": "Orange",
      "fabric": "Cotton Blend",
      "brand": "LEVI'S",
      "size": "M",
      "desc": "shirt"
    },
    {
      "id": "18",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010705442-Blue-1000010705442_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010705442-Blue-1000010705442_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010705442-Blue-1000010705442_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010705442-Blue-1000010705442_04-2100.jpg",
      "name": "PUMA Men Solid Elasticated Joggers",
      "price": "1399",
      "type": "bottom",
      "color": "Blue",
      "fabric": "Cotton",
      "brand": "PUMA",
      "size": "M",
      "desc": "trackpant"
    },
    {
      "id": "19",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010705447-Green-1000010705447_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010705447-Green-1000010705447_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010705447-Green-1000010705447_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010705447-Green-1000010705447_04-2100.jpg",
      "name": "PUMA Men Solid Track Pants",
      "price": "1399",
      "type": "bottom",
      "color": "Green",
      "fabric": "Cotton",
      "brand": "PUMA",
      "size": "M",
      "desc": "trackpant"
    },
    {
      "id": "20",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011165825-Black-Black-1000011165825_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011165825-Black-Black-1000011165825_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011165825-Black-Black-1000011165825_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011165825-Black-Black-1000011165825_04-2100.jpg",
      "name": "WRANGLER Men Printed Crew Neck T-Shirt",
      "price": "909",
      "type": "top",
      "color": "Black",
      "fabric": "Cotton",
      "brand": "WRANGLER",
      "size": "M",
      "desc": "shirt"
    },
    {
      "id": "21",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011165813-Grey-Anthramlng-1000011165813_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011165813-Grey-Anthramlng-1000011165813_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011165813-Grey-Anthramlng-1000011165813_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011165813-Grey-Anthramlng-1000011165813_04-2100.jpg",
      "name": "WRANGLER Men Graphic Printed Crew Neck Slim Fit T-shirt",
      "price": "1399",
      "type": "top",
      "color": "Grey",
      "fabric": "Cotton",
      "brand": "WRANGLER",
      "size": "M",
      "desc": "shirt"
    },
    {
      "id": "22",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011084652-Blue-1000011084652_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011084652-Blue-1000011084652_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011084652-Blue-1000011084652_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011084652-Blue-1000011084652_04-2100.jpg",
      "name": "WRANGLER Men Skinny Fit Faded Jeans",
      "price": "2589",
      "type": "top",
      "color": "Blue",
      "fabric": "Cotton Blend",
      "brand": "WRANGLER",
      "size": "M",
      "desc": "pant"
    },
    {
      "id": "23",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011881308-Green-Olive-1000011881308_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011881308-Green-Olive-1000011881308_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011881308-Green-Olive-1000011881308_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011881308-Green-Olive-1000011881308_04-2100.jpg",
      "name": "WRANGLER Men Camouflage Print Slim Fit Crew T-Shirt",
      "price": "1599",
      "type": "bottom",
      "color": "Green",
      "fabric": "Cotton",
      "brand": "WRANGLER ",
      "size": "M",
      "desc": "pant"
    },
    {
      "id": "24",
      "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010758764-Blue-MidStone-1000010758764_01-2100.jpg",
      "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010758764-Blue-MidStone-1000010758764_02-2100.jpg",
      "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010758764-Blue-MidStone-1000010758764_03-2100.jpg",
      "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010758764-Blue-MidStone-1000010758764_04-2100.jpg",
      "name": "WRANGLER Men Stonewashed Slim Tapered Jeans",
      "price": "2099",
      "type": "bottom",
      "color": "Blue",
      "fabric": "Cotton",
      "brand": "WRANGLER",
      "size": "XL",
      "desc": "pant"
    }
  ]
let lsd = JSON.parse(localStorage.getItem("dproducts")) || []

localStorage.setItem("dproducts",JSON.stringify(products_arr))

// const getdata = async () => {
//     try {
//         let res = await fetch(`http://localhost:3000/posts`);
//         let data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getdata()
let append_div = document.getElementById("dappend_div")
const Append_Produts = (data,location) => {
    let total_product_show = document.getElementById("dtotal_count_product");
    total_product_show.innerHTML=data.length+"    Products"
    location.innerHTML=null
    data.forEach((el) => {

        let one_product_div = document.createElement("div");
        one_product_div.className="done_product_div"
        //one_product_div.style.position="relative"
        let img_div = document.createElement("div");
        img_div.className="dimg_div"
        let img = document.createElement("img");
        img.src = el.mainimg;
        img_div.append(img);


        let price_div = document.createElement("div");
        price_div.className="dprice_div"
        let price = document.createElement("p");
        price.innerText = "₹" + el.price;
        let pricecut_lable = document.createElement("label");
        pricecut_lable.innerHTML = "<del>₹5000</del>"
        price_div.append(price,pricecut_lable);

        let name_div = document.createElement("div");
        let name = document.createElement("p")
        name.innerText = el.name;
        name_div.className = "dname_div";
        name_div.append(name);

        let combo_of_size_color_div = document.createElement("div");
        combo_of_size_color_div.id="dcombo_of_size_color_div"

        let color_div = document.createElement("div");
        let color = document.createElement("p")
        color.innerText = el.color;
        let color_img=document.createElement("img");
        color_img.src=el.mainimg
        color_div.append(color_img,color);
        let size_div = document.createElement("div");
        let size = document.createElement("p")
        size.innerText = "size  "+el.size
        size_div.append(size)
        combo_of_size_color_div.append(color_div,size_div)
        let addtocart_btn_div = document.createElement("div");
        let addtocart_btn = document.createElement("button");
        addtocart_btn.innerHTML = "ADD TO BASKET";
        addtocart_btn_div.append(addtocart_btn);
        addtocart_btn.className="addtocart_btn"
        let random_div = document.createElement("div");
        
        one_product_div.append(img_div,price_div,name_div,combo_of_size_color_div,addtocart_btn_div)
        location.append(one_product_div)
        
    });
}


Append_Produts(lsd, append_div);

// const selected = document.querySelector(".selected");
// const optionsContainer = document.querySelector(".options-container");

// const optionsList = document.querySelectorAll(".option");

// selected.addEventListener("click", () => {
//   optionsContainer.classList.toggle("active");
// });

// optionsList.forEach((o) => {
//   o.addEventListener("change", () => {
//     selected.innerHTML = o.querySelector("label").innerHTML;
//       let selected_value = selected.innerHTML;
//       if (selected_value) {
//           let filterdata = lsd.filter(function (el) {
        
//               return el.color === selected_value
              
//           })
//           if (filterdata.length === 0) {
//             alert("NO Result Found")
//         }
//         Append_Produts(filterdata, append_div);
//       }
//     optionsContainer.classList.remove("active");
//   });
// });

let bt = document.querySelector(".selected");
  bt.addEventListener("click", () => {
    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");

    const optionsList = document.querySelectorAll(".option");

    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
    });

    optionsList.forEach((o) => {
      o.addEventListener("change", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        let selected_value = selected.innerHTML;
        if (selected_value) {
          let filterdata = lsd.filter(function (el) {
            return el.color === selected_value;
          });
          if (filterdata.length === 0) {
            alert("NO Result Found");
          }
          Append_Produts(filterdata, append_div);
        }
        optionsContainer.classList.remove("active");
      });
    });
  });
  let btns = document.querySelector(".selected2");
  btns.addEventListener("click", () => {
    const selected2 = document.querySelector(".selected2");
    const optionsContainer2 = document.querySelector(".options-container2");

    const optionsList2 = document.querySelectorAll(".option2");

    selected2.addEventListener("click", () => {
      optionsContainer2.classList.toggle("active");
    });

    optionsList2.forEach((k) => {
      k.addEventListener("click", () => {
        selected2.innerHTML = k.querySelector("label").innerHTML;
        let selected_va = selected2.innerHTML;

        if (selected_va) {
          let filterdata = lsd.filter(function (el) {
           
            return el.fabric === selected_va;
          });
          if (filterdata.length === 0) {
            alert("NO Result Found");
            }
            
          Append_Produts(filterdata, append_div);
        }
        optionsContainer2.classList.remove("active");
      });
    });
  });


  let btn3 = document.querySelector(".selected3");
  btn3.addEventListener("click", () => {
    const selected3 = document.querySelector(".selected3");
    const optionsContainer3 = document.querySelector(".options-container3");

    const optionsList3 = document.querySelectorAll(".option3");

    selected3.addEventListener("click", () => {
      optionsContainer3.classList.toggle("active");
    });

    optionsList3.forEach((k) => {
      k.addEventListener("click", () => {
        selected3.innerHTML = k.querySelector("label").innerHTML;
        let selected_va = selected3.innerHTML;

        if (selected_va) {
          let filterdata = lsd.filter(function (el) {
           
            return el.fabric === selected_va;
          });
          if (filterdata.length === 0) {
            alert("NO Result Found");
            }
            
          Append_Produts(filterdata, append_div);
        }
        optionsContainer3.classList.remove("active");
      });
    });
  });