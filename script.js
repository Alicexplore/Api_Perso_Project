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

var scores = {
  "Australia": 0,
  "Bolivia": 0,
  "Cuba": 0,
  "Hawaii": 0,
  "Iceland": 0,
  "India": 0,
  "Italy": 0,
  "Japan": 0,
  "Kenya": 0,
  "Nepal": 0,
  "Newzealand": 0,
  "Utah": 0
};

let scoresString = "";
for (var [key, value] of Object.entries(scores)) {
  scoresString += `${key}: ${value}\n`;
}


/////////////////////////////////////////////////////// TRYING OBJECTS /////////////////////////////////////////////////////////////

var photoList = {
  "Australia": ["./australia/australia1.jpg", "./australia/australia2.jpg", "./australia/australia3.jpg", "./australia/australia4.jpg"],
  "Bolivia": ["./bolivia/bolivia1.jpg", "./bolivia/bolivia2.jpg", "./bolivia/bolivia3.jpg", "./bolivia/bolivia4.jpg"],
  "Cuba": ["./cuba/cuba1.jpg", "./cuba/cuba2.jpg", "./cuba/cuba3.jpg", "./cuba/cuba4.jpg"],
  "Hawaii": ["./hawaii/hawaii1.jpg", "./hawaii/hawaii2.jpg", "./hawaii/hawaii3.jpg", "./hawaii/hawaii4.jpg"],
  "Iceland": ["./iceland/iceland1.jpg", "./iceland/iceland2.jpg", "./iceland/iceland3.jpg", "./iceland/iceland4.jpg"],
  "India": [ "./india/india1.jpg", "./india/india2.jpg", "./india/india3.jpg", "./india/india4.jpg"],
  "Italy": ["./italy/italy1.jpg", "./italy/italy2.jpg", "./italy/italy3.jpg", "./italy/italy4.jpg"],
  "Japan": [ "./japan/japan1.jpg", "./japan/japan2.jpg", "./japan/japan3.jpg", "./japan/japan4.jpg"],
  "Kenya": ["./kenya/kenya1.jpg", "./kenya/kenya2.jpg", "./kenya/kenya3.jpg", "./kenya/kenya4.jpg"],
  "Nepal": ["./nepal/nepal1.jpg", "./nepal/nepal2.jpg", "./nepal/nepal3.jpg", "./nepal/nepal.jpg"],
  "Newzealand": ["./newzealand/newzealand1.jpg", "./newzealand/newzealand2.jpg", "./newzealand/newzealand3.jpg", "./newzealand/newzealand4.jpg"],
  "Utah": ["./utah/utah1.jpg", "./utah/utah2.jpg", "./utah/utah3.jpg", "./utah/utah4.jpg"]
};


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

/////////////////////////////////////////////////////// CHANGING PICTURES /////////////////////////////////////////////////////////////

function changePicturesLeftAndRight() {

  let displayedPhotosLeft = [];
  let displayedPhotosRight = [];

  let imageLeft = document.getElementById("imageLeft");
  let imageRight = document.getElementById("imageRight");

  // PHOTOS LEFT  

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

    
    if (displayedPhotosLeft.length === photoListLeft.length - 1 && displayedPhotosRight.length === photoListRight.length - 1) {
      alert("All pictures have been played."); // HERE WROTE THE EVENT TO DISPLAY THE SCORES // CAREFUL +-1
      // alert(scoresString);
    }

  });
  
  // PHOTOS RIGHT

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

    if (displayedPhotosLeft.length === photoListLeft.length - 1 && displayedPhotosRight.length === photoListRight.length - 1) {
      alert("All pictures have been played."); // HERE WROTE THE EVENT TO DISPLAY THE SCORES // CAREFUL +-1
      // alert(scoresString);
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



// const photoToCountry = {
//   "France": ["photo1.jpg", "photo2.jpg"],
//   "Italy": ["photo3.jpg", "photo4.jpg"],
//   "Japan": ["photo5.jpg", "photo6.jpg"],
//   "USA": ["photo7.jpg", "photo8.jpg"]
//   // ...
// };

// const points = {
//   "France": 0,
//   "Italy": 0,
//   "Japan": 0,
//   "USA": 0
//   // ...
// };

// const displayedPhotos = [];

// const imageLeft = document.getElementById("imageLeft");

// imageLeft.addEventListener("click", () => {
//   let randomLeft = Math.floor(Math.random() * photoListLeft.length);
//   let photoName = photoListLeft[randomLeft];
//   if (!displayedPhotos.includes(randomLeft)) {
//     displayedPhotos.push(randomLeft);

//     let country = Object.keys(photoList).find(key => photoList[key].includes(photoName));
//     scores[country] += 1;
//     alert(`You earned a point for ${country}!`);
    
//     if (displayedPhotos.length === photoListLeft.length) {
//       let scoreString = "Scores:\n";
//       for (let country in points) {
//         scoreString += `${country}: ${points[country]}\n`;
//       }
//       alert(scoreString);
//     }
//   } else {
//     alert("already played");
//     return;
//   }
// });



















