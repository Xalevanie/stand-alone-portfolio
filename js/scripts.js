// Randomize Header

// Store & Generate Number
var maxRand = 42;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = '/img/fullsize/1.jpg';
var img1 = '/img/fullsize/2.jpg';
var img2 = '/img/fullsize/3.jpg';
var img3 = '/img/fullsize/4.jpg';
var img4 = '/img/fullsize/5.jpg';
var img5 = '/img/fullsize/6.jpg';
var img6 = '/img/fullsize/7.jpg';
var img7 = '/img/fullsize/8.jpg';
var img8 = '/img/fullsize/9.jpg';
var img9 = '/img/fullsize/10.jpg';
var img10 = '/img/fullsize/11.jpg';
var img11 = '/img/fullsize/12.jpg';
var img12 = '/img/fullsize/13.jpg';
var img13 = '/img/fullsize/14.jpg';
var img14 = '/img/fullsize/15.jpg';
var img15 = '/img/fullsize/16.jpg';
var img16 = '/img/fullsize/17.jpg';
var img17 = '/img/fullsize/18.jpg';
var img18 = '/img/fullsize/19.jpg';
var img19 = '/img/fullsize/20.jpg';
var img20 = '/img/fullsize/21.jpg';
var img21 = '/img/fullsize/22.jpg';
var img22 = '/img/fullsize/23.jpg';
var img23 = '/img/fullsize/24.jpg';
var img24 = '/img/fullsize/25.jpg';
var img25 = '/img/fullsize/26.jpg';
var img26 = '/img/fullsize/27.jpg';
var img27 = '/img/fullsize/28.jpg';
var img28 = '/img/fullsize/29.jpg';
var img29 = '/img/fullsize/30.jpg';
var img30 = '/img/fullsize/31.jpg';
var img31 = '/img/fullsize/32.jpg';
var img32 = '/img/fullsize/33.jpg';
var img33 = '/img/fullsize/34.jpg';
var img34 = '/img/fullsize/35.jpg';
var img35 = '/img/fullsize/36.jpg';
var img36 = '/img/fullsize/37.jpg';
var img37 = '/img/fullsize/38.jpg';
var img38 = '/img/fullsize/39.jpg';
var img39 = '/img/fullsize/40.jpg';
var img40 = '/img/fullsize/41.jpg';
var img41 = '/img/fullsize/42.jpg';
var img42 = '/img/fullsize/43.jpg';

// Show Images
$('header img').attr('src', eval('img' + numRand) );

// Activate Gallery
$('figure').lightGallery({
    selector: 'a'
});
