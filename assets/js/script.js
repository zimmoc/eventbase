document.addEventListener("DOMContentLoaded", function () {

    console.log("loaded DOM");
    createDatePicker();

    const apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?';
    const apiKey = 'apikey=Hf0KqGJKBsqkawRAf25zge6dH6S2t2EA';

    let eventsList = [];

    function fetchData(keyword) {
        fetch(apiUrl + `keyword=${keyword}&` + apiKey)
            .then((response) => {
                return response.json();
            })

            .then((data) => {
                eventsList = data._embedded.events;
                console.log(eventsList);
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


    function createDatePicker() {
        const inputCalendar = document.getElementById('input-calendar');

        const datePicker = document.createElement('input');
        datePicker.type = 'date';
        datePicker.id = 'datePicker';
        datePicker.style.display = 'display';
        datePicker.classList.add('calendarStyle');

        inputCalendar.appendChild(datePicker);

    }




    function searchResult() {
        let searchList = document.getElementsByClassName('info-box')[0];
        searchList.classList.add('resultsList');
        searchList.classList.remove('info-box');

        /* for (let i = 0; i < eventsList.length; i++) {
            const eventName = eventsList[i].name || 'Event Name Not Specified';

            let htmlContent = `
            <h3>${eventName}</h3>
            `;

            searchList.innerHTML = htmlContent;

        }
        */

        let htmlContent;


        eventsList.forEach((concert) =>
            htmlContent += `
            <div class="searchResult">
                    <h3 class="searchName">${concert.name}</h3>
                    <p class="dateResult">${concert.dates.start.localDate}</p>
                <div class="resultInfo">
                    <span class="orange-rect"></span>
                    <p></p>
                    <p></p>
                </div>
                <div class="resultTickets">
                    <span class="orange-rect"></span>
                    <p></p>
                    <p></p>
                </div>
            </div>
            `

        );

        searchList.innerHTML = htmlContent;
    }

});