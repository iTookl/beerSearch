const wrap = $.getElementById('marginForCountent');
const countentBlock = $.querySelector('.forFlex');


/*EVENT HERE*/
wrap.addEventListener('click', click);
function click(event) {
	/*In this function we check which block has been clicked*/
	let json = JSON.parse(request.response);
	for (let i = 0; i < json.length; i++) {
		if (event.target.id === json[i]['name']) {
			console.log(json[i]['name']);
			wrap.innerHTML = '';
			/*variebles(json[i]);*/
			let beer = createBeer(json[i]);
			wrap.appendChild(beer);
		}
	}
}


function createElements(type, prototypes) {
	const element = $.createElement(type);
	Object.keys(prototypes).forEach(key => element[key] = prototypes[key]);
	Object.keys(prototypes).forEach(function (key) { return  element[key] = prototypes[key]});
	return element;
}

function createBeer(data) {
	const elements = [];
	/*elements.push(createElements('div', {className: 'blockR'}));*/
	elements.push(createElements('h1', {innerHTML: data['name']}));
	elements.push(createElements('p', {innerHTML: data['description']}));
	elements.push(createElements('p', {innerHTML: data['contribute_by']}));
	elements.push(createElements('p', {innerHTML: data['brewers_tips']}));
	elements.push(createElements('img', {src: data['img.url']}));

	const frag = $.createDocumentFragment();
	const blockWithBeer = $.createElement('div');
	blockWithBeer.className = "countentBlock";
	elements.forEach(elm => blockWithBeer.appendChild(elm));
	return blockWithBeer;
}


