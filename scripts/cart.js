import { footer } from '../components/footer.js';
let footer_div = document.getElementById('footer');
// console.log(footer())
footer_div.innerHTML = footer();

let lsd = JSON.parse(localStorage.getItem("cart_product_info"));
//let maindiv = document.getElementById("dleftdiv");
let laxmidiv = document.getElementById("sdiv1");

//console.log(lsd);
let total = 0;
const append = () => {
  lsd.forEach((el) => {
    let deach_product = document.createElement("div");
    deach_product.className = "each_product";

    let dupperpart_div = document.createElement("div");
    dupperpart_div.id = "upperpart_div";

    let ddimgshow = document.createElement("div");
    ddimgshow.id = "dimgshow";

    let dimg = document.createElement("img");
    dimg.src = el.mainimg;

    ddimgshow.append(dimg);

    let dddetailshow = document.createElement("div");
    dddetailshow.id = "ddetailshow";
    let ddname = document.createElement("p");
    ddname.innerText = el.name;

    let price = document.createElement("p");
    price.innerText = "₹" + el.price;
    let color = document.createElement("p");
    color.innerText = "Colour: " + el.color;
    let size = document.createElement("p");
    size.innerText = "Size: " + el.size;

    let middlepart = document.createElement("div");
    middlepart.id = "dmiddle";

    let label = document.createElement("label");
    label.innerHTML =
      '<i class="fa-solid fa-calendar-days"></i> Delivery in 5-7 days';

    let qty_div = document.createElement("div");
    qty_div.id = "dqty_div";
    qty_div.innerHTML =
      'Qty: 1<i style="color: orange; margin-left: 5px" class="fa-sharp fa-solid fa-sort-down"></i>';

    middlepart.append(label, qty_div);

    dddetailshow.append(ddname, price, color, size);

    let hr = document.createElement("hr");

    let dfooterbtn = document.createElement("div");
    dfooterbtn.id = "dfooterbtn";

    let btn1 = document.createElement("button");
    btn1.innerHTML = "Remove";
    let btn2 = document.createElement("button");
    btn2.innerHTML = "Move to favourites";
    dfooterbtn.append(btn1, btn2);
    //console.log(el.name)
    deach_product.append(dupperpart_div, middlepart, hr, dfooterbtn);
    dupperpart_div.append(ddimgshow, dddetailshow);
    //maindiv.append(deach_product);
    laxmidiv.append(deach_product)
    let counter = document.getElementById("prod");
    counter.style.paddingLeft="30px"
    counter.innerHTML = lsd.length + " Products";


    total += el.price;
   

  });
  //console.log(total)
  let without_discount_price = document.getElementById("d2");
  without_discount_price.innerHTML = "₹" + (total + 2599);

  let discount_price= document.getElementById("d4")
  discount_price.innerHTML = "- ₹" + 2599;
  
  let total_priceshow = document.getElementById("dd2");
  total_priceshow.innerHTML = "₹" + total;
};
append();