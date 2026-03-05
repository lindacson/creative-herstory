/*~~ Declare assets to load behind loading screen ~~*/

// If you're using more sprite sheets or background images, add them here
imgChar1 = "./characters/linda.png"
imgChar2 = "./characters/queen.png";
imgChar3 = "./characters/queen_mother.png";
imgChar4 = "./characters/sister.png";
imgChar5 = "./characters/general.png";
imgChar6 = "./characters/niece.png";
imgChar7 = "./characters/nephew.png";
imgChar8 = "./characters/king.png";
imgChar9 = "./characters/priest.png";
imgChar10 = "./characters/roman.png";

const imageSrcs = [
  imgChar1,
  imgChar2,
  imgChar3,
  imgChar4,
  imgChar5,
  imgChar6,
  imgChar7,
  imgChar8,
  imgChar9,
  imgChar10
];
imagesLoaded = false;

allAssetsLoaded = false;

/*~~ Preload assets ~~*/
$(window).load(function () {
  window.preloadedImages = [];
  imagesLoaded = 0;
  totalImages = imageSrcs.length;
  imageSrcs.forEach((imgUrl) => {
    var img = new Image();
    img.src = imgUrl;

    img.onload = (e) => {
      imagesLoaded++;
      window.preloadedImages.push(img);
      if (imagesLoaded === totalImages) {
        donePreloading();
      }
    };
  });
});