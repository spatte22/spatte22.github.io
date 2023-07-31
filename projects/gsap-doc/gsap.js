/* animate the GSAP logo */

window.addEventListener('load', function() {
	gsap.from(".gsap-logo", {x: -1000, duration: 5, ease: "elastic.out(1, 0.5)"});
	/*gsap.from(".header-items", {x: -1000, duration: 3, ease: "elastic.out(1, 0.75)"});*/
	var tl = gsap.timeline({defaults:{opacity: 0, ease: "elastic.out(1, 0.75)", duration: 1}})
	tl.from("#one", {y: -50})
	.from("#two", {y: 150}, "-=.5")
	.from("#three", {y: -50}, "-=.5")
	.from("#four", {y: 150}, "-=.5")
	.from("#five", {y: -50}, "-=.5")
})




let funFactHead = document.getElementById("gsap-dropdown-heading");
let funFactContent = document.getElementById("gsap-dropdown-content");
funFactHead.addEventListener("click", function() {
	for(var i = 0; i < funFactContent.classList.length; i++) {
		if(funFactContent.classList[i].indexOf('invisible') >= 0) {
			gsap.to("#gsap-dropdown-content" , {height: "auto", duration: 1, ease: "elastic.out(1, .5)"});
			gsap.to("#gsap-dropdown-icon", {rotate: 45});
			funFactContent.classList.add('visible');
			funFactContent.classList.remove('invisible');		
		}else {
			funFactContent.classList.remove('visible');
			gsap.to("#gsap-dropdown-content" , {height: 0, duration: 1, ease: "elastic.out(1, 1)"});
			gsap.to("#gsap-dropdown-icon", {rotate: 90});
			funFactContent.classList.add('invisible');
		}
	}
});

/*
for(var i = 0; i < funFactContent.classList.length; i++) {
		if(funFactContent.classList[i].indexOf('invisible') >= 0) {
			funFactContent.classList.remove('invisible');
			funFactContent.classList.add('visible');
		}else {
			funFactContent.classList.remove('visible');
			funFactContent.classList.add('invisible');
		}
	}
*/






