let arrayScoretNewzealand = []
let arrayScoreIceland = []
let arrayScoreHawaii = []
let arrayScoreNepal = []
let arrayScoreBolivia = []
let arrayScoreUtah = []

let photosNewzealand = ""; ""; ""; "";
let photosIceland = ""; ""; ""; "";
let photosHawaii = ""; ""; ""; "";
let photosNepal = ""; ""; ""; "";
let photosBolivia = ""; ""; ""; "";
let photosUtah = ""; ""; ""; "";

// lancement des premières photos
const startTheGame = () => {

}

// évènements sur les clicks de sélection --> chargement des nouveaux duos de photos et suppression des photos passées
const eventOnClick = () => {
    
}

// conditions de fin (remplissage des tableaux) et du calcul du pays gagnant
const calculateWinnerCountry = () => {
    for (let i=O; i <= arrayScoretNewzealand.length; i++){
        if ([i] > 3){
            console.log("You should go to New Zealand")
        } 
    }
    for (let i=O; i <= arrayScoreIceland.length; i++){
        if (arrayScoreIceland[i] > 3){
            console.log("You should go to Iceland")
        } 
    }
    for (let i=O; i <= arrayScoreHawaii.length; i++){
        if (arrayScoreHawaii[i] > 3){
            console.log("You should go to Hawaii")
        } 
    }
    for (let i=O; i <= arrayScoreNepal.length; i++){
        if (arrayScoreNepal[i] > 3){
            console.log("You should go to Nepal")
        } 
    }
    for (let i=O; i <= arrayScoreBolivia.length; i++){
        if (arrayScoreBolivia[i] > 3){
            console.log("You should go to Bolivia")
        } 
    }
    for (let i=O; i <= arrayScoreUtah.length; i++){
        if (arrayScoreUtah[i] > 3){
            console.log("You should go to Utah")
        } 
    }
    
}

// fin de jeu
const endingTheGame = () => {

}



