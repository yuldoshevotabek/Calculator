const btns = document.querySelectorAll('.btn button'),
	clear = document.querySelector('#clear'),
	plus = document.querySelector('#plus'),
	teng = document.querySelector('.bor'),
	minus = document.querySelector('#minus'),
	boluv = document.querySelector('#boluv'),
	kvadrat = document.querySelector('.kvadrat'),
	foiz = document.querySelector('.foiz'),
	del = document.querySelector('#delete')
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
	const text = (document.querySelector('#textt').textContent += '+')
})
minus.addEventListener('click', () => {
	const text = (document.querySelector('#textt').textContent += '-')
})
boluv.addEventListener('click', () => {
	const text = (document.querySelector('#textt').textContent += '/')
})
kvadrat.addEventListener('click', () => {
	const text = (document.querySelector('#textt').textContent += 'x')
})
foiz.addEventListener('click', () => {
	const text = (document.querySelector('#textt').textContent += '%')
})
teng.addEventListener('click', () => {
	const text = document.querySelector('#textt').textContent
	if (text.includes('+') == true) {
		const text = document.querySelector('#textt').textContent
		let counter = text
			.split('+')
			.map(Number)
			.reduce((total, item) => {
				return (total += item)
			})
		document.querySelector('#textt').innerHTML = counter
	} else if (text.includes('-') == true) {
		const text = document.querySelector('#textt').textContent
		let counter = text
			.split('-')
			.map(Number)
			.reduce((total, item) => {
				return (total -= item)
			})
		document.querySelector('#textt').innerHTML = counter
	} else if (text.includes('/') == true) {
		const text = document.querySelector('#textt').textContent
		let counter = text
			.split('/')
			.map(Number)
			.reduce((total, item) => {
				return (total /= item)
			})
		document.querySelector('#textt').innerHTML = counter
	} else if (text.includes('x') == true) {
		const text = document.querySelector('#textt').textContent
		let counter = text
			.split('x')
			.map(Number)
			.reduce((total, item) => {
				return (total *= item)
			})
		document.querySelector('#textt').innerHTML = counter
	} else if (text.includes('%') == true) {
		const text = document.querySelector('#textt').textContent
		let counter = text
			.split('%')
			.map(Number)
			.reduce((total, item) => {
				return (total %= item)
			})
		document.querySelector('#textt').innerHTML = counter
	}
})
del.addEventListener('click', () => {
	const text = document.querySelector('#textt').textContent
	let cler = text.slice(0, -1)
	document.querySelector('#textt').innerHTML = cler
})
