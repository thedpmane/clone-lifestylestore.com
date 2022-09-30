import { footer } from '../components/footer.js';

    let footer_div = document.getElementById('footer');
    footer_div.innerHTML = footer();
    
// posts= [
//     {
//       "id": "1",
//       "mainimg": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/Beckham-Red-Red-1000003426336_01-2100.jpg",
//       "img1": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/Beckham-Red-Red-1000003426336_02-2100.jpg",
//       "img2": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/Beckham-Red-Red-1000003426336_03-2100.jpg",
//       "img3": "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/Beckham-Red-Red-1000003426336_04-2100.jpg",
//       "name": "KAPPA Solid Polo Neck T-Shirt",
//       "price": "629",
//       "type": "tshirt",
//       "color": "Red",
//       "fabric": "Polyester Blend",
//       "brand": "KAPPA",
//       "size": "S",
//       "desc": "red tshirt"
//     }
//   ]

let basket_data = JSON.parse(localStorage.getItem("cart_product_info"));
console.log(basket_data)

let data = JSON.parse(localStorage.getItem("clicked_product_info"))



let container = document.getElementById("sdiv1")
const appendData = ()=>{
 
  
    let d1 = document.getElementById("d1");
  let img1 = document.createElement("img");
  img1.src = data[0].mainimg;
  img1.style.width="100%"
  d1.append(img1);


  let d2 = document.getElementById("d2");
  let img2 = document.createElement("img");
  img2.src = data[0].img1;
  img2.style.width="100%"
  d2.append(img2);

  

  let d3 = document.getElementById("d3");
  let img3 = document.createElement("img");
  img3.src = data[0].img2;
  img3.style.width="100%"
  d3.append(img3);




  let d4 = document.getElementById("d4");
  let img4 = document.createElement("img");
  img4.src = data[0].img3;
  img4.style.width="100%"
  d4.append(img4);


  let price = document.getElementById("pr");
  price.innerHTML = "₹ "+data[0].price;
  price.style.color = "black";
  price.style.fontSize = "30px";
  let name = document.getElementById("name");
  name.innerHTML = data[0].name;
  name.style.paddingTop="30px"
  let color = document.getElementById("colo");
  color.innerHTML = "color: "+data[0].color;

  // let sizebtn = document.querySelector(".dsizebtn2");
  // console.log(sizebtn.innerHTML=="M")

}
appendData()

// localStorage.setItem("post_data", JSON.stringify(posts[0]))

let basketbtn = document.getElementById("addto");
basketbtn.style.cursor="pointer"
basketbtn.addEventListener("click", () => {
  basket_data.push(data[0]);
  localStorage.setItem("cart_product_info", JSON.stringify(basket_data));
});