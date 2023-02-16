/////////////////////////////////////////////////////// MODAL WINDOW OPENING /////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////// SCORE VARIABLES /////////////////////////////////////////////////////////////

var scoreNewzealand = 0
var scoreItaly = 0
var scoreHawaii = 0
var scoreNepal = 0
var scoreBolivia = 0
var scoreUtah = 0
var scoreAustralia = 0
var scoreCuba = 0
var scoreIceland = 0
var scoreIndia = 0
var scoreJapan = 0
var scoreKenya = 0

/////////////////////////////////////////////////////// TRYING OBJECTS /////////////////////////////////////////////////////////////

var pictures = [
        {
          file: ["./bolivia/bolivia1.jpg", "./bolivia/bolivia2.jpg", "./bolivia/bolivia3.jpg", "./bolivia/bolivia4.jpg"],
          country: scoreBolivia, 
          },  
        {
          file: ["./hawaii/hawaii1.jpg", "./hawaii/hawaii2.jpg", "./hawaii/hawaii3.jpg", "./hawaii/hawaii4.jpg"],
          country: scoreHawaii,
          }, 
        {
          file: ["./italy/italy1.jpg", "./italy/italy2.jpg", "./italy/italy3.jpg", "./italy/italy4.jpg"],
          country: scoreItaly,
          }, 
        {
          file: ["./nepal/nepal1.jpg", "./nepal/nepal2.jpg", "./nepal/nepal3.jpg", "./nepal/nepal.jpg"],
          country: scoreNepal,
          },
        {
          file: ["./newzealand/newzealand1.jpg", "./newzealand/newzealand2.jpg", "./newzealand/newzealand3.jpg", "./newzealand/newzealand4.jpg"],
          country: scoreNewzealand,
          },
        {
          file: ["./utah/utah1.jpg", "./utah/utah2.jpg", "./utah/utah3.jpg", "./utah/utah4.jpg"],
          country: scoreUtah,
          }
   ]


/////////////////////////////////////////////////////// ARRAY OF PICTURES LEFTSIDE /////////////////////////////////////////////////////////////

