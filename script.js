/////////////////////////////////////////////////////// WINDOW POP UP OPENING /////////////////////////////////////////////////////////////

window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      500
  )
});
document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});

/////////////////////////////////////////////////////// TRYING OBJECTS /////////////////////////////////////////////////////////////

// var pictures = [

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

  // ALL IMAGES HAS BEEN DISPLAYED

  function displayRandomImage() {
    if (photoList.length == displayedPhotos.length) {
      alert("Hello Test All images displayed");
      return;
    }
  };
  
  displayRandomImage();

  // LEFT PICTURES

  let titleLeft = document.getElementById("titleLeft1");  
  titleLeft.addEventListener("click", () => {

      if (photoList[randomLeft] === displayedPhotos || photoList[randomRight] === displayedPhotos ){       // TELL THAT I WANT THE PLAYED ONES NOT BE PLAYED AGAIN
        alert("Hello Test already played");
      }

      let randomRight = Math.floor(Math.random() * photoList.length);
      let randomLeft = Math.floor(Math.random() * photoList.length); 

      displayedPhotos.push(randomRight);  // NEVER THE SAME ON LEFT AND RIGHT AS SAME TIME
      displayedPhotos.push(randomLeft);

      if (photoList[randomRight] === photoList[randomLeft]) {  // NEVER THE SAME ON LEFT AND RIGHT AS SAME TIME
        alert("Hello Test Same Picture");
        randomRight = Math.floor(Math.random() * photoList.length);
        randomLeft = Math.floor(Math.random() * photoList.length);
      }

      while (randomRight === previousRight || randomRight === previousLeft) {  // NEVER THE SAME TWICE ON EACH SIDES
          randomRight = Math.floor(Math.random() * photoList.length);
      }
      while (randomLeft === previousLeft || randomLeft === previousRight) {
          randomLeft = Math.floor(Math.random() * photoList.length);
      }

      document.getElementById("imageOnRight").src = photoList[randomRight];
      document.getElementById("imageOnLeft").src = photoList[randomLeft];

  });

  // RIGHT PICTURES

  let titleRight = document.getElementById("titleRight1");  
  titleRight.addEventListener("click", () => {
      let randomLeft = Math.floor(Math.random() * photoList.length);
      let randomRight = Math.floor(Math.random() * photoList.length);

      if (photoList[randomRight] === photoList[randomLeft]) {  // NEVER THE SAME ON LEFT AND RIGHT AS SAME TIME
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



