// ==UserScript==
// @name         Remove Posts by Keyword
// @namespace    http://example.com/
// @version      0.1
// @description  Remove posts that contain a specific keyword
// @author       Your Name
// @match        https://www.ebay-kleinanzeigen.de/*
// @grant        none
// ==/UserScript==
// also block this script with ublock https://static.ebay-kleinanzeigen.de/static/js/search-*.js

(function() {
    'use strict';
    // remove lazyload
    const classToRemove = "lazyload-item";
    const liElements = document.querySelectorAll("li");
    liElements.forEach(function(li) {
        li.classList.remove(classToRemove);
    });

    // remove posts
    const words = ['gesuch', 'sucht', 'suche', 'tausch', 'untermiete', 'unterver', 'zwischenmiete', 'möbliert', 'studenten'];
    words.forEach(function(word) {
        // Get all of the posts on the page
        const posts = document.querySelectorAll('.ad-listitem');

        // Iterate over the posts
        for (let i = 0; i < posts.length; i++) {
            // Get the content of the post
            const postContent = posts[i].textContent;

            // If the post contains the keyword, remove it from the page
            if (postContent.toLowerCase().includes(word)) {
                posts[i].style.display = 'none';
                //posts[i].remove();
            }
        }
    });

    const imageBoxes = document.querySelectorAll('.imagebox.srpimagebox');

    imageBoxes.forEach(imageBox => {
        const imgSrc = imageBox.dataset.imgsrc;
        const imgSrcRet = imageBox.dataset.imgsrcretina;
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.srcset = imgSrcRet;
        imageBox.appendChild(imgElement);
    });
})();
