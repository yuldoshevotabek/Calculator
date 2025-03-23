const btns = document.querySelectorAll('.btn button'),
	clear = document.querySelector('#clear'),
	plus = document.querySelector('#plus'),
	teng = document.querySelector('.bor'),
	minus = document.querySelector('#minus'),
	boluv = document.querySelector('#boluv'),
	kvadrat = document.querySelector('.kvadrat'),
	foiz = document.querySelector('.foiz')
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
plus.addEventListener('click', () => {
	window.ham = document.querySelector('#textt').textContent
	const text = (document.querySelector('#textt').textContent = '+')
})
minus.addEventListener('click', () => {
	window.ham = document.querySelector('#textt').textContent
	const text = (document.querySelector('#textt').textContent = '-')
})
boluv.addEventListener('click', () => {
	window.ham = document.querySelector('#textt').textContent
	const text = (document.querySelector('#textt').textContent = '/')
})
kvadrat.addEventListener('click', () => {
	window.ham = document.querySelector('#textt').textContent
	const text = (document.querySelector('#textt').textContent = 'x')
})
foiz.addEventListener('click', () => {
	window.ham = document.querySelector('#textt').textContent
	const text = (document.querySelector('#textt').textContent = '%')
})
teng.addEventListener('click', () => {
	const text = document.querySelector('#textt').textContent
	if (text[0] == '+') {
		const text = document.querySelector('#textt').textContent
		let counter = Number(text) + Number(ham)
		document.querySelector('#textt').innerHTML = counter
	} else if (text[0] == '-') {
		const text = document.querySelector('#textt').textContent
		let counter = Number(ham) - Number(text.slice(1, text.length))
		document.querySelector('#textt').innerHTML = counter
	} else if (text[0] == '/') {
		const text = document.querySelector('#textt').textContent
		let counter = Number(ham) / Number(text.slice(1, text.length))
		document.querySelector('#textt').innerHTML = counter
	} else if (text[0] == 'x') {
		const text = document.querySelector('#textt').textContent
		let counter = Number(ham) * Number(text.slice(1, text.length))
		document.querySelector('#textt').innerHTML = counter
	} else {
		const text = document.querySelector('#textt').textContent
		let counter = Number(ham) % Number(text.slice(1, text.length))
		document.querySelector('#textt').innerHTML = counter
	}
})
