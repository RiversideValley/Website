document.querySelector('#shareBtn')
.addEventListener('click', event => {

    // Fallback, Tries to use API only
    // if navigator.share function is
    // available
    if (navigator.share) {
        navigator.share({

            // Title that occurs over
            // web share dialog
            title: 'GeeksForGeeks',

            // URL to share
            url: 'https://geeksforgeeks.org'
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(err => {

            // Handle errors, if occured
            console.log(
            "Error while using Web share API:");
            console.log(err);
        });
    } else {

        // Alerts user if API not available 
        alert("Browser doesn't support this API !");
    }
})