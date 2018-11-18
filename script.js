let request = new XMLHttpRequest();
const countent = document.getElementById(/*'countent'*/ 'marginForCountent');
const searchText = document.getElementById('searchText');
const btnSearch = document.getElementById('btnSearch');

request.open('GET', `https://api.punkapi.com/v2/beers/`, false);
request.send();


function data() {
	checkForErrors(request);
	showDataOmPage(request);
}
data();
function checkForErrors(request) {
	if(request.status != 200) {
		console.log(`${request.status}: ${request.statusText}`);
		return;
	}
}
function showDataOmPage(request) {
	let json = JSON.parse(request.response);

	console.log(json);
	let fragment = document.createDocumentFragment();
	for (let i = 0; i < json.length; i++) {
		let div = document.createElement('div');
		let secondDiv = document.createElement('div');
		let br = document.createElement('br');
		let title = document.createElement('h3');
		let description = document.createElement('p');
		let img = document.createElement('img');

		div.className = 'countentBlock';
		secondDiv.className = 'forFlex';
		img.src = json[i]['image_url'];
		img.className = 'img';

		title.textContent = json[i]['name'];
		description.textContent = json[i]['description'];
		
		secondDiv.appendChild(title);
		secondDiv.appendChild(description);
		div.appendChild(secondDiv);
		div.appendChild(img);
		fragment.appendChild(div);	
	}
	countent.appendChild(fragment);
}




btnSearch.addEventListener('click', click);
function click() {
	let json = JSON.parse(request.response);
	let found = json.find(function(obj) {
		return obj.name === searchText.value;
	});
	console.log(found);
	searchText.value = '';
}

