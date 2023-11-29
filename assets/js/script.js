document.addEventListener("DOMContentLoaded", function () {


    // Fills date input with todays date as default
    document.getElementById("dateInput").valueAsDate = new Date();

    const apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?';
    const apiKey = 'apikey=Hf0KqGJKBsqkawRAf25zge6dH6S2t2EA';

    let eventsList = [];

    function fetchData(keyword, city, genre, isoDate) {
        fetch(apiUrl + `keyword=${keyword}&` + `city=${city}&` + `startDateTime=${isoDate}&` + `classificationName=${genre}&` + 'sort=relevance,asc&' + apiKey)
            .then((response) => {
                return response.json();

            })

            .then((data) => {
                eventsList = data._embedded.events;
                searchResult();
            })

            .catch(error => {
                searchError();
            });


    };

    /**
     * Get keyword from the input box when pressing enter
     * also gets all the other parameters as a fail safe as to not miss users 
     * custom search
     * &
     * Replaces advanced search button with a static spinner
     */
    document.getElementById('keywordInput').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            let icon = document.getElementById('filter-icons');
            icon.className = 'fa-solid fa-spinner fa-spin';
            const keyword = document.getElementById('keywordInput').value;
            const city = document.getElementById('cityInput').value;
            const genre = document.getElementById('genreInput').value;
            const date = new Date(document.getElementById('dateInput').value);

            // Converts date into format asked by API
            let isoDate = date.toISOString();
            isoDate = isoDate.split('.')[0] + "Z";

            fetchData(keyword, city, genre, isoDate);

        }
    });

    /**
     * Get all input parameters when clicking the search button
     * Also replaces advanced search button with a static spinner
     */
    document.getElementById('search-btn').addEventListener('click', function () {

        let icon = document.getElementById('filter-icons');
        icon.className = 'fa-solid fa-spinner fa-spin';

        const keyword = document.getElementById('keywordInput').value;
        const city = document.getElementById('cityInput').value;
        const genre = document.getElementById('genreInput').value;
        const date = new Date(document.getElementById('dateInput').value);

        let isoDate = date.toISOString();
        isoDate = isoDate.split('.')[0] + "Z";
        fetchData(keyword, city, genre, isoDate);

    });



    /**
     * Show or hide "filter-search" div based on user interaction with icon 
     * in the search bar
     * Also change icon to "up" or "down" arrow depending on div state
     */
    document.getElementById('input-calendar').addEventListener('click', function (event) {

        let collapse = document.getElementById('filter-search');
        let icon = document.getElementById('filter-icons');
        let error = document.getElementById('error-search');

        if (error.style.display == 'flex') {
            error.style.display = 'none';
        }


        if (collapse.style.display == 'none') {
            collapse.style.display = 'block';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else if (collapse.style.display = 'block') {
            collapse.style.display = 'none';
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });


    /**
     * Send user to a clean homepage when clicking logo
     */
    document.getElementById('logo').addEventListener('click', function () {
        window.location.href = "/index.html";

    });


    /**
     * Hides advanced search box and changes the icon to hidden state.
     * Exists only to call when search result are shown
     */
    function closeSearch() {
        let icon = document.getElementById('filter-icons');
        let collapse = document.getElementById('filter-search');
        collapse.style.display = 'none';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    };




    /**
     * Clears info-box html content and replaces it with search results from
     *  API query
     */
    function searchResult() {

        closeSearch();
        let searchList = document.getElementById('dynamicHTML');
        searchList.classList.add('resultsList');
        searchList.classList.remove('info-box');



        let htmlContent = '';

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

        let icon = document.getElementById('filter-icons');
        icon.className = 'fa-solid fa-chevron-down';
    }


    /**
     * Display simple error box under search input if api fetch throws error
     */
    function searchError() {
        const error = document.getElementById('error-search');
        let icon = document.getElementById('filter-icons');

        closeSearch();
        icon.className = 'fa-solid fa-chevron-up';

        error.style.display = 'flex';
    }


    /**
     * Focus input window when clicking on button
     */
    document.getElementById("orange-btn").addEventListener('click', function () {
        document.getElementById('keywordInput').focus();
    });

});
