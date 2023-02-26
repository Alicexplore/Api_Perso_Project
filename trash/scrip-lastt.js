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

/////////////////////////////////////////////////////// CHANGING PICTURES /////////////////////////////////////////////////////////////


const count = [
  { name: "Newzeland", points: 0, images: ["./newzealand/newzealand1.jpg", "./newzealand/newzealand2.jpg", "./newzealand/newzealand3.jpg", "./newzealand/newzealand4.jpg"] },
  { name: "Italy", points: 0, images: ["./italy/italy1.jpg", "./italy/italy2.jpg", "./italy/italy3.jpg", "./italy/italy4.jpg"] },
  { name: "Hawaii", points: 0, images: ["./hawaii/hawaii4.jpg", "./hawaii/hawaii4.jpg", "./hawaii/hawaii4.jpg", "./hawaii/hawaii4.jpg"] },
  { name: "Nepal", points: 0, images: ["./nepal/nepal1.jpg", "./nepal/nepal2.jpg", "./nepal/nepal3.jpg", "./nepal/nepal4.jpg"] },
  { name: "Bolivia", points: 0, images: ["./bolivia/bolivia1.jpg", "./bolivia/bolivia2.jpg", "./bolivia/bolivia3.jpg", "./bolivia/bolivia4.jpg"] },
  { name: "Utah", points: 0, images: ["./utah/utah1.jpg", "./utah/utah2.jpg", "./utah/utah3.jpg", "./utah/utah4.jpg"] },
  { name: "Australia", points: 0, images: ["./australia/australia1.jpg", "./australia/australia2.jpg", "./australia/australia3.jpg", "./australia/australia4.jpg"] },
  { name: "Cuba", points: 0, images: ["./cuba/cuba1.jpg", "./cuba/cuba2.jpg", "./cuba/cuba3.jpg", "./cuba/cuba4.jpg"] },
  { name: "Iceland", points: 0, images: ["./iceland/iceland1.jpg", "./iceland/iceland2.jpg", "./iceland/iceland3.jpg", "./iceland/iceland4.jpg"] },
  { name: "India", points: 0, images: ["./india/india1.jpg", "./india/india2.jpg", "./india/india3.jpg", "./india/india4.jpg"] },
  { name: "Kenya", points: 0, images: ["./japan/japan1.jpg", "./japan/japan2.jpg", "./japan/japan3.jpg", "./japan/japan4.jpg"] },
  { name: "Kenya", points: 0, images: ["./kenya/kenya1.jpg", "./kenya/kenya2.jpg", "./kenya/kenya3.jpg", "./kenya/kenya4.jpg"] },
];
  
  // const leftImages = [
  // { path: "./newzealand/newzealand1.jpg", used: false },
  // { path: "./newzealand/newzealand2.jpg", used: false },
  // { path: "./newzealand/newzealand3.jpg", used: false },
  // { path: "./newzealand/newzealand4.jpg", used: false },
  // { path: "./italy/italy1.jpg", used: false },
  // { path: "./italy/italy2.jpg", used: false },
  // { path: "./italy/italy3.jpg", used: false },
  // { path: "./italy/italy4.jpg", used: false },
  // { path: "./hawaii/hawaii1.jpg", used: false },
  // { path: "./hawaii/hawaii2.jpg", used: false },
  // { path: "./hawaii/hawaii3.jpg", used: false },
  // { path: "./hawaii/hawaii4.jpg", used: false },
  // { path: "./nepal/nepal1.jpg", used: false },
  // { path: "./nepal/nepal2.jpg", used: false },
  // { path: "./nepal/nepal3.jpg", used: false },
  // { path: "./nepal/nepal4.jpg", used: false },
  // { path: "./bolivia/bolivia1.jpg", used: false },
  // { path: "./bolivia/bolivia2.jpg", used: false },
  // { path: "./bolivia/bolivia3.jpg", used: false },
  // { path: "./bolivia/bolivia4.jpg", used: false },
  // { path: "./utah/utah1.jpg", used: false },
  // { path: "./utah/utah2.jpg", used: false },
  // { path: "./utah/utah3.jpg", used: false },
  // { path: "./utah/utah4.jpg", used: false },
  // ];
  
  // const rightImages = [
  // { path: "./australia/australia1.jpg", used: false },
  // { path: "./australia/australia2.jpg", used: false },
  // { path: "./australia/australia3.jpg", used: false },
  // { path: "./australia/australia4.jpg", used: false },
  // { path: "./cuba/cuba1.jpg", used: false },
  // { path: "./cuba/cuba2.jpg", used: false },
  // { path: "./cuba/cuba3.jpg", used: false },
  // { path: "./cuba/cuba4.jpg", used: false },
  // { path: "./iceland/iceland1.jpg", used: false },
  // { path: "./iceland/iceland2.jpg", used: false },
  // { path: "./iceland/iceland3.jpg", used: false },
  // { path: "./iceland/iceland4.jpg", used: false },
  // { path: "./india/india1.jpg", used: false },
  // { path: "./india/india2.jpg", used: false },
  // { path: "./india/india3.jpg", used: false },
  // { path: "./india/india4.jpg", used: false },
  // { path: "./japan/japan1.jpg", used: false },
  // { path: "./japan/japan2.jpg", used: false },
  // { path: "./japan/japan3.jpg", used: false },
  // { path: "./japan/japan4.jpg", used: false },
  // { path: "./kenya/kenya1.jpg", used: false },
  // { path: "./kenya/kenya2.jpg", used: false },
  // { path: "./kenya/kenya3.jpg", used: false },
  // { path: "./kenya/kenya4.jpg", used: false },
  // ];

  var leftImage = [
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

var rightImage = [
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
  
  let points = {};

  // Fill in the points object with the countries
  // and initialize all the points to 0
  const countries = ["France", "Spain", "Italy"];
  countries.forEach((country) => {
    points[country] = 0;
  });
  
  // Create an array of image objects with country name and image source path
  const images = [
    { country: "France", src: "path/to/image1.jpg" },
    { country: "Spain", src: "path/to/image2.jpg" },
    { country: "Italy", src: "path/to/image3.jpg" },
    // Add more images and countries as needed
  ];
  
  // Shuffle the images array
  shuffleArray(images);
  
  // Add click event listeners to the images
  imageOnLeft.addEventListener('click', () => {
    const selectedCountry = getImageCountry(leftImage.src);
    points[selectedCountry] += 1;
    displayNextImages();
  });
  
  imageOnRight.addEventListener('click', () => {
    const selectedCountry = getImageCountry(rightImage.src);
    points[selectedCountry] += 1;
    displayNextImages();
  });
  
  function displayNextImages() {
    // Remove the images that have already been shown
    leftImage = leftImage.filter((img) => img !== leftImage.src);
    rightImage = rightImage.filter((img) => img !== rightImage.src);
  
    // If all images have been shown, display the final score
    if (leftImage.length === 0 && rightImage.length === 0) {
      let message = "Final score:\n";
      countries.forEach((country) => {
        message += `${country}: ${points[country]}\n`;
      });
      alert(message);
    } else {
      // Display the next set of random images
      leftImage.src = leftImage[Math.floor(Math.random() * leftImage.length)];
      rightImage.src = rightImage[Math.floor(Math.random() * rightImage.length)];
    }
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function getImageCountry(src) {
    // Find the image object with the matching src
    const image = images.find((img) => img.src === src);
    return image.country;
  }
  

  displayNextImages();






