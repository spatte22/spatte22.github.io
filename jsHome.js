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


const images = [];

images[0] = "images/bouldering1.1.jpg";
images[1] = "images/chess1.1.jpg\" class=\"imageShape\"";
images[2] = "images/teddy1.1.jpg\" class=\"imageShape\"";
images[3] = "images/nyc1.1.jpg\" class=\"imageShape\"";
images[4] = "images/randompiano1.1.jpg\" class=\"imageShape\"";
images[5] = "images/tobyteddy.jpg\" class=\"imageShape\"";
images[6] = "images/climbing1.1.jpg\" class=\"imageShape\"";
images[7] = "images/disposable3.1.jpg\" class=\"imageShape\"";
images[8] = "images/disposable4.1.jpg\" class=\"imageShape\"";
images[9] = "images/germany1.1.jpg\" class=\"imageShape\"";
images[10] = "images/havasu1.1.jpg\" class=\"imageShape\"";
images[11] = "images/trolley1.1.jpg\" class=\"imageShape\"";
images[12] = "images/kingarthur3.1.jpg\" class=\"imageShape\"";
images[13] = "images/disposable1.1.jpg\" class=\"imageShape\"";
images[14] = "images/nutcracker1.1.jpg\" class=\"imageShape\"";
images[15] = "images/nutcracker3.1.jpg\" class=\"imageShape\"";
images[16] = "images/temple1.1.jpg\" class=\"imageShape\"";
images[17] = "images/pipe1.1.jpg\" class=\"imageShape\"";
images[18] = "images/disposable2.1.jpg\" class=\"imageShape\"";
images[19] = "images/rappel1.1.jpg\" class=\"imageShape\"";
images[20] = "images/table1.1.jpg\" class=\"imageShape\"";
images[21] = "images/pipe2.1.jpg\" class=\"imageShape\""; 
images[22] = "images/climbing2.1.jpg\" class=\"imageShape\""; 
images[23] = "images/longboard1.1.jpg\" class=\"imageShape\""; 


let x = 0;
function myCycle() {
    setTimeout(function() {
        var bodyBottomDiv = document.getElementById("home-body-bottom");
        var newDiv = document.createElement("div");
        newDiv.classList.add("slideshowDiv");
        bodyBottomDiv.appendChild(newDiv);
        newDiv.innerHTML = '<img src=\"' + images[x] + '\"/>';
        x++;
        if (x < images.length) {
            myCycle();
        }else {
            x = 0;
            myCycle();
        }
    }, 7000)
};
myCycle();





