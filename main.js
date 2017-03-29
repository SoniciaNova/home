//SoniciaNova website programming by Andrew Alban, 2016.
//This code is property of SoniciaNova. Piracy of this code is illegal.

//Define variables:

//Initial function:

function init() {
	replace('<div id="header"><a href="https://sonicianova.github.io/home"><img src="website_title.png" id="website_title" /></a></div><div id="navBar"><a href="https://sonicianova.github.io/games"><div class="navButton" type="button" id="gamesButton">GAMES</div></a><a href="https://sonicianova.github.io/home"><div class="navButton" type="button" id="homeButton">HOME</div></a><a href="https://sonicianova.github.io/programs"><div class="navButton" type="button" id="programsButton">PROGRAMS</div></a></div><br><br><h1>Welcome to SoniciaNova!</h1><p>Here you can find quality games and programs that are quite useful and addictive! You should really check them out! </p><p>We just released a new game, "Press the Arrow," and it is quite fun and challenging! It is a fast-paced skill game that you should definitely play. </p><a href="https://sonicianova.github.io/press_the_arrow"><div class="playButton" id="ptaButton">PLAY NOW</div></a><p>We just released a "Login" for SoniciaNova! Create an account here:</p><a href="https://sonicianova.github.io/signin"><div class="playButton" id="ptaButton">SIGN UP</div></a>'); //This code creates the basic elements of the website.
}

//Tools:

function replace(object) { //This replaces what is currently inside of the mainContainer.
	document.getElementById("mainContainer").innerHTML = object;
}
