'use strict';
'use strict';
// Variables Inputs and Buttons
const charactersInput = document.getElementById('characters-inpt');
const comicsInput = document.getElementById('comics-inpt');
const seriesInput = document.getElementById('series-inpt');
const eventsInput = document.getElementById('events-inpt');
const creatorsInput = document.getElementById('creators-inpt');
const charactersBtn = document.querySelector('.search-chars');
const comicsBtn = document.querySelector('.search-comics')
const seriesBtn = document.querySelector('.search-series');
const eventsBtn = document.querySelector('.search-events');
const creatorsBtn = document.querySelector('.search-creators');
//Clear Buttons to clear search Input
const charactersClearBtn = document.querySelector('.clear-chars');
const comicsClearBtn = document.querySelector('.clear-comics')
const seriesClearBtn = document.querySelector('.clear-series');
const eventsClearBtn = document.querySelector('.clear-events');
const creatorsClearBtn = document.querySelector('.clear-creators');

//Modal box close button
const closeBox = document.querySelector('.close-empty');
/* When user enter input value the called function checks if input (empty, true value);
first case displays error message and the second opens related webpage with results
 */

//EventListeners for the search and clear buttons

/* Characters clear and search */
charactersBtn.addEventListener('click', function () {
    if (charactersInput.value == '') {
        document.querySelector('.empty-input').style.display = "block";
    } else {
        localStorage.setItem('charValue', charactersInput.value);
        window.open('characters.html');
    }
});
charactersClearBtn.addEventListener('click', function () {
    charactersInput.value = '';//clear characters Input field
});



 /* Comics clear and search  */
 comicsBtn.addEventListener('click', function () {
    if (comicsInput.value == '') {
        document.querySelector('.empty-input').style.display = "block";
    } else {
        localStorage.setItem('comicValue', comicsInput.value);
        window.open('comics.html');
    }
});
comicsClearBtn.addEventListener('click', function () {
    comicsInput.value = '';//clear comics Input field
});




/* Series clear and search */ 
seriesBtn.addEventListener('click', function () {
    if (seriesInput.value == '') {
        document.querySelector('.empty-input').style.display = "block";
    } else {
        localStorage.setItem('seriesValue', seriesInput.value);
        window.open('series.html');
    }
 });
seriesClearBtn.addEventListener('click', function () {
    seriesInput.value = '';//clear series Input field
});




/*Events clear and search*/ 
eventsBtn.addEventListener('click', function () { 
    if (eventsInput.value == '') {
        document.querySelector('.empty-input').style.display = "block";
    } else {
        localStorage.setItem('eventValue', eventsInput.value);
        window.open('./events.html');
    }
});
eventsClearBtn.addEventListener('click', function () {
    eventsInput.value = '';//clear events Input field
});




/*  Creators clear and search */
creatorsBtn.addEventListener('click', function () {
    if (creatorsInput.value == '') {
        document.querySelector('.empty-input').style.display = "block";
    } else {
        localStorage.setItem('creatorValue', creatorsInput.value);
        window.open('./creators.html');
    }
 });
creatorsClearBtn.addEventListener('click', function () {
    creatorsInput.value = '';//clear creators Input field
});


 //Close Modal Box
 closeBox.addEventListener('click', function () {
    document.querySelector('.error-box').style.display = "none";
})