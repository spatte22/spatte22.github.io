// Swap images of me

let me = 0;
let meImages = [];

meImages[0] = "images/me/tan.jpg"
meImages[1] = "images/me/pencil.jpg"
meImages[2] = "images/me/brown.jpg"
meImages[3] = "images/me/orange.jpg"


function swapMe() {
   document.slide.src = meImages[me];
   if(me < meImages.length - 1) me++; else me = 0;
   setTimeout("swapMe()", 10000);
};
window.onload=swapMe;



// below is for sliding slideshow



window.addEventListener('load', function () {
  // Step 1: Get viewport width
  let viewportWidth = window.innerWidth;

  // Step 2: Get the track 
  let track = document.getElementById('track');

  // Step 3: Get first image width
  let images = document.getElementsByClassName('imageShape');
  let firstImage = images[0];
  let firstImageWidth = firstImage.offsetWidth;

  // Step 4: Animation loop
  let trackDistance = viewportWidth + 1 ; // This sets a counter at 0 outside of the animate function, so that the starting point 
                                          // always remains 0, and the distance is moved -2px (and the value updated)
						                  // specifically within the animate function.
  function animate() {
	// 1. Check if first image needs recycling
	if (trackDistance < -(viewportWidth + firstImageWidth)) {
		track.appendChild(firstImage);
		trackDistance = trackDistance + firstImageWidth + 100; // 100 represents the gap added between images in the CSS
		firstImage = images[0];
		firstImageWidth = firstImage.offsetWidth;
		
	}  
	  
    // 2. Move the track
	trackDistance -= 2;
	track.style.transform = "translateX(" + trackDistance + "px)";

    // 3. Call itself again
    requestAnimationFrame(animate);
  };
  animate();
});





