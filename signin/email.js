function useremail(e){
    event.preventDefault()
    window.location.href="./data.html"
    
    // console.log("nandini")
    let mail= document.getElementById("email").value
    
    localStorage.setItem("mail",JSON.stringify(mail))

    
    

}