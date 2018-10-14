fetch('https://api.punkapi.com/v2/beers/')
.then(result => {
	console.log(result);
	return result.json();
}).then(data => {

})
.catch(error => {
	console.log(error);
});

