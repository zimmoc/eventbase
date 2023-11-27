document.addEventListener("DOMContentLoaded", function () {

    console.log("loaded DOM");
    createDatePicker();

    const apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?';
    const apiKey = 'apikey=Hf0KqGJKBsqkawRAf25zge6dH6S2t2EA';

    let eventsList = [];

    function fetchData(keyword) {
        fetch(apiUrl + `keyword=${keyword}&` + 'sort=date,name,asc&' + apiKey)
            .then((response) => {
                return response.json();
            })

            .then((data) => {
                eventsList = data._embedded.events;
                searchResult();
            });


    };

    /**
     * Get keyword and date from the input box when pressing enter
     */
    document.getElementById('keywordInput').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const keyword = document.getElementById('keywordInput').value;
            console.log("Input registered");

            fetchData(keyword);

        }
    });


    /* function createDatePicker() {
         const inputCalendar = document.getElementById('input-calendar');
 
         const datePicker = document.createElement('input');
         datePicker.type = 'date';
         datePicker.id = 'datePicker';
         datePicker.style.display = 'display';
         datePicker.classList.add('calendarStyle');
 
         inputCalendar.appendChild(datePicker);
 
     }
     */




    function searchResult() {
        let searchList = document.getElementsByClassName('info-box')[0];
        searchList.classList.add('resultsList');
        searchList.classList.remove('info-box');



        let htmlContent = '';
        console.log(eventsList[0]);

        /**
         * Loops through the eventsList array and creates a html div for each event with sub values.
         * 
         * The ternary operators are required to get the values because they
         * return "undefined" without doing truthy checks on all values in
         * the path. It just works.
         * There might be an other solution, but I havent found one.
         */
        eventsList.forEach((concert) =>
            htmlContent += `
            <div class="searchResult">

                <img src="${concert.images[0].url}">
                <div class="columns">
                    <div class="searchTitle">
                        <h3 class="searchName">${concert.name}</h3>
                    </div>
                <div class="resultRows">
                    <span class="orange-box"></span>
                    <div class="resultInfo">


                        <p>Venue: ${concert._embedded && concert._embedded.venues && concert._embedded.venues[0] ? concert._embedded.venues[0].name : ''}</p >

                        <p>${concert._embedded && concert._embedded.venues && concert._embedded.venues[0] ? concert._embedded.venues[0].city.name : ''}, ${concert._embedded && concert._embedded.venues && concert._embedded.venues[0] ? concert._embedded.venues[0].country.countryCode : ''}</p>
                        
                    </div>
                    <span class="orange-box"></span>
                    <div class="resultCountry">
                        <p class="dateResult">${concert.dates && concert.dates.start ? concert.dates.start.localDate : ''}</p>

                        <p class="venueResult"> 
                        ${concert.classifications && concert.classifications[0] && concert.classifications[0].genre ? concert.classifications[0].genre.name : ''}</p>
                    </div>
                    <span class="orange-box"></span>
                    <div class="resultTickets">


                            <p id="shorten">Tickets sales: ${concert.sales && concert.sales.public ? concert.sales.public.startDateTime : ''}</p>
                            <p>Buy tickets: <a href="${concert.url}" target="_blank">Ticketmaster</a></p>

                    </div>
                    
                </div>
                </div>
            </div>
        `

        );

        searchList.innerHTML = htmlContent;
    }

});;;