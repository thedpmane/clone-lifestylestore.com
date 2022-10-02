
let btn2=document.getElementById("onebtn");

btn2.addEventListener("click",payNow)
 function payNow(event){
event.preventDefault()
// console.log("yummm")


let Cname=document.getElementById("name").value;
let mobile=document.getElementById("mobile_number").value;
let pin=document.getElementById("pincode").value;
let state=document.getElementById("states").value;
let build=document.getElementById("bulname").value;
let street=document.getElementById("street").value;
let land=document.getElementById("landmark").value;

if(Cname==""||mobile==""||pin==""||state==""||build==""||street==""||land==""){
    alert ("please fill the form")
}
else{

function customerdata(a,b,c,d,e,f,g)
{
   this.Name=a;
   this.MobileNo=b;
   this.pincode=c;
   this.state=d;
   this.bulidname=e;
   this.streetname=f;
   this.landmark=g;
}
let p1= new customerdata(Cname,mobile,pin,state,build,street,land)
console.log(p1)
localStorage.setItem("user_data",JSON.stringify(p1))
alert("order successfuly placed")
}

 } 


 let savbtn= document.getElementById("save")
savbtn.addEventListener("click", savedata)
 function savedata(event)
 {
    event.preventDefault()
    let Cardnumber=document.getElementById("cardnumber").value;
    let Fullname=document.getElementById("cardname").value;
    let Month=document.getElementById("cardmonth").value;
    let Year=document.getElementById("cardYY").value;

    if(Cardnumber==""|| Fullname==""|| Month==""|| Year=="")
    {
        // btn2.disabled=true;
        alert ("please fill the form")
    }
    else{
        function userbankdata(a,b,c,d)
        {
            this.cardnum=a;
            this.fullname=b;
            this.month=c;
            this.year=d;
            
        }
        // btn2.disabled=false;
        
    let p2= new userbankdata(Cardnumber,Fullname,Month,Year)
    console.log(p2)
    localStorage.setItem("userbank_data",JSON.stringify(p2))
    alert( "order successfuly placed")
    

    }
    
   

    
 }









