// ==UserScript==
// @name         Liquidpedia bracket results hider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://liquipedia.net/*
// @icon         https://www.google.com/s2/favicons?domain=liquipedia.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // hide bracket score
    var bracketScores = document.getElementsByClassName('bracket-score');
    for (let i = 0; i < bracketScores.length; i += 1) {
        console.log('hiding bracket score');
        bracketScores[i].style.display = "none";
    }

    // hide bracket popup body
    var bracketPopupBody = document.getElementsByClassName('bracket-popup-body');
    for (let i = 0; i < bracketPopupBody.length; i += 1) {
        console.log('hiding bracket popup body');
        bracketPopupBody[i].style.display = "none";
    }

    // hide teams in the bracket to show when clicked
    var teamBrackets = document.getElementsByClassName('team-template-team-bracket');
    for (let i = 0; i < teamBrackets.length; i += 1) {
        console.log('hiding team bracket');
        teamBrackets[i].style.display = "none";
    }
})();


// in case i need to do something like this
//teamBrackets[i].addEventListener('click', function(event){
//   event.path[1].style.display = "none";
// });
