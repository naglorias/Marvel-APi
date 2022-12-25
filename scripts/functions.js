'use strict';

//Variables: List of inputs and search buttons 

const singleInput = document.querySelector('.single-output input');
const categoryInput = document.querySelector('.byId-output input');
const categoryOptions = document.getElementById('byId');

//Clear Buttons
const clearInputBtn = document.querySelector('.clear');
const clearAllBtn = document.querySelector('.clear-all');

//Container for Showing the Results
const resultsContainer = document.querySelector('.results-flex');


// API KEY and Hash KEY 
const apiKey = "*****************************";//YOUR PUBLIC API KEY
const hash = "*******************************";// YOUR Hash 


//Modal box close button
const closeBox = document.querySelector('.close-empty');

//Retrieving Characters Function
const requestCharactersList = () => {
    let inputValue = localStorage.getItem('charValue');
    fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${inputValue}&limit=20&ts=1&apikey=${apiKey}&hash=${hash}`)
        .then(response => response.json())
        .then(response => {
            if (response.data.total == 0) {
                alert('No results found');
            } else if (response.data.total > 0) {
                console.log(response);
                response.data.results.forEach(result => {
                    resultsContainer.insertAdjacentHTML('beforeend', `
                <div class="result-cell">
                <div class="result-image">
                    <img src="${result.thumbnail.path}.jpg" alt="img">
                </div>
                <div class="result-details">
                   <div class="result-name">
                       <h2>Name:${result.name}</h2>
                   </div>
                   <div class="result-id">
                       <h2>Id:${result.id}</h2>
                   </div>
               </div>
            </div>
                `)
                })
            }



        })
        .catch(error => console.log(error));
    localStorage.clear();

}

//Retrieving Comics Function
const requestComicsList = () => {
    let inputValue = localStorage.getItem('comicValue');
    fetch(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${inputValue}&limit=20&ts=1&apikey=${apiKey}&hash=${hash}`)
        .then(response => response.json())
        .then(response => {
            if (response.data.total == 0) {
                alert('No results found');
            }
            else if (response.data.total > 0) {
                console.log(response);
                response.data.results.forEach(result => {
                    resultsContainer.insertAdjacentHTML('beforeend', `
                <div class="result-cell">
                <div class="result-image">
                <img src="${result.thumbnail.path}.jpg" alt="img">  
                </div>
                <div class="result-details">
                <div class="result-name">
                    <h2>Name:${result.title}</h2>
                </div>
                <div class="result-id">
                    <h2>Id:${result.id}</h2>
                </div>
                <div class="issue-no">
                    <h2>Issue number:${result.issueNumber}</h2>
                </div>
                <div class="pages">
                    <h2>Pages count:${result.pageCount}Pages</h2>
                </div>
                </div>
                </div>
        `)
                })
            }
        })
        .catch(error => console.log(error))
    localStorage.clear();
}

//Retrieving Series Function
const requestSeriesList = () => {
    let inputValue = localStorage.getItem('seriesValue');
    fetch(`https://gateway.marvel.com:443/v1/public/series?titleStartsWith=${inputValue}&limit=20&ts=1&apikey=${apiKey}&hash=${hash}`)
        .then(response => response.json())
        .then(response => {
            if (response.data.total == 0) {
                alert('No results found');
            }
            else if (response.data.total > 0) {
                console.log(response);
                response.data.results.forEach(result => {
                    resultsContainer.insertAdjacentHTML('beforeend', `   
            <div class="result-cell">
                <div class="result-image">
                   <img src="${result.thumbnail.path}.jpg" alt="">
                </div>
                <div class="result-details">
                <div class="result-name">
                    <h2>Name:${result.title}</h2>
                </div>
                <div class="result-id">
                    <h2>Id:${result.id}</h2>
                </div>
                <div class="start-end-years">
                    <h2> Start year:${result.startYear}</h2>
                    <h2>End year:${result.endYear}</h2>
                </div>
                </div>
                </div> `)
                })
            }
        })
        .catch(error => console.log(error));
    localStorage.clear();
}

