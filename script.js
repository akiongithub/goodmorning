setTimeout(() => {
    var welcome = document.getElementById('welcome');
    welcome.style.visibility = 'hidden';
}, 4000);

setTimeout(() => {
    var intro = document.getElementById('introduction');
    intro.style.visibility = 'visible';
}, 6000);

setTimeout(() => {
    var intro = document.getElementById('introduction');
    intro.style.visibility = 'hidden';
}, 11000);

setTimeout(() => {
    var terms = document.getElementById('agree-to-terms');
    terms.style.visibility = 'visible';
    var box = document.getElementById('check');
    box.style.visibility = 'visible';
}, 12000);

var checkbox = document.getElementById("check");
var continueButton = document.getElementById("continue-button");
var challengeIntro = document.getElementById('challenge_one-intro');
var challengeOne = document.getElementById('challenge_one-explanation');
var challengeTwo = document.getElementById('challenge_one-explanation-two');
var challengeThree = document.getElementById('challenge_one-explanation-three');
var continueText = document.getElementById('continue');
var gameOne = document.getElementById('game-one');
var firstBox = document.getElementById('first-box');


checkbox.addEventListener('change', function() {
        setTimeout(() => {
            var box = document.getElementById('check');
            box.style.visibility = 'hidden';
            var terms = document.getElementById('agree-to-terms');
            terms.style.visibility = 'hidden';
            var levelTwoBackground = document.getElementById('bunny-background');
            levelTwoBackground.style.visibility = 'visible';
        }, 1500);

        setTimeout(() => {
            var levelTwoBackground = document.getElementById('bunny-background');
            levelTwoBackground.style.visibility = 'hidden';
            var bunnyText = document.getElementById('bunny-intermission');
            bunnyText.style.visibility = 'hidden';
            var pinkBackground = document.getElementById('pink-background');
            pinkBackground.style.visibility = 'visible';
        
            continueText.style.visibility = 'visible';
            gameOne.style.visibility = 'visible';
            continueButton.style.visibility = 'visible';
            challengeIntro.style.visibility = 'visible';
            challengeOne.style.visibility = 'visible';
            challengeTwo.style.visibility = 'visible';
            challengeThree.style.visibility = 'visible';
            firstBox.style.visibility = 'visible';
            var boxes = document.getElementsByClassName('boxes');
            for(let i = 0; i < boxes.length; i++){
                boxes[i].style.visibility = 'visible';
            }
            
        }, 8000);



});

var continueButton = document.getElementById("continue-button");
continueButton.addEventListener('change', function() {
    var boxes = document.getElementsByClassName('boxes');
        for(let i = 0; i < boxes.length; i++){
            boxes[i].style.visibility = 'hidden';
        }
    gameOne.style.visibility = 'hidden';
    continueButton.style.visibility = 'hidden';
    continueText.style.visibility = 'hidden';
    gameOne.style.visibility = 'hidden';
    firstBox.style.visibility = 'hidden';
    challengeIntro.style.visibility = 'hidden';
    challengeOne.style.visibility = 'hidden';
    challengeTwo.style.visibility = 'hidden';
    challengeThree.style.visibility = 'hidden';

    var bunnyBackgroundTwo = document.getElementById('bunny-background-two');
    bunnyBackgroundTwo.style.visibility = 'visible';
    var congrats = document.getElementById('congrats');
    congrats.style.visibility = 'visible';
    setTimeout(() => {
        bunnyBackgroundTwo.style.visibility = 'hidden';
        congrats.style.visibility = 'hidden';
        
        var blackBackground = document.getElementById('black-background');
        blackBackground.style.visibility = 'visible';
        var searchFoot = document.getElementById('search-foot');
        searchFoot.style.visibility = 'visible';
    }, 8000);
});