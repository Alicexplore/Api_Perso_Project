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

const imagesLeft = [
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
];  

const imagesRight = [
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

const generateRandomImages = () => {

  let randomLeft = Math.floor(Math.random() * imagesLeft.length);
  let randomRight = Math.floor(Math.random() * imagesRight.length);

  const leftImg = document.getElementById("left_img");
  const rightImg = document.getElementById("right_img");

  leftImg.src = imagesLeft[randomLeft].src;
  rightImg.src = imagesRight[randomRight].src;

  leftImg.onclick = function() {
    if (points[imagesLeft[randomLeft].country]) {
      points[imagesLeft[randomLeft].country] += 1;
    } else {
      points[imagesLeft[randomLeft].country] = 1;
    }
    // alert(`You earned a point for ${images[randomIndex1].country}!`);
    trash.push(randomLeft);
    trash.push(randomRight);
    // imagesLeft.slice(randomLeft);
    // imagesRight.slice(randomRight);
    generateRandomImages();
  }

  rightImg.onclick = function() {
    if (points[imagesRight[randomRight].country]) {
      points[imagesRight[randomRight].country] += 1;
    } else {
      points[imagesRight[randomRight].country] = 1;
    }
    // alert(`You earned a point for ${images[randomIndex2].country}!`);
    trash.push(randomLeft);
    trash.push(randomRight);
    // imagesLeft.slice(randomLeft);
    // imagesRight.slice(randomRight);
    generateRandomImages();
  }

  if (trash.length == 48) {
    alert("You finished the game! \n Let's find out your scores...");

    let message = "Points:\n";
    // SORT BY VALUE
    const sortedKeys = Object.keys(points).sort((a, b) => points[b] - points[a]);
    // POINTS FOR COUTRIES FOR BIGGEST TO SMALLEST
    sortedKeys.forEach((country) => {
      message += country + ": " + points[country] + "\n";
    });
    alert(message);
    alert("Want to restart the game ?");
  }
  
};

generateRandomImages();
