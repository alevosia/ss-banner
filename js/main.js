// TORCH ===========================================
;(function main() {
	const banner = document.querySelector('.dark-bg')
	const torch = document.querySelector('.light-bg')

	const minTorchSize = 0
	const maxTorchSize = 25

	let torchSize = maxTorchSize
	let clientX, clientY

	function moveTorch(event) {
		clientX = event.clientX
		clientY = event.clientY
		torch.style.clipPath = `circle(${torchSize}% at ${clientX}px ${clientY}px)`
	}

	banner.addEventListener('mousemove', moveTorch)
})()

// TYPEWRITER ======================================
;(function typewriter() {
	const slogan = document.querySelector('.slogan')

	let textCharIndex = 0
	let textArrayIndex = 0
	const texts = [
		'Designs that suit your taste',
		'Execution sliced to precision',
		'A bucket of fresh ideas',
		'Mixed in a pot of creativity',
		'Let it simmer',
	]

	const maxSpeed = 80
	const minSpeed = 60
	const backspaceDelay = 1000

	function getRandomSpeed() {
		return Math.floor(Math.random() * maxSpeed + minSpeed)
	}

	function backspace() {
		if (slogan.innerHTML.length > 0) {
			slogan.innerHTML = slogan.innerHTML.substr(0, slogan.innerHTML.length - 1)
			setTimeout(backspace, maxSpeed)
		} else {
			if (textArrayIndex < texts.length - 1) {
				textArrayIndex += 1
			} else {
				textArrayIndex = 0
			}

			write()
		}
	}

	function write() {
		if (textCharIndex < texts[textArrayIndex].length) {
			slogan.innerHTML += texts[textArrayIndex].charAt(textCharIndex)
			setTimeout(write, getRandomSpeed())
			textCharIndex += 1
		} else {
			textCharIndex = 0
			setTimeout(backspace, backspaceDelay)
		}
	}

	setTimeout(write, 1000)
})()
