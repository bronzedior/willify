const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})

let bestSellerArray = ["assets/songs/Espresso.png", "assets/songs/End_of_Beginning.png", "assets/songs/We_Can't_Be_Friends.png", "assets/songs/Saturn.png", "assets/songs/Beautiful_Things.png", "assets/songs/As_It_Was.png", "assets/songs/Mood.png", "assets/songs/Ghost.png"]

let bestSellerActiveIndex = 0
let bestSellerActiveImage1 = document.querySelector(".best-active-image1")
let bestSellerActiveImage2 = document.querySelector(".best-active-image2")
let bestSellerActiveImage3 = document.querySelector(".best-active-image3")
let bestSellerActiveImage4 = document.querySelector(".best-active-image4")
let bestSellerActiveImage5 = document.querySelector(".best-active-image5")

function changeBestSellerImage(step){
    bestSellerActiveIndex += step
    if(bestSellerActiveIndex >= bestSellerArray.length){
        bestSellerActiveIndex = 0
    }
    else if(bestSellerActiveIndex < 0){
        bestSellerActiveIndex = bestSellerArray.length - 1
    }

    bestSellerActiveImage1.src = bestSellerArray[(bestSellerActiveIndex) % bestSellerArray.length];
    bestSellerActiveImage2.src = bestSellerArray[(bestSellerActiveIndex + 1) % bestSellerArray.length];
    bestSellerActiveImage3.src = bestSellerArray[(bestSellerActiveIndex + 2) % bestSellerArray.length];
    bestSellerActiveImage4.src = bestSellerArray[(bestSellerActiveIndex + 3) % bestSellerArray.length];
    bestSellerActiveImage5.src = bestSellerArray[(bestSellerActiveIndex + 4) % bestSellerArray.length];
}

let recommendationArray = ["assets/songs/One_of_The_Girls.png", "assets/songs/redrum.png", "assets/songs/Nonsense.png", "assets/songs/Kingslayer.png", "assets/songs/Silence.png", "assets/songs/Starboy.png", "assets/songs/Rover.png", "assets/songs/Swim.png"]

let recommendationActiveIndex = 0
let recommendationActiveImage1 = document.querySelector(".recommendation-active-image1")
let recommendationActiveImage2 = document.querySelector(".recommendation-active-image2")
let recommendationActiveImage3 = document.querySelector(".recommendation-active-image3")
let recommendationActiveImage4 = document.querySelector(".recommendation-active-image4")
let recommendationActiveImage5 = document.querySelector(".recommendation-active-image5")

function changeRecommendationImage(step){
    recommendationActiveIndex += step
    if(recommendationActiveIndex >= recommendationArray.length){
        recommendationActiveIndex = 0
    }
    else if(recommendationActiveIndex < 0){
        recommendationActiveIndex = recommendationArray.length - 1
    }

    recommendationActiveImage1.src = recommendationArray[(recommendationActiveIndex) % recommendationArray.length];
    recommendationActiveImage2.src = recommendationArray[(recommendationActiveIndex + 1) % recommendationArray.length];
    recommendationActiveImage3.src = recommendationArray[(recommendationActiveIndex + 2) % recommendationArray.length];
    recommendationActiveImage4.src = recommendationArray[(recommendationActiveIndex + 3) % recommendationArray.length];
    recommendationActiveImage5.src = recommendationArray[(recommendationActiveIndex + 4) % recommendationArray.length];
}

