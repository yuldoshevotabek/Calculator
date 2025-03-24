const btns = document.querySelectorAll('.btn button'),
	clear = document.querySelector('#clear'),
	plus = document.querySelector('#plus'),
	teng = document.querySelector('.bor'),
	minus = document.querySelector('#minus'),
	boluv = document.querySelector('#boluv'),
	kvadrat = document.querySelector('.kvadrat'),
	foiz = document.querySelector('.foiz'),
	del = document.querySelector('#delete'),
	text = document.querySelector('#textt').textContent
btns.forEach(item => {
	item.addEventListener('click', () => {
		const text = document.querySelector('#textt').textContent
		if (
			text[0] == 0 ||
			text[0] == '+' ||
			text[0] == '-' ||
			text[0] == '*' ||
			text[0] == '/' ||
			text[0] == '%'
		) {
			const text = document.querySelector('#textt')
			text.innerHTML = item.textContent
		} else {
			const text = document.querySelector('#textt')
			text.innerHTML += item.textContent
		}
	})
})
clear.addEventListener('click', () => {
	document.querySelector('#textt').textContent = ''
})
plus.addEventListener('click', () => {
	const text = document.querySelector('#textt').textContent
	if (
		text.slice(-1) == '+' ||
		text.slice(-1) == '-' ||
		text.slice(-1) == '/' ||
		text.slice(-1) == '*' ||
		text.slice(-1) == '%'
	) {
	} else {
		document.querySelector('#textt').textContent += '+'
	}
})
minus.addEventListener('click', () => {
	const text = document.querySelector('#textt').textContent
	if (
		text.slice(-1) == '+' ||
		text.slice(-1) == '-' ||
		text.slice(-1) == '/' ||
		text.slice(-1) == '*' ||
		text.slice(-1) == '%'
	) {
	} else {
		document.querySelector('#textt').textContent += '-'
	}
})
boluv.addEventListener('click', () => {
	const text = document.querySelector('#textt').textContent
	if (
		text.slice(-1) == '+' ||
		text.slice(-1) == '-' ||
		text.slice(-1) == '/' ||
		text.slice(-1) == '*' ||
		text.slice(-1) == '%'
	) {
	} else {
		document.querySelector('#textt').textContent += '/'
	}
})
kvadrat.addEventListener('click', () => {
	const text = document.querySelector('#textt').textContent
	if (
		text.slice(-1) == '+' ||
		text.slice(-1) == '-' ||
		text.slice(-1) == '/' ||
		text.slice(-1) == '*' ||
		text.slice(-1) == '%'
	) {
	} else {
		document.querySelector('#textt').textContent += '*'
	}
})
foiz.addEventListener('click', () => {
	const text = document.querySelector('#textt').textContent
	if (
		text.slice(-1) == '+' ||
		text.slice(-1) == '-' ||
		text.slice(-1) == '/' ||
		text.slice(-1) == '*' ||
		text.slice(-1) == '%'
	) {
	} else {
		document.querySelector('#textt').textContent += '%'
	}
})
teng.addEventListener('click', () => {
	const text = document.querySelector('#textt').textContent
	document.querySelector('#textt').innerHTML = eval(text)
})
del.addEventListener('click', () => {
	const text = document.querySelector('#textt').textContent
	let cler = text.slice(0, -1)
	document.querySelector('#textt').innerHTML = cler
})
