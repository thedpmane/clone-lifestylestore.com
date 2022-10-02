
let phoneno= JSON.parse(localStorage.getItem("phone_number"))



function mobile_Num(event){
    event.preventDefault()
    let numb= document.getElementById("mobile_number").value

   
    // let data=JSON.parse(getItem("phone"))||[]

    // let mail= document.getElementById("email").value
    
    // localStorage.setItem("mail",JSON.stringify(mail))
    if(phoneno==numb){
        window.location.href="/index.html"
    }
    else{
        localStorage.setItem("phone_number",JSON.stringify(numb))
        window.location.href="email.html" 
    }


    
   
    // data.push(numb)
    
    
  
    

}