window.addEventListener('DOMContentLoaded', function() {
	/*При клике на кнопку “создать” подложка,
	*модальное окно и главная страница под ним исчезают,
	*появляется страница кастомизации кандидата.
	*(Эта страница должна иметь display: flex для правильного отображения, 
	*а ее потомки - block)
	*/
	let btnCreate = document.getElementById('popup-btn'),
			windowOverlay = document.getElementsByClassName('overlay')[0],
			mainBlock = document.getElementsByClassName('main')[0],
			customBlock = document.getElementsByClassName('custom')[0],
			info = document.getElementsByClassName('custom-info')[0],
			char = document.getElementsByClassName('custom-char')[0],
			style = document.getElementsByClassName('custom-style')[0];
	btnCreate.addEventListener('click', function(event) {
		windowOverlay.style.display = 'none';
		mainBlock.style.display = 'none';
		customBlock.style.display = 'flex';
		info.style.display = 'block';
		char.style.display = 'block';
		style.style.display = 'block';
	});
	console.log(btnCreate);
	console.log(windowOverlay);
	console.log(windowCustom);

});