$(document).ready(function() {

    var config = {
        apiKey: "AIzaSyDgr1-7UukEc2ypiM31Tv7GjuoXWGOXueY",
        authDomain: "project-1-c40b2.firebaseapp.com",
        databaseURL: "https://project-1-c40b2.firebaseio.com",
        projectId: "project-1-c40b2",
        storageBucket: "project-1-c40b2.appspot.com",
        // messagingSenderId: "864966500296"
    }; 

    firebase.initializeApp(config);

    var database = firebase.database();

    var name = '';
    var email = '';
    var phoneNumber = 0;
    var price = 0;
    // var timeStamp = 0;

    $('#submit').on('click', function(event) {
        event.preventDefault();

        name = $('#name').val().trim();
        email = $('#email').val().trim();
        phoneNumber = $('#phoneNumber').val();
        price = $('#price').val().trim();
        // timeStamp = firebase.database.ServerValue.TIMESTAMP;

        database.ref().push({
            name,
            email,
            phoneNumber,
            price,
            // timeStamp,
        });

    $('#name').val('');
    $('#email').val('');
    $('#phoneNumber').val('');
    $('#price').val('');
    }); 
}); 






