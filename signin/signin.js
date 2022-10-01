function mobile_Num(event){
    event.preventDefault()

    window.location.href="email.html" 
    let data=JSON.parse(getItem("phone"))||[]

    
    let numb= document.getElementById("mobile_number").value
    data.push(numb)
    
    localStorage.setItem("phone",JSON.stringify(data))
  
    

}