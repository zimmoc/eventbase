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
    };

    /**
     * Get keyword from the input box when pressing enter
     */
    document.getElementById('keywordInput').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const keyword = document.getElementById('keywordInput').value;
            console.log("Input registered");
            fetchData(keyword);
        }
    });

});