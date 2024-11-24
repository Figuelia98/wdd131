const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified
const menu = document.querySelector("#menuList")
const butMenu = document.querySelector(".menu")
var x = window.matchMedia("(max-width:800px)") 
x.onchange = (e)=>{
    if(e.matches){
        menu.style.display ="none"; 
    }
    else{
        menu.style.display ="flex"; 
    }
}

butMenu.addEventListener("click",function(){
  
    if(menu.style.display == "none"){
        menu.style.display ="grid"
    }
    else{
        menu.style.display = "none"
    }

})