const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const windChillcon = document.querySelector("#windchill")
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified
let windChill = 35.74 + 0.6215*(86) - 35.75*(Math.pow(5,0.16)) + 0.4275*(86)*(Math.pow(5,0.16))
windChill  = (windChill - 32) * 5/9
windChillcon.innerHTML = "<li id='windchill'><span>Wind Chill:</span> "+parseInt(windChill)+"°C</li>"