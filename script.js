document.onready


const $ = document;
let request = new XMLHttpRequest();
const countent = $.getElementById('marginForCountent');
const searchText = $.getElementById('searchText');
const btnSearch = $.getElementById('btnSearch');



request.onreadystatechange = function() {
	//console.log(this.readyState);
	if (this.readyState == 4) {
		if (this.status == 200) showDataOmPage(request);	
		else console.log(`${request.status}: ${request.statusText}`);
	} 
};
request.open('GET', `https://api.punkapi.com/v2/beers/`);
request.send();




function createBeer(data) {
	let blockWraper = $.createElement('div');
	let textDiv = $.createElement('div');
	let br = $.createElement('br');
	let title = $.createElement('h3');
	let description = $.createElement('p');
	let img = $.createElement('img');

	blockWraper.className = 'countentBlock';
	blockWraper.id = data['name'];
	textDiv.className = 'forFlex';
	textDiv.id = data['name'];
	img.className = 'img';
	img.id = data['name'];
	img.src = data['image_url'];
	description.id = data['name'];

	title.textContent = data['name'];
	description.textContent = data['description'];
	
	textDiv.appendChild(title);
	textDiv.appendChild(description);
	blockWraper.appendChild(textDiv);
	blockWraper.appendChild(img);
	return blockWraper;
}


function showDataOmPage(request) {
	let json = JSON.parse(request.response);
	console.log(json);
	let fragment = $.createDocumentFragment();
	for (let i = 0; i < json.length; i++) {
		let div = createBeer(json[i]);		
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







