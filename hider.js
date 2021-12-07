// ==UserScript==
// @name         Liquidpedia bracket result hider
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
    var bracketScores = document.getElementsByClassName('bracket-score');
    for (let i = 0; i < bracketScores.length; i += 1) {
        console.log('aaron was here!');
        bracketScores[i].style.display = "none";
    }
    
    
    document.getElementsByClassName('bracket-popup-body');

})();
