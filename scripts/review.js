const lastModDate = document.querySelector("#lastModified")
const currentYear = document.querySelector("#currentyear") 
const today = new Date()
currentYear.innerText = today.getFullYear()
lastModDate.innerText = "Last modification :"+ document.lastModified
const countSubmition = document.querySelector("#count");

let numSubmition = Number(window.localStorage.getItem("numSubmition-ls")) || 0;

if (numSubmition !== 0) {
	countSubmition.textContent = `You have successfully submited ${numSubmition} reviews`;
} else {
	countSubmition.textContent = `You have successfully submited 1 review`;
}

numSubmition++;

localStorage.setItem("numSubmition-ls", numSubmition);
