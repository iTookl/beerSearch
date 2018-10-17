let request = new XMLHttpRequest();
const countent = document.getElementById('countent');


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
	let num = (Math.round(json.length / 4));

	/*for (let i = 0; i < json.length; i++) {
		const createRow = document.createElement('div');
		createRow.className = 'row';
		countent.appendChild(createRow);
	}*/

	for (let x = 0; x < num; x++) {
		const createRow = document.createElement('div');
		createRow.className = 'row';
		countent.appendChild(createRow);

		for (let i = 0; i < 4; i++) {
			const createBlock = document.createElement('div');
			createRow.appendChild(createBlock);
			createBlock.className = 'countentBlock';
		}

		let check = document.querySelector('.countentBlock');
		console.log();
	}

	/*for (let i = 0; i < json.length; i++) {
		const createTitle = document.createElement('h2');
		createTitle.innerHTML = 'title';
	}

	console.log(json);*/
	}

data();