//Retrieving Events Function
const requestEventsList = () => {
    let inputValue = localStorage.getItem('eventValue');
    fetch(`https://gateway.marvel.com:443/v1/public/events?nameStartsWith=${inputValue}&limit=20&ts=1&apikey=${apiKey}&hash=${hash}`)
        .then(response => response.json())
        .then(response => {
            if (response.data.total == 0) {
                alert('No results found');
            }
            else if (response.data.total > 0) {
                response.data.results.forEach(result => {
                    resultsContainer.insertAdjacentHTML('beforeend', `
            <div class="result-cell">
             <div class="result-image">
                 <img src="${result.thumbnail.path}.jpg" alt="img">
             </div>
             <div class="result-details">
                <div class="result-name">
                    <h2>Name:${result.title}</h2>
                </div>
                <div class="result-id">
                    <h2>Id:${result.id}</h2>
                </div>
                <div class="description">
            <p>Description:${result.description}</p>
            </div>
            </div>
         </div>
            `)
                });
            }
        })
        .catch(error => console.log(error));
    localStorage.clear();
}


//Retrieving Creators Function
const requestCreatorsList = () => {
    let inputValue = localStorage.getItem('creatorValue');
    fetch(`https://gateway.marvel.com:443/v1/public/creators?firstName=${inputValue}&limit=20&ts=1&apikey=${apiKey}&hash=${hash}`)
        .then(response => response.json())
        .then(response => {
            if (response.data.total == 0) {
                alert('No results found');
            }
            else if (response.data.total > 0) {
                console.log(response);
                response.data.results.forEach(result => {
                    resultsContainer.insertAdjacentHTML('beforeend', `
         <div class="result-cell">
             <div class="result-image">
                 <img src="${result.thumbnail.path}.jpg" alt="img">
             </div>
             <div class="result-details">
                 <div class="first-name">
                    <h2>First name:${result.firstName}</h2>
                 </div>
                 <div class="last-name">
                    <h2>Last name: ${result.lastName}</h2>
                 </div>
                <div class="result-id">
                    <h2>Id: ${result.id}</h2>
                </div>
            </div>
         </div>
        `)
                });
            }
        })
        .catch(error => console.log(error));
    localStorage.clear();
}
/* **************************************************************************** */
/* ********************************Single Output Requests********************************* */
/* **************************************************************************** */


//Retrieving single character
const singleRequest = (category) => {
    let idValue = singleInput.value;
    resultsContainer.innerHTML = '';
    if (idValue == "") {
        document.querySelector('.empty-input').style.display = "block";
    }
    else (fetch(`https://gateway.marvel.com:443/v1/public/${category}/${idValue}?&ts=1&apikey=${apiKey}&hash=${hash}`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (category == "characters") {
                response.data.results.forEach(result => {
                    resultsContainer.insertAdjacentHTML('beforeend', `
                   <div class="result-cell">
                    <div class="result-image">
                    <img src="${result.thumbnail.path}.jpg" alt="img">
                    </div>
                    <div class="result-details">
                       <div class="result-name">
                       <h2>Name:${result.name}</h2>
                       </div>
                       <div class="result-id">
                           <h2>Id:${result.id}</h2>
                       </div>
                   </div>
                </div>
                   `)
                });
            }
            else if (category == "creators") {
                response.data.results.forEach(result => {
                    resultsContainer.insertAdjacentHTML('beforeend', `
                   <div class="result-cell">
                    <div class="result-image">
                    <img src="${result.thumbnail.path}.jpg" alt="img">
                    </div>
                    <div class="result-details">
                       <div class="result-name">
                       <h2>Name:${result.fullName}</h2>
                       </div>
                       <div class="result-id">
                           <h2>Id:${result.id}</h2>
                       </div>
                   </div>
                </div>
                   `)
                });
            }
            else if (category == "stories") {
                response.data.results.forEach(result => {
                    resultsContainer.insertAdjacentHTML('beforeend', `
                   <div class="result-cell">
                   <div class="result-image">
                           <img src="./imgs/no-image.png" alt="img">
                           </div>
                    <div class="result-details">
                       <div class="result-name">
                       <h2>Name:${result.title}</h2>
                       </div>
                       <div class="result-id">
                           <h2>Id:${result.id}</h2>
                       </div>
                   </div>
                </div>
                   `)
                });
            }
            else {
                response.data.results.forEach(result => {
                    resultsContainer.insertAdjacentHTML('beforeend', `
                   <div class="result-cell">
                   <div class="result-image">
                   <img src="${result.thumbnail.path}.jpg" alt="img">
                   </div>
                    <div class="result-details">
                       <div class="result-name">
                       <h2>Name:${result.title}</h2>
                       </div>
                       <div class="result-id">
                           <h2>Id:${result.id}</h2>
                       </div>
                   </div>
                </div>
                   `)
                })
            }

        })
        .catch(error => console.error(error)));
}



