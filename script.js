let photosNewzealand = ["", "", "", ""];
let photosIceland = ["", "", "", ""];
let photosHawaii = ["", "", "", ""];
let photosNepal = ["", "", "", ""];
let photosBolivia = ["", "", "", ""];
let photosUtah = ["", "", "", ""];

let scoreNewzealand = 0;
let scoreIceland = 0;
let scoreHawaii = 0;
let scoreNepal = 0;
let scoreBolivia = 0;
let scoreUtah = 0;

// lancement des premières photos // nécessaire ?
const startTheGame = () => {

};

// évènements sur les clicks de sélection --> chargement des points dans les variables correspondantes
const countPointsOnClick = () => {
  if (photosNewzealand.addEventListener == true) {
    scoreNewzealand++;
  } else if (photosIceland.addEventListener == true) {
    scoreIceland++;
  } else if (photosHawaii.addEventListener == true) {
    scoreHawaii++;
  } else if (photosNepal.addEventListener == true) {
    scoreNepal++;
  } else if (photosBolivia.addEventListener == true) {
    scoreBolivia++;
  } else (photosUtah.addEventListener == true) 
    scoreUtah++;  
};

// évènements sur les clicks de sélection --> chargement de nouvelles photos
const loadingNewPhotos = () => {
  for (let i = 0; i = pays.length; i++){
    
  } 
};

// calcul du pays gagnant --> au dernier clic
const calculateWinnerCountry = () => {
  for (let i = O; i <= scoreNewzealand.length; i++) {
    if ([i] > 3) {
      console.log("You should go to New Zealand");
    }
  }
  for (let i = O; i <= scoreIceland.length; i++) {
    if (arrayScoreIceland[i] >= 3) {
      console.log("You should go to Iceland");
    }
  }
  for (let i = O; i <= scoreHawaii.length; i++) {
    if (arrayScoreHawaii[i] >= 3) {
      console.log("You should go to Hawaii");
    }
  }
  for (let i = O; i <= scoreNepal.length; i++) {
    if (arrayScoreNepal[i] >= 3) {
      console.log("You should go to Nepal");
    }
  }
  for (let i = O; i <= scoreBolivia.length; i++) {
    if (arrayScoreBolivia[i] >= 3) {
      console.log("You should go to Bolivia");
    }
  }
  for (let i = O; i <= scoreUtah.length; i++) {
    if (arrayScoreUtah[i] >= 3) {
      console.log("You should go to Utah");
    }
  }
  // else if aucuns n'est au dessus ou égal à trois --> console.log("nothing is very clear on our side, focus and start again.")
};

// fin de jeu
const endingTheGame = () => {};