let lyricsArray = [
    {
      image: "assets/lyrics/Wish_You_Were_Sober.png",
      title: "Wish You Were Sober",
      content: `Nineteen, but you act twenty-five now <br>
                Knees weak, but you talk pretty fly, wow <br>
                Ripped jeans and a cup that you just downed <br>
                Take me where the music ain't too loud <br>
                Trade drinks, but you don't even know her <br>
                Save me 'til the party is over <br>
                Kiss me in the seat of your Rover <br>
                Real sweet, but I wish you were sober`,
      audio: "assets/lyrics/Wish_You_Were_Sober.mp3",
      artist: "Conan Gray"
    },
    {
      image: "assets/lyrics/driving_license.png",
      title: "drivers license",
      content: `And I know we weren't perfect <br>
                but I've never felt this way for no one <br>
                And I just can't imagine how you could be <br> 
                so okay now that I'm gone <br>
                I guess you didn't mean <br>
                what you wrote in that song about me <br>
                'Cause you said forever, <br>
                now I drive alone past your street`,
      audio: "assets/lyrics/driving_license.mp3",
      artist: "Olivia Rodrigo"          
    },
    {
      image: "assets/lyrics/Rewrite_the_Stars.png",
      title: "Rewrite the Stars",
      content: `How do we rewrite the stars? <br>
                Say you were made to be mine <br>
                And nothin' can keep us apart <br>
                'Cause you are the one I was meant to find <br>
                It's up to you, and it's up to me <br>
                No one could say what we get to be <br>
                And why don't we rewrite the stars? <br>
                Changin' the world to be ours`,
      audio: "assets/lyrics/Rewrite_the_Stars.mp3",
      artist: "James Arthur"
    }
  ];

    let lyricsActiveIndex = 0;
    let lyricsActiveImage = document.querySelector(".lyrics-active-image");
    let lyricsTitle = document.getElementById("lyrics-title");
    let lyricsContent = document.getElementById("lyrics-content");
    let audioElement = document.getElementById("lyrics-audio");
    let audioSource = document.getElementById("audio-source");
    let lyricsArtist = document.getElementById("lyrics-artist");

    function changeLyrics(step){
        lyricsActiveIndex += step;
        if(lyricsActiveIndex >= lyricsArray.length){
            lyricsActiveIndex = 0;
        }else if(lyricsActiveIndex < 0){
            lyricsActiveIndex = lyricsArray.length - 1;
        }
    
        let activeLyrics = lyricsArray[lyricsActiveIndex];
        lyricsActiveImage.src = activeLyrics.image;
        lyricsTitle.textContent = activeLyrics.title;
        lyricsContent.innerHTML = `<p>${activeLyrics.content}</p>`;
        audioSource.src = activeLyrics.audio;
        audioElement.load();
        lyricsArtist.textContent = activeLyrics.artist;
    }


    document.querySelector("#show-login").addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(".popup").classList.add("popup-active");
    });

    document.querySelector(".popup .close-btn").addEventListener("click", function(){
        document.querySelector(".popup").classList.remove("popup-active");
    });

    function validateForm() {
        let isValid = true;
      
        let username = document.getElementById("username").value;
        if (username.length < 8 || username.length > 16) {
          document.getElementById("error-username").innerHTML = "Username must be 8-16 characters";
          isValid = false;
        } else {
          document.getElementById("error-username").innerHTML = "";
        }
      
        let email = document.getElementById("email").value;
        if (!email.endsWith("@gmail.com")) {
          document.getElementById("error-email").innerHTML = "Email must end with @gmail.com";
          isValid = false;
        } else {
          document.getElementById("error-email").innerHTML = "";
        }

        let password = document.getElementById("password").value;
        if (!alphanumeric(password)) {
          document.getElementById("error-password").innerHTML = "Password must be alphanumeric";
          isValid = false;
        } else {
          document.getElementById("error-password").innerHTML = "";
        }

        let dob = document.getElementById("dob").value;
        if (!dob) {
          document.getElementById("error-dob").innerHTML = "Please enter your date of birth";
          isValid = false;
        } else {
          document.getElementById("error-dob").innerHTML = "";
        }

        let genderMan = document.getElementById("gender-man").checked;
        let genderWoman = document.getElementById("gender-woman").checked;
        if (!genderMan && !genderWoman) {
          document.getElementById("error-gender").innerHTML = "Please select your gender";
          isValid = false;
        } else {
          document.getElementById("error-gender").innerHTML = "";
        }
      
        return isValid;
      }
      
      function alphanumeric(input) {
        let isAlpha = false;
        let isNumeric = false;
      
        for (let i = 0; i < input.length; i++) {
          if (isNaN(input[i])) {
            isAlpha = true;
          } else {
            isNumeric = true;
          }
        }
      
        return isAlpha && isNumeric;
      }
      