/* **************************************************************************** */
/* ********************************Category By Id Request********************************* */
/* **************************************************************************** */


//Get Category ById
const requestById = (category) => {
    let catInputValue = categoryInput.value;
    resultsContainer.innerHTML = "";
    if (catInputValue == "") {
        document.querySelector('.empty-input').style.display = "block";
    }
    else {
        if (categoryOptions.value == "categories") {
            alert('Please select a category');
        } else {
            fetch(`https://gateway.marvel.com:443/v1/public/${category}/${catInputValue}/${categoryOptions.value}?&ts=1&apikey=${apiKey}&hash=${hash}`)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    if (response.data.total == 0) {
                        alert('No data found');
                    }
                    if (categoryOptions.value == "characters") {
                        response.data.results.forEach(result => {
                            resultsContainer.insertAdjacentHTML('beforeend', `
                           <div class="result-cell">
                            <div class="result-image">
                            <img src="${result.thumbnail.path}.jpg" alt="img">
                            </div>
                            <div class="result-details">
                               <div class="result-name">
                               <h2>Name:${result.name}</h2>
                               </div>
                               <div class="result-id">
                                   <h2>Id:${result.id}</h2>
                               </div>
                           </div>
                        </div>
                           `)
                        });
                    }
                    else if (categoryOptions.value == "creators") {
                        response.data.results.forEach(result => {
                            resultsContainer.insertAdjacentHTML('beforeend', `
                           <div class="result-cell">
                            <div class="result-image">
                            <img src="${result.thumbnail.path}.jpg" alt="img">
                            </div>
                            <div class="result-details">
                               <div class="result-name">
                               <h2>Name:${result.fullName}</h2>
                               </div>
                               <div class="result-id">
                                   <h2>Id:${result.id}</h2>
                               </div>
                           </div>
                        </div>
                           `)
                        });
                    }
                    else if (categoryOptions.value == "stories") {
                        response.data.results.forEach(result => {
                            resultsContainer.insertAdjacentHTML('beforeend', `
                           <div class="result-cell">
                           <div class="result-image">
                           <img src="./imgs/no-image.png" alt="img">
                           </div>
                            <div class="result-details">
                               <div class="result-name">
                               <h2>Name:${result.title}</h2>
                               </div>
                               <div class="result-id">
                                   <h2>Id:${result.id}</h2>
                               </div>
                           </div>
                        </div>
                           `)
                        });
                    }
                    else {
                        response.data.results.forEach(result => {
                            resultsContainer.insertAdjacentHTML('beforeend', `
                           <div class="result-cell">
                           <div class="result-image">
                           <img src="${result.thumbnail.path}.jpg" alt="img">
                           </div>
                            <div class="result-details">
                               <div class="result-name">
                               <h2>Name:${result.title}</h2>
                               </div>
                               <div class="result-id">
                                   <h2>Id:${result.id}</h2>
                               </div>
                           </div>
                        </div>
                           `)
                        })
                    }
                })

                .catch(error => console.log(error))
        }
    }
};



//Clearing EventListeners
clearInputBtn.addEventListener('click', function () {
    singleInput.value = "";
    categoryInput.value = "";
})

clearAllBtn.addEventListener('click', function () {
    resultsContainer.innerHTML = "";
});


//Close Modal Box
closeBox.addEventListener('click', function () {
    document.querySelector('.error-box').style.display = "none";
})
