function checkPassword(){
    
    let pw=document.getElementById("password").value;
    let cpw=document.getElementById("confirmpassword").value;
    if (pw!=cpw){
        alert("Please check if the password matches.")
    }
    
}