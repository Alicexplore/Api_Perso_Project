let photosNewzealand = ["","","",""]
let photosIceland = ["","","",""]
let photosHawaii = ["","","",""]
let photosNepal = ["","","",""]
let photosBolivia = ["","","",""]
let photosUtah = ["","","",""]

let scoreNewzealand = 0
let scoreIceland = 0
let scoreHawaii = 0
let scoreNepal = 0
let scoreBolivia = 0
let scoreUtah = 0

// lancement des premières photos // nécessaire ?
const startTheGame = () => {

}

// évènements sur les clicks de sélection --> chargement des nouveaux duos de photos et suppression des photos passées
const eventOnClick = () => {

    if ( photosNewzealand.addEventListener === true) { //for all countries
        scoreNewzealand++;
    } 
}

// calcul du pays gagnant --> au dernier clic
const calculateWinnerCountry = () => {

    for (let i = O; i <= arrayScoretNewzealand.length; i++){
        if ([i] > 3){
            console.log("You should go to New Zealand");
        } 
    }
    for (let i = O; i <= arrayScoreIceland.length; i++){
        if (arrayScoreIceland[i] >= 3){
            console.log("You should go to Iceland");
        } 
    }
    for (let i = O; i <= arrayScoreHawaii.length; i++){
        if (arrayScoreHawaii[i] >= 3){
            console.log("You should go to Hawaii");
        } 
    }
    for (let i = O; i <= arrayScoreNepal.length; i++){
        if (arrayScoreNepal[i] >= 3){
            console.log("You should go to Nepal");
        } 
    }
    for (let i = O; i <= arrayScoreBolivia.length; i++){
        if (arrayScoreBolivia[i] >= 3){
            console.log("You should go to Bolivia");
        } 
    }
    for (let i = O; i <= arrayScoreUtah.length; i++){
        if (arrayScoreUtah[i] >= 3){
            console.log("You should go to Utah");
        } 
    }
    
}

// fin de jeu
const endingTheGame = () => {

}



