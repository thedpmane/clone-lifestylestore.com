let x= document.getElementById("goback");
x.addEventListener("click", ()=>{
    goback()
    
})

let y=document.getElementById("continue");
y.addEventListener("click",()=>{
    cont()
})


const goback=()=>
{
    window.location.href="email.html"
}