var photoListLeft = [
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

var photoListRight = [
  "./australia/australia1.jpg",
  "./australia/australia2.jpg",
  "./australia/australia3.jpg",
  "./australia/australia4.jpg",
  "./cuba/cuba1.jpg",
  "./cuba/cuba2.jpg",
  "./cuba/cuba3.jpg",
  "./cuba/cuba4.jpg",
  "./iceland/iceland1.jpg",
  "./iceland/iceland2.jpg",
  "./iceland/iceland3.jpg",
  "./iceland/iceland4.jpg",
  "./india/india1.jpg",
  "./india/india2.jpg",
  "./india/india3.jpg",
  "./india/india4.jpg",
  "./japan/japan1.jpg",
  "./japan/japan2.jpg",
  "./japan/japan3.jpg",
  "./japan/japan4.jpg",
  "./kenya/kenya1.jpg",
  "./kenya/kenya2.jpg",
  "./kenya/kenya3.jpg",
  "./kenya/kenya4.jpg"
]

function changePicturesLeftAndRight() {

  var displayedPhotosLeft = [];
  var displayedPhotosRight = [];

  let imageLeft = document.getElementById("imageLeft");
  let imageRight = document.getElementById("imageRight");

  imageLeft.addEventListener("click", () => {
    let randomLeft;
    do {
      randomLeft = Math.floor(Math.random() * photoListLeft.length);
    } while (displayedPhotosLeft.includes(randomLeft));
  
    displayedPhotosLeft.push(randomLeft);
  
    document.getElementById("imageOnLeft").src = photoListLeft[randomLeft];
    let randomRight;
    do {
      randomRight = Math.floor(Math.random() * photoListRight.length);
    } while (displayedPhotosRight.includes(randomRight));
    displayedPhotosRight.push(randomRight);
     
    document.getElementById("imageOnRight").src = photoListRight[randomRight];
  
    if (displayedPhotosLeft.length === photoListLeft.length && displayedPhotosRight.length === photoListRight.length) {
      alert("All pictures have been played.");
    }
  });
  
  imageRight.addEventListener("click", () => {
    let randomRight;
    do {
      randomRight = Math.floor(Math.random() * photoListRight.length);
    } while (displayedPhotosRight.includes(randomRight));
  
    displayedPhotosRight.push(randomRight);
  
    document.getElementById("imageOnRight").src = photoListRight[randomRight];
    let randomLeft;
    do {
      randomLeft = Math.floor(Math.random() * photoListLeft.length);
    } while (displayedPhotosLeft.includes(randomLeft));
    displayedPhotosLeft.push(randomLeft);
  
    document.getElementById("imageOnLeft").src = photoListLeft[randomLeft];
  
    if (displayedPhotosLeft.length === photoListLeft.length && displayedPhotosRight.length === photoListRight.length) {
      alert("All pictures have been played.");
    }
  });

};

changePicturesLeftAndRight();

/////////////////////////////////////////////////////// LANSCAPE PHOTOS /////////////////////////////////////////////////////////////

let winnerNewzealand = ""
let winnerItaly = ""
let winnerHawaii = ""
let winnerNepal = ""
let winnerBolivia = ""
let winnerUtah = ""

/////////////////////////////////////////////// TRASH ////////////////////////////////////////////////

// alert(`France: ${points["France"]}\nItaly: ${points["Italy"]}\nJapan: ${points["Japan"]}\nUSA: ${points["USA"]}`);



// function changePicturesLeftAndRight() {


//   var displayedPhotos = [];

//   // LEFT PICTURES
//   let imageLeft = document.getElementById("imageLeft");
//   imageLeft.addEventListener("click", () => {

//     let randomLeft = Math.floor(Math.random() * photoList);
//     photoList = photoList.filter(photo => photo !== randomLeft);
//     // let randomRight = Math.floor(Math.random() * photoList.length);
//     // while (randomLeft === randomRight) {
//     //   alert("Hello Test Same Picture");
//     //   randomRight = Math.floor(Math.random() * photoList.length);
//     // }
//     if (!displayedPhotos.includes(randomLeft)) { // IF DISPLAYED DOESN'T INCLUDS THE RANDOM THEN, ELSE
//       // displayedPhotos.push(randomRight);  
//       displayedPhotos.push(randomLeft);
//       alert("not played again");
//     } else {
//       randomLeft = Math.floor(Math.random() * photoList.length);
//       alert("already played");
//     };

//     let randomIndex = Math.floor(Math.random() * photoList);

//     while (displayedPhotos.includes(randomIndex)) {
//       randomIndex = Math.floor(Math.random() * photoList.length);
//     }


//     // if (randomRight === randomLeft) {  
//     //   alert("Hello Test Same Picture");
//     //   randomRight = Math.floor(Math.random() * photoList.length);
//     //   randomLeft = Math.floor(Math.random() * photoList.length);
//     // };
//     // while (randomRight === previousRight || randomRight === previousLeft) { 
//     //     randomRight = Math.floor(Math.random() * photoList.length);  
//     // };
//     // while (randomLeft === previousLeft || randomLeft === previousRight) {
//     //     randomLeft = Math.floor(Math.random() * photoList.length);
//     // };
//     if (photoList.length == displayedPhotos.length) { // USE THIS AS A START FOR CALCULATE WINNER COUNTRY
//       alert("Hello Test All images displayed");
//       return;
//     };

//     // document.getElementById("imageOnRight").src = photoList[randomRight];
//     document.getElementById("imageOnLeft").src = photoList[randomLeft];

//   });

//   // RIGHT PICTURES
//   // let imageRight = document.getElementById("imageRight");  
//   // imageRight.addEventListener("click", () => {
//   //     let randomLeft = Math.floor(Math.random() * photoList.length);
//   //     let randomRight = Math.floor(Math.random() * photoList.length);
//   //     while (randomLeft === randomRight) {
//   //       alert("Hello Test Same Picture");
//   //       randomRight = Math.floor(Math.random() * photoList.length);
//   //     }
//   //     document.getElementById("imageOnLeft").src = photoList[randomLeft];
//   //     document.getElementById("imageOnRight").src = photoList[randomRight];
//   // });
// }

// changePicturesLeftAndRight();




   
// if (!displayedPhotos.includes(randomLeft) || !displayedPhotos.includes(randomRight) ){



















