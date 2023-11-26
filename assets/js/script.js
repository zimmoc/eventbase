document.addEventListener("DOMContentLoaded", function () {

    console.log("loaded DOM");

    const apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?';
    const apiKey = 'apikey=Hf0KqGJKBsqkawRAf25zge6dH6S2t2EA';

    let eventsList;

    function fetchData(keyword) {
        fetch(apiUrl + `keyword=${keyword}&` + apiKey)
            .then((response) => {
                return response.json();
            })

            .then((data) => {
                eventsList = data;
                console.log(eventsList);
            });
        searchResult();
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

        inputCalendar.addEventListener('click', function () {
            datePicker.style.display = datePicker.style.display === 'none' ? 'block' : 'none';
        });
    }

    createDatePicker();


    function searchResult() {
        document.getElementsByClassName('info-box')[0].innerHTML = "";

    }

});