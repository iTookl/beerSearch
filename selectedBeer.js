const wrap = document.getElementById('marginForCountent');
const countentBlock = document.querySelector('.forFlex');

wrap.addEventListener('click', click);
function click(event) {
	countentBlock.childNodes.stopPropagation;
	console.log(event.target);
 }