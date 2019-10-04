$(document).ready(function() {

// Set up Firebase
let firebaseConfig = {
    apiKey: "AIzaSyB8EzaW9n1pK5Zf1Gtt2HGXDn9oBjJv1Q4",
    authDomain: "train-scheduler-4515b.firebaseapp.com",
    databaseURL: "https://train-scheduler-4515b.firebaseio.com",
    projectId: "train-scheduler-4515b",
    storageBucket: "",
    messagingSenderId: "557159151534",
    appId: "1:557159151534:web:69be4b1264f684131efa3f"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   // Assign Firebase data to variable
   let database = firebase.database();

   // Click event to add new train data to database
   $("#add-train-btn").on("click", function(event) {
        event.preventDefault();

        // Grab data from user input & assign to variables
        let trainName = $("#train-name-input").val().trim();
        let destination = $("#destination-input").val().trim();
        let firstTrain = $("#first-train-input").val().trim();
        let frequency = $("#frequency-input").val().trim();

        // Assign this data to an object that can be added to database
        let newTrain = {
            name: trainName,
            destination: destination,
            firstTrain: firstTrain,
            frequency: frequency
        };

        // Push new object to database
        database.ref().push(newTrain);

        // Clear input fields
        $("#train-name-input").val("");
        $("#destination-input").val("");
        $("#first-train-input").val("");
        $("#frequency-input").val("");
   });

   // Get Firebase info every time it's added to database
   database.ref().on("child_added", function(snapshot) {
       let trainName = snapshot.val().name;
       let destination = snapshot.val().destination;
       let firstTrain = snapshot.val().firstTrain;
       let frequency = snapshot.val().frequency;

       // Calculate Next Arrival
       let nextArrival;

       // Calculate Mins Away
       let minsAway;

       // Create new table rows with database info
       let newRow = $("<tr>").append(
           $("<td>").text(trainName),
           $("<td>").text(destination),
           $("<td>").text(frequency),
           $("<td>").text(),
           $("<td>").text()
       );
   });

})