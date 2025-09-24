/* displays up arrow after scrolling past 2000px */

window.addEventListener("scroll", (event) => {
	let scroll = this.scrollY;
if (scroll > 2000) {
	document.getElementById('arrowimage').style.display = "block";
} else if (scroll < 2000) {
	document.getElementById('arrowimage').style.display = "none";
}
});