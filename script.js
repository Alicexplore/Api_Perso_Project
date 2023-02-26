///////////////////////////////////////////////////////////////////// MODAL WINDOW OPENING //////////////////////////////////////////////////////////////////////////

window.addEventListener("load", function(){ // OPEN
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      500
  )
});

  document.querySelector("#close").addEventListener("click", function(){ //CLOSE 
  document.querySelector(".popup").style.display = "none";
  document.querySelector(".backdrop").style.display = "none";
});  

///////////////////////////////////////////////////////////////////////////// GAME //////////////////////////////////////////////////////////////////////////////////

const images = [
  { src: "./newzealand/newzealand1.jpg", country: "newzealand"},
  { src: "./newzealand/newzealand2.jpg", country: "newzealand"},
  { src: "./newzealand/newzealand3.jpg", country: "newzealand"},
  { src: "./newzealand/newzealand4.jpg", country: "newzealand"},
  { src: "./italy/italy1.jpg", country: "italy"},
  { src: "./italy/italy2.jpg", country: "italy"},
  { src: "./italy/italy3.jpg", country: "italy"},
  { src: "./italy/italy4.jpg", country: "italy"},
  { src: "./hawaii/hawaii1.jpg", country: "hawaii"},
  { src: "./hawaii/hawaii2.jpg", country: "hawaii"},
  { src: "./hawaii/hawaii3.jpg", country: "hawaii"},
  { src: "./hawaii/hawaii4.jpg", country: "hawaii"},
  { src: "./nepal/nepal1.jpg", country: "nepal"},
  { src: "./nepal/nepal2.jpg", country: "nepal"},
  { src: "./nepal/nepal3.jpg", country: "nepal"},
  { src: "./nepal/nepal4.jpg", country: "nepal"},
  { src: "./bolivia/bolivia1.jpg", country: "bolivia"},
  { src: "./bolivia/bolivia2.jpg", country: "bolivia"},
  { src: "./bolivia/bolivia3.jpg", country: "bolivia"},
  { src: "./bolivia/bolivia4.jpg", country: "bolivia"},
  { src: "./utah/utah1.jpg", country: "utah"},
  { src: "./utah/utah2.jpg", country: "utah"},
  { src: "./utah/utah3.jpg", country: "utah"},
  { src: "./utah/utah4.jpg", country: "utah"},
  { src: "./australia/australia1.jpg", country: "australia"},
  { src: "./australia/australia2.jpg", country: "australia"},
  { src: "./australia/australia3.jpg", country: "australia"},
  { src: "./australia/australia4.jpg", country: "australia"},
  { src: "./cuba/cuba1.jpg", country: "cuba"},
  { src: "./cuba/cuba2.jpg", country: "cuba"},
  { src: "./cuba/cuba3.jpg", country: "cuba"},
  { src: "./cuba/cuba4.jpg", country: "cuba"},
  { src: "./iceland/iceland1.jpg", country: "iceland"},
  { src: "./iceland/iceland2.jpg", country: "iceland"},
  { src: "./iceland/iceland3.jpg", country: "iceland"},
  { src: "./iceland/iceland4.jpg", country: "iceland"},
  { src: "./india/india1.jpg", country: "india"},
  { src: "./india/india2.jpg", country: "india"},
  { src: "./india/india3.jpg", country: "india"},
  { src: "./india/india4.jpg", country: "india"},
  { src: "./japan/japan1.jpg", country: "japan"},
  { src: "./japan/japan2.jpg", country: "japan"},
  { src: "./japan/japan3.jpg", country: "japan"},
  { src: "./japan/japan4.jpg", country: "japan"},
  { src: "./kenya/kenya1.jpg", country: "kenya"},
  { src: "./kenya/kenya2.jpg", country: "kenya"},
  { src: "./kenya/kenya3.jpg", country: "kenya"},
  { src: "./kenya/kenya4.jpg", country: "kenya"}
];  
  
const trash = [];
const points = {};

function generateRandomImages() {
  let randomIndex1 = Math.floor(Math.random() * images.length);
  let randomIndex2 = Math.floor(Math.random() * images.length);

  while (randomIndex2 === randomIndex1 || trash.includes(randomIndex1) || trash.includes(randomIndex2)) {
    randomIndex1 = Math.floor(Math.random() * images.length);
    randomIndex2 = Math.floor(Math.random() * images.length);
  }

  const leftImg = document.getElementById("left-img");
  const rightImg = document.getElementById("right-img");

  leftImg.src = images[randomIndex1].src;
  rightImg.src = images[randomIndex2].src;

  leftImg.onclick = function() {
    if (points[images[randomIndex1].country]) {
      points[images[randomIndex1].country] += 1;
    } else {
      points[images[randomIndex1].country] = 1;
    }
    alert(`You earned a point for ${images[randomIndex1].country}!`);
    trash.push(randomIndex1);
    trash.push(randomIndex2);
    generateRandomImages();
  }

  rightImg.onclick = function() {
    if (points[images[randomIndex2].country]) {
      points[images[randomIndex2].country] += 1;
    } else {
      points[images[randomIndex2].country] = 1;
    }
    alert(`You earned a point for ${images[randomIndex2].country}!`);
    trash.push(randomIndex1);
    trash.push(randomIndex2);
    generateRandomImages();
  }
};

generateRandomImages();

// Once all images have been played, display points for each country in an alert
window.addEventListener('load', function() {
  if (trash.length === images.length) {
    let message = "Points:\n";
    for (let country in points) {
      message += country + ": " + points[country] + "\n";
    }
    alert(message);
  }
});
