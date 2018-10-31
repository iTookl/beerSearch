let request = new XMLHttpRequest();
const countent = document.getElementById(/*'countent'*/ 'marginForCountent');


request.open('GET', `https://api.punkapi.com/v2/beers/`, false);
request.send();



function data() {
	/*CHECK ERRORS*/
	if(request.status != 200) {
		console.log(`${request.status}: ${request.statusText}`);
		return;
	}
	/*CHECK ERRORS END*/




	let json = JSON.parse(request.response);
	console.log(json);

	let fragment = document.createDocumentFragment();
	for (let i = 0; i < json.length; i++) {
		let div = document.createElement('div');
		let br = document.createElement('br');
		let title = document.createElement('h2');
		let description = document.createElement('p');
		let img = document.createElement('img');


		div.className = 'countentBlock';
		img.src = json[i]['image_url'];
		img.className = 'img';

		title.textContent = json[i]['name'];
		description.textContent = json[i]['description'];
		
		div.appendChild(title);
		div.appendChild(description);
		div.appendChild(img);
		fragment.appendChild(div);	
	}
	countent.appendChild(fragment);
}
data();