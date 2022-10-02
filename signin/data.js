let x= document.getElementById("goback");
x.addEventListener("click", ()=>{
    goback()
    
})

// let y=document.getElementById("continue");
// y.addEventListener("click",()=>{
//     // cont()
// })


const goback=()=>
{
    window.location.href="email.html"
}

let btn=document.getElementById("continue")
btn.addEventListener("click",userdata)

function userdata(event){
    event.preventDefault()
    let Name=document.getElementById("first").value;
let last=document.getElementById("last").value
    function obj(n,m)
    {
    this.name=n;
    this.lastname=m;
    }
    let p1= new obj(Name,last)
    // console.log(Name,last)
    localStorage.setItem("User_data", JSON.stringify(p1))
    window.location.href="/index.html"
}


