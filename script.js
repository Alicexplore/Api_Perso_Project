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

/////////////////////////////////////////////////////// TRYING OBJECTS /////////////////////////////////////////////////////////////

// let pictures = [

//         {
//           file: ["./bolivia/bolivia1.jpg", "./bolivia/bolivia2.jpg", "./bolivia/bolivia3.jpg", "./bolivia/bolivia4.jpg"],
//           country: "bolivia",
//           }, 
//         {
//           file: ["./hawaii/hawaii1.jpg", "./hawaii/hawaii2.jpg", "./hawaii/hawaii3.jpg", "./hawaii/hawaii4.jpg"],
//           country: "hawaii",
//           }, 
//         {
//           file: ["./italy/italy1.jpg", "./italy/italy2.jpg", "./italy/italy3.jpg", "./italy/italy4.jpg"],
//           country: "italy",
//           }, 
//         {
//           file: ["./nepal/nepal1.jpg", "./nepal/nepal2.jpg", "./nepal/nepal3.jpg", "./nepal/nepal.jpg"],
//           country: "nepal",
//           },
//         {
//           file: ["./newzealand/newzealand1.jpg", "./newzealand/newzealand2.jpg", "./newzealand/newzealand3.jpg", "./newzealand/newzealand4.jpg"],
//           country: "newzealand",
//           },
//         {
//           file: ["./utah/utah1.jpg", "./utah/utah2.jpg", "./utah/utah3.jpg", "./utah/utah4.jpg"],
//           country: "utah",
//           }
//    ]


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

/////////////////////////////////////////////////////// ARRAY OF PICTURES RIGHTSIDE /////////////////////////////////////////////////////////////

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

  var displayedPhotos = [];

  let imageLeft = document.getElementById("imageLeft");
  let imageRight = document.getElementById("imageRight");

  imageLeft.addEventListener("click", () => {
    let randomLeft;
    do {
      randomLeft = Math.floor(Math.random() * photoListLeft.length);
    } while (displayedPhotos.includes(randomLeft));
  
    displayedPhotos.push(randomLeft);
  
    document.getElementById("imageOnLeft").src = photoListLeft[randomLeft];
    let randomRight;
    do {
      randomRight = Math.floor(Math.random() * photoListRight.length);
    } while (displayedPhotos.includes(randomRight));
    displayedPhotos.push(randomRight);
     
    document.getElementById("imageOnRight").src = photoListRight[randomRight];
  
    if (displayedPhotos.length === photoListLeft.length && displayedPhotos.length === photoListRight.length) {
      alert("All pictures have been played.");
    }
  });
  
  imageRight.addEventListener("click", () => {
    let randomRight;
    do {
      randomRight = Math.floor(Math.random() * photoListRight.length);
    } while (displayedPhotos.includes(randomRight));
  
    displayedPhotos.push(randomRight);
  
    document.getElementById("imageOnRight").src = photoListRight[randomRight];
    let randomLeft;
    do {
      randomLeft = Math.floor(Math.random() * photoListLeft.length);
    } while (displayedPhotos.includes(randomLeft));
    displayedPhotos.push(randomLeft);
  
    document.getElementById("imageOnLeft").src = photoListLeft[randomLeft];
  
    if (displayedPhotos.length === photoListLeft.length && displayedPhotos.length === photoListRight.length) {
      alert("All pictures have been played.");
    }
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

/////////////////////////////////////////////////////// LANSCAPE PHOTOS /////////////////////////////////////////////////////////////

// landscapephotographies

let winnerNewzealand = ""
let winnerItaly = ""
let winnerHawaii = ""
let winnerNepal = ""
let winnerBolivia = ""
let winnerUtah = ""

/////////////////////////////////////////////// TRASH ////////////////////////////////////////////////


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



















