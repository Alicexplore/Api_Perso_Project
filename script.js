// let photosNewzealand = ["newzealand/newzealand1.jpg","newzealand/newzealand2.jpg","newzealand/newzealand3.jpg","newzealand/newzealand4.jpg"];
// let photosItaly = ["italy/italy1.jpg","italy/italy2jpg","italy/italy3.jpg","italy/italy4.jpg"];
// let photosHawaii = ["hawaii/hawaii1.jpg","hawaii/hawaii2.jpg","hawaii/hawaii3.jpg","hawaii/hawaii4.jpg",];
// let photosNepal = ["nepal/nepal1.jpg","nepal/nepal2.jpg","nepal/nepal3.jpg","nepal/nepal4.jpg",];
// let photosBolivia = ["bolivia/bolivia1.jpg","bolivia/bolivia2.jpg","bolivia/bolivia3.jpg","bolivia/bolivia4.jpg",];
// let photosUtah = ["utah/utah1.jpg","utah/utah2.jpg","utah/utah3.jpg","utah/utah4.jpg",];

let scoreNewzealand = 0;
let scoreItaly = 0;
let scoreHawaii = 0;
let scoreNepal = 0;
let scoreBolivia = 0;
let scoreUtah = 0;

let titleLeft = document.getElementById("titleLeft1");
titleLeft.addEventListener("click", () => {
    alert("Hello Test Left");
    scoreNewzealand++; 
       
});

let titleRight = document.getElementById("titleRight1");
titleRight.addEventListener("click", () => {
    alert("Hello Test Right");
    scoreUtah++;   
});



// imageLeft.addEventListener("mouseover","mouseleave" () => { // TOP TOP TOP
//     alert("hello");
// });






// lancement des premières photos // nécessaire ?
// const startTheGame = () => {

// };

// évènements sur les clicks de sélection --> chargement des points dans les variables correspondantes
// const countPointsOnClick = () => {
//   if (photosNewzealand.addEventListener == true) {
//     scoreNewzealand++;
//   } else if (photosItaly.addEventListener == true) {
//     scoreIceland++;
//   } else if (photosHawaii.addEventListener == true) {
//     scoreHawaii++;
//   } else if (photosNepal.addEventListener == true) {
//     scoreNepal++;
//   } else if (photosBolivia.addEventListener == true) {
//     scoreBolivia++;
//   } else (photosUtah.addEventListener == true) 
//     scoreUtah++;  
// };

// évènements sur les clicks de sélection --> chargement de nouvelles photos
// const loadingNewPhotos = () => {
//   for (let i = 0; i = pays.length; i++){
    
//   } 
// };

// calcul du pays gagnant --> au dernier clic
// const calculateWinnerCountry = () => {
//   for (let i = O; i <= scoreNewzealand.length; i++) {
//     if ([i] > 3) {
//       console.log("You should go to New Zealand");
//     }
//   }
//   for (let i = O; i <= scoreItaly.length; i++) {
//     if (arrayScoreItaly[i] >= 3) {
//       console.log("You should go to Italy");
//     }
//   }
//   for (let i = O; i <= scoreHawaii.length; i++) {
//     if (arrayScoreHawaii[i] >= 3) {
//       console.log("You should go to Hawaii");
//     }
//   }
//   for (let i = O; i <= scoreNepal.length; i++) {
//     if (arrayScoreNepal[i] >= 3) {
//       console.log("You should go to Nepal");
//     }
//   }
//   for (let i = O; i <= scoreBolivia.length; i++) {
//     if (arrayScoreBolivia[i] >= 3) {
//       console.log("You should go to Bolivia");
//     }
//   }
//   for (let i = O; i <= scoreUtah.length; i++) {
//     if (arrayScoreUtah[i] >= 3) {
//       console.log("You should go to Utah");
//     }
//   }
  // else if aucuns n'est au dessus ou égal à trois --> console.log("nothing is very clear on our side, focus and start again.")
// };

// fin de jeu
// const endingTheGame = () => {};
