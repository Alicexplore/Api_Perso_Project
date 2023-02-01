/////////////////////////////////////////////////////// WINDOW POP UP OPENING /////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////// TRYING OBJECTS /////////////////////////////////////////////////////////////

// let pictures = [

//         {
//           file: ["./bolivia/bolivia1.jpg", "./bolivia/bolivia2.jpg", "./bolivia/bolivia3.jpg", "./bolivia/bolivia4.jpg"],
//           country: "bolivia"}, 
        
//         {
//           file: ["./hawaii/hawaii1.jpg", "./hawaii/hawaii2.jpg", "./hawaii/hawaii3.jpg", "./hawaii/hawaii4.jpg"],
//           country: "hawaii",
//         }, 
//         {
//           file: ["./italy/italy1.jpg", "./italy/italy2.jpg", "./italy/italy3.jpg", "./italy/italy4.jpg"],
//           country: "italy",
//         }, 
//         {
//           file: ["./nepal/nepal1.jpg", "./nepal/nepal2.jpg", "./nepal/nepal3.jpg", "./nepal/nepal.jpg"],
//           country: "nepal",
//         },
//         {
//           file: ["./newzealand/newzealand1.jpg", "./newzealand/newzealand2.jpg", "./newzealand/newzealand3.jpg", "./newzealand/newzealand4.jpg"],
//           country: "newzealand",
//         },
//         {
//           file: ["./utah/utah1.jpg", "./utah/utah2.jpg", "./utah/utah3.jpg", "./utah/utah4.jpg"],
//           country: "utah",
//         }
//    ]


/////////////////////////////////////////////////////// ARRAY OF PICTURES /////////////////////////////////////////////////////////////

var photoList = [
  "./newzealand/newzealand1.jpg",
  "./newzealand/newzealand2.jpg",
  "./newzealand/newzealand3.jpg",
  "./newzealand/newzealand4.jpg",
  "./italy/italy1.jpg",
  "./italy/italy2.jpg",
  "./italy/italy3.jpg",
  "./italy/italy4.jpg",
  "./hawaii/hawaii1.jpg",
  "./hawaii/hawaii2.jpg",
  "./hawaii/hawaii3.jpg",
  "./hawaii/hawaii4.jpg",
  "./nepal/nepal1.jpg",
  "./nepal/nepal2.jpg",
  "./nepal/nepal3.jpg",
  "./nepal/nepal4.jpg",
  "./bolivia/bolivia1.jpg",
  "./bolivia/bolivia2.jpg",
  "./bolivia/bolivia3.jpg",
  "./bolivia/bolivia4.jpg",
  "./utah/utah1.jpg",
  "./utah/utah2.jpg",
  "./utah/utah3.jpg",
  "./utah/utah4.jpg"
]

/////////////////////////////////////////////////////// RANDOM PICTURES /////////////////////////////////////////////////////////////

const changePicturesLeftAndRight = () => {

  let previousLeft, previousRight;
  
  var displayedPhotos = [];

  // LEFT PICTURES

  let imageLeft = document.getElementById("imageLeft");  
  imageLeft.addEventListener("click", () => {

      let randomLeft = Math.floor(Math.random() * photoList.length);
      let randomRight = Math.floor(Math.random() * photoList.length);

      if (!displayedPhotos.includes(randomLeft) || !displayedPhotos.includes(randomRight) ){ // IF DISPLAYED DOESN'T INCLUDS THE RANDOM THEN, ELSE
        console.log("tout est ok");
        console.log("displayedP :" + displayedPhotos, "randomL :" +  randomLeft, "randomR :" +  randomRight);
        displayedPhotos.push(randomRight);  
        displayedPhotos.push(randomLeft);
        console.log("displayedP after push :" + displayedPhotos);
      } else {
        console.log("tout n'est pas ok");
        console.log("randomL :" +  randomLeft, "randomR :" +  randomRight)
        randomLeft = Math.floor(Math.random() * photoList.length);
        alert("already played")
      };

      if (randomRight === randomLeft) {  // NEVER THE SAME ON LEFT AND RIGHT AS SAME TIME
        alert("Hello Test Same Picture");
        randomRight = Math.floor(Math.random() * photoList.length);
        randomLeft = Math.floor(Math.random() * photoList.length);
      };

      while (randomRight === previousRight || randomRight === previousLeft) {  // NEVER THE SAME TWICE ON EACH SIDES
          randomRight = Math.floor(Math.random() * photoList.length);  
      };

      while (randomLeft === previousLeft || randomLeft === previousRight) {
          randomLeft = Math.floor(Math.random() * photoList.length);
      };

      if (photoList.length == displayedPhotos.length) { // USE THIS AS A START FOR CALCULATE WINNER COUNTRY
             alert("Hello Test All images displayed");
             return;
           };

      document.getElementById("imageOnRight").src = photoList[randomRight];
      document.getElementById("imageOnLeft").src = photoList[randomLeft];

  });

  // RIGHT PICTURES

  let imageRight = document.getElementById("imageRight");  
  imageRight.addEventListener("click", () => {
      let randomLeft = Math.floor(Math.random() * photoList.length);
      let randomRight = Math.floor(Math.random() * photoList.length);

      if (randomRight === randomLeft) {  // NEVER THE SAME ON LEFT AND RIGHT AS SAME TIME
        alert("Hello Test Same Picture");
        randomRight = Math.floor(Math.random() * photoList.length);
        randomLeft = Math.floor(Math.random() * photoList.length);
      }

      while (randomRight === previousRight || randomRight === previousLeft) {  // NEVER THE SAME TWICE ON EACH SIDES
          randomRight = Math.floor(Math.random() * photoList.length);
          alert("Hello Test Doubles");
      }
      while (randomLeft === previousLeft || randomLeft === previousRight) {
          randomLeft = Math.floor(Math.random() * photoList.length);
          alert("Hello Test Doubles");
      }

      document.getElementById("imageOnLeft").src = photoList[randomLeft];
      document.getElementById("imageOnRight").src = photoList[randomRight];

  });
};

changePicturesLeftAndRight();

//////////////////////////////////////// NO MORE TO PLAY = PUT IN THE CONT CHANGEPICTURES /////////////////////////////////////////////

// var displayedPhotos = [];

// const displayRandomImage = () => {
//   if (photoList.length == displayedPhotos.length) {
//     alert("Hello Test All images displayed");
//     return;
//   }
// };

// displayRandomImage();

/////////////////////////////////////////////////////// SCORE VARIABLES /////////////////////////////////////////////////////////////

let scoreNewzealand = 0
let scoreItaly = 0
let scoreHawaii = 0
let scoreNepal = 0
let scoreBolivia = 0
let scoreUtah = 0

///////////////////////////////////////////////////////////// TRASH /////////////////////////////////////////////////////////////////

let trashPhotos = []

/////////////////////////////////////////////////////// LANSCAPE PHOTOS /////////////////////////////////////////////////////////////

// landscapephotographies

let winnerNewzealand = ""
let winnerItaly = ""
let winnerHawaii = ""
let winnerNepal = ""
let winnerBolivia = ""
let winnerUtah = ""

/////////////////////////////////////////////// TRYING FONCTIONALITY NOT SAME COUNTRY ////////////////////////////////////////////////



   
















// imageLeft.addEventListener("mouseover","mouseleave" () => { // TOP TOP TOP
//     alert("hello");
// });



