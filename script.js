// window pop up
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

let photoList = ["newzealand/newzealand1.jpg","newzealand/newzealand2.jpg","newzealand/newzealand3.jpg", "newzealand/newzealand4.jpg",
"italy/italy1.jpg","italy/italy2.jpg","italy/italy3.jpg","italy/italy4.jpg", "hawaii/hawaii1.jpg","hawaii/hawaii2.jpg","hawaii/hawaii3.jpg",
"hawaii/hawaii4.jpg","nepal/nepal1.jpg","nepal/nepal2.jpg","nepal/nepal3.jpg","nepal/nepal4.jpg","bolivia/bolivia1.jpg","bolivia/bolivia2.jpg",
"bolivia/bolivia3.jpg","bolivia/bolivia4.jpg","utah/utah1.jpg","utah/utah2.jpg","utah/utah3.jpg","utah/utah4.jpg"]

let photosNewzealand = ["newzealand/newzealand1.jpg","newzealand/newzealand2.jpg","newzealand/newzealand3.jpg","newzealand/newzealand4.jpg"]
let photosItaly = ["italy/italy1.jpg","italy/italy2.jpg","italy/italy3.jpg","italy/italy4.jpg"]
let photosHawaii = ["hawaii/hawaii1.jpg","hawaii/hawaii2.jpg","hawaii/hawaii3.jpg","hawaii/hawaii4.jpg"]
let photosNepal = ["nepal/nepal1.jpg","nepal/nepal2.jpg","nepal/nepal3.jpg","nepal/nepal4.jpg"]
let photosBolivia = ["bolivia/bolivia1.jpg","bolivia/bolivia2.jpg","bolivia/bolivia3.jpg","bolivia/bolivia4.jpg"]
let photosUtah = ["utah/utah1.jpg","utah/utah2.jpg","utah/utah3.jpg","utah/utah4.jpg"]

// organize informations (of counties/photos) to search for

let newzealand = {
  photos : ["newzealand/newzealand1.jpg","newzealand/newzealand2.jpg","newzealand/newzealand3.jpg","newzealand/newzealand4.jpg"],
  country : "New Zealand"
}

let italy = {
  photos : ["italy/italy1.jpg","italy/italy2.jpg","italy/italy3.jpg","italy/italy4.jpg"],
  country : "Italy"
}

let hawaii = {
  photos : ["hawaii/hawaii1.jpg","hawaii/hawaii2.jpg","hawaii/hawaii3.jpg","hawaii/hawaii4.jpg"],
  country : "Hawaii"
}

let nepal = {
  photos : ["nepal/nepal1.jpg","nepal/nepal2.jpg","nepal/nepal3.jpg","nepal/nepal4.jpg"],
  country : "Nepal"
}

let bolivia = {
  photos : ["bolivia/bolivia1.jpg","bolivia/bolivia2.jpg","bolivia/bolivia3.jpg","bolivia/bolivia4.jpg"],
  country : "Bolivia"
}

let utah = {
  photos : ["utah/utah1.jpg","utah/utah2.jpg","utah/utah3.jpg","utah/utah4.jpg"],
  country : "Utah"
}

// get scores

let scoreNewzealand = 0
let scoreItaly = 0
let scoreHawaii = 0
let scoreNepal = 0
let scoreBolivia = 0
let scoreUtah = 0

// delete photos after clicks

let trashPhotos = []

// function of changing pictures from Left to Right

let changePicturesLeftAndRight = () => {

let titleLeft = document.getElementById("titleLeft1");
titleLeft.addEventListener("click", () => {
    alert("Hello Test Left");
    const random = Math.floor(Math.random() * 23) + 1;
    document.getElementById("imageOnRight").src = photoList[random];
    if ( )  
}); 

let titleRight = document.getElementById("titleRight1");
titleRight.addEventListener("click", () => {
    alert("Hello Test Right");
    const random = Math.floor(Math.random() * 23) + 1;
    document.getElementById("imageOnRight").src = photoList[random];
    // trashPhotos.push;
});


};

changePicturesLeftAndRight();

// not have the same choice of pictures between right and left

// trying recursivity for changing photos / get scores / put in trash function

const gameIsStartin = () => {
    
}

// calcul du pays gagnant --> au dernier clic

const calculateWinnerCountry = () => {
  for (let i = O; i <= scoreNewzealand.length; i++) {
    if (scoreNewzealand[i] > 3) {
      console.log("You should go to New Zealand");
    }
  }
  for (let i = O; i <= scoreItaly.length; i++) {
    if (scoreItaly[i] >= 3) {
      console.log("You should go to Italy");
    }
  }
  for (let i = O; i <= scoreHawaii.length; i++) {
     if (scoreHawaii[i] >= 3) {
      console.log("You should go to Hawaii");
    }
  }
  for (let i = O; i <= scoreNepal.length; i++) {
    if (scoreNepal[i] >= 3) {
      console.log("You should go to Nepal");
    }
  }
  for (let i = O; i <= scoreBolivia.length; i++) {
    if (scoreBolivia[i] >= 3) {
      console.log("You should go to Bolivia");
}
  }
  for (let i = O; i <= scoreUtah.length; i++) {
    if (scoreUtah[i] >= 3) {
      console.log("You should go to Utah");
    
    } else if (scoreNewzealand === 3 && scoreBolivia === 3 && scoreHawaii === 3 &&  scoreItaly === 3 && scoreUtah === 3 && scoreNepal === 3) { 
      console.log("nothing is very clear on our side, focus and start again.");
    
    } else (scoreNewzealand < 3 && scoreBolivia < 3 && scoreHawaii < 3 && scoreItaly < 3 && scoreUtah < 3 && scoreNepal < 3) 
      console.log("nothing is very clear on our side, focus and start again.");
  } 
};

// fin de jeu
// landscape photographies

let winnerNewzealand = ""
let winnerItaly = ""
let winnerHawaii = ""
let winnerNepal = ""
let winnerBolivia = ""
let winnerUtah = ""

const endingTheGame = () => {
  
}





// random photos left
// const randomPhoto = (choosePhoto) => {
//   let choosePhoto = photosNepal[Math.floor(Math.random() * photosNepal.length)] ; 
    //  alert(choosePhoto);
// }

   
// imageLeft.addEventListener("mouseover","mouseleave" () => { // TOP TOP TOP
//     alert("hello");
// });



// let titleRight = document.getElementById("titleRight1");
// titleRight.addEventListener("click", () => {
//     alert("Hello Test Right");
//     // for (let i = 0; i < )
//     // scoreItaly++; 
//     const random = Math.floor(Math.random() * 23) + 1;
//     document.getElementById("imageOnRight").src = photoList[random];
//     // imageOnRight.src = './utah/utah2.jpg'; 
//     // trashPhotos.push;
// });


// change image little function trying

// function changeImage(image) {
//   image.src = './italy/italy2.jpg';
// }