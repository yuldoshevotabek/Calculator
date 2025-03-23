const btns = document.querySelectorAll('.btn button'),
	clear = document.querySelector('#clear')
console.log(btns)
btns.forEach(item => {
	item.addEventListener('click', () => {
		const text = document.querySelector('#textt')
		text.innerHTML += item.textContent
	})
})
clear.addEventListener('click', () => {
	const text = (document.querySelector('#textt').textContent = '')
})
