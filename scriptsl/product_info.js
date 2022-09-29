
posts= [
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
    }
  ]

localStorage.setItem("post_data", JSON.stringify(posts[0]))
let data = JSON.parse(localStorage.getItem("post_data"))
console.log(data)

let container = document.getElementById("sdiv1")
const appendData = ()=>{
  container.innerHTML = null;
  data.map((el)=>{
  let d1 = document.getElementById("d1");
  let main = document.createElement("img");
  main.src = el.mainimg;
  d1.append(main);

  container.append(d1)
  });
}