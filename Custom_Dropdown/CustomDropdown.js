
//Setup array for buttons and contents
//You could only make one dropdown or as many as u want 

const buttonsArr = ["dropButton01","dropButton02","dropButton03"];
const contentsArr = ["dropContent01","dropContent02","dropContent03"];

//Setup EventListeners for each button 
//If you have alot you could setup a FOR loop to handle the EventListeners

document.getElementById(buttonsArr[0]).addEventListener("click", function() {
	dropButtonToggle(buttonsArr[0],contentsArr[0]);});

document.getElementById(buttonsArr[1]).addEventListener("click", function() {
	dropButtonToggle(buttonsArr[1],contentsArr[1])});

document.getElementById(buttonsArr[2]).addEventListener("click", function() {
	dropButtonToggle(buttonsArr[2],contentsArr[2])});

//Setup options for each dropdown again as many or as few as you want

let genderOptions = ["American","Canadian","British","Brazilian","French","German","Japanese","Korean","Mexican","Italian","Polish"];
let mediaOptions = ["Amazon Prime","Netflix","Hulu","Sling","Disney Plus","Veoh","Youtube"];
let cuisineOptions = ["American","Italian","French","German","Polish","Mediteranian","Middle-Eastern","Vietnamese","Chinese","Japanese","Korean"];

loadDropdown(contentsArr[0],genderOptions);
loadDropdown(contentsArr[1],mediaOptions);
loadDropdown(contentsArr[2],cuisineOptions);


function dropButtonToggle(button,content) {
	document.getElementById(content).classList.toggle("_show02"); //opens hidden content
	document.getElementById(button).classList.toggle("_show03"); //changes css to make dropdown look like one element
	window.addEventListener("mousedown", function() {
		if(event.target != document.getElementById(button)) { //if you click anywhere but the button
			document.getElementById(content).classList.remove("_show02"); //opens hidden content
			document.getElementById(button).classList.remove("_show03"); 
			console.log(event.target.classList[0]); //classname is first element in classList
			if (event.target.classList[0] == "optionSelect") { //if event target has classname "optionSelect"
				document.getElementById(button).innerText = event.target.innerText;
			}
		}
	},{once:true});
}

//loads the options into the #dropContent you see in the html

function loadDropdown(parentElement,optionsArray) {

	let dropContent = document.getElementById(parentElement); //grabs dropContent div from html
	let OptionsList = optionsArray;

	//adding elemtns like this is safer then .innerHTML
	//adds a div for each option in the contentsArr
	for (item in OptionsList) {
		let option = document.createElement("div"); 
		option.innerText = OptionsList[item];
		option.classList.add("optionSelect");
		dropContent.appendChild(option);
	}
}
