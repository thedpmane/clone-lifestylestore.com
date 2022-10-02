function mobile_Num(event){
    event.preventDefault()

    window.location.href="email.html" 
    // let data=JSON.parse(getItem("phone"))||[]

    // let mail= document.getElementById("email").value
    
    // localStorage.setItem("mail",JSON.stringify(mail))


    
    let numb= document.getElementById("mobile_number").value
    // data.push(numb)
    
    localStorage.setItem("phone",JSON.stringify(numb))
  
    

}