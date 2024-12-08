const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified
const menu = document.querySelector("#menuList")
const butMenu = document.querySelector(".menu")
const container = document.querySelector(".grid-container")
const oldTemple = document.querySelector("#Old")
const home = document.querySelector("#Home")
const newTemple = document.querySelector("#New")
const smallTemple = document.querySelector("#Small")
const largeTemple = document.querySelector("#Large")
const title = document.querySelector("#title")
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
     templeName: "Manhattan New York",
      location: "Manhattan, New York",
      dedicated: "2004, June, 7",
      area: 20630,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-40080-main.jpg"
    },
    {
        templeName: "Cebu City Philippines",
        location: "Cebu City, Philippines",
        dedicated: "2012, June, 13",
        area: 29556,
        imageUrl:
         "https://churchofjesuschristtemples.org/assets/img/temples/_temp/133-Cebu-City-Philippines-Temple.jpg"
       },
       {
        templeName: "Dallas Texas",
        location: "Dallas Texas",
        dedicated: "1984, October, 19-24",
        area: 29556,
        imageUrl:
         "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg"
       },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
  ];
  
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

 function displayTemple(temples){
    temples.forEach((temple)=>{
        container.innerHTML = container.innerHTML + `<figure> <div><figcaption>${temple.templeName}</figcaption> <ul> <li>Location: ${temple.location}</li> <li>Dedicated: ${temple.dedicated}</li> <li>Size: ${temple.area} Square feet</li></ul> </div><img src="${temple.imageUrl}" alt="${temple.templeName}" > </figure>`
      })
 }
 displayTemple(temples)
 
 home.addEventListener("click",()=>{
    container.innerHTML = ""
    title.innerText = "Home"
    displayTemple(temples)
 })
 
 oldTemple.addEventListener("click",()=>{
    container.innerHTML = ""
    title.innerText = "Old"
    const newTemple = temples.filter((temple)=>{
        const dedicated = temple.dedicated.substring(0,4)
        return parseInt(dedicated) < 1900
    })
    displayTemple(newTemple)
 })
 newTemple.addEventListener("click",()=>{
    container.innerHTML = ""
    title.innerText = "New"
    const newTemple = temples.filter((temple)=>{
        const dedicated = temple.dedicated.substring(0,4)
        return parseInt(dedicated) > 2000
    })
    displayTemple(newTemple)
 })
 smallTemple.addEventListener("click",()=>{
    container.innerHTML = ""
    title.innerText = "Small"
    const newTemple = temples.filter((temple)=>{
        const area = temple.area
        return parseInt(area) < 10000
    })
    displayTemple(newTemple)
 })
 largeTemple.addEventListener("click",()=>{
    container.innerHTML = ""
    title.innerText = "Large"
    const newTemple = temples.filter((temple)=>{
        const area = temple.area
        return parseInt(area) > 90000
    })
    displayTemple(newTemple)
 })






