const $button = document.getElementById("button")
const $li0 = document.getElementById('li0')
const $li1 = document.getElementById('li1')
const $li2 = document.getElementById('li2')
const $li3 = document.getElementById('li3')


const $main = document.getElementById('main')

$button.addEventListener("click", (list) => {
	// $li.style.animationName ="li-0"
	// $li.style.animationDuration ="3s"
	// $li.style.animationFillMode = "forwards"
	$li0.classList.toggle("animation0")
	$li1.classList.toggle("animation1")
	$li2.classList.toggle("animation2")
	$li3.classList.toggle("animation3")
	$main.classList.toggle("moveMain")
	$main.style.height = "600px"

	console.log("work")
})
















