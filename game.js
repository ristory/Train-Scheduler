  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDS6aEn66tLvN2EYYIphJz1BDU4jChwn6U",
    authDomain: "train-scheduler-c51bb.firebaseapp.com",
    databaseURL: "https://train-scheduler-c51bb.firebaseio.com",
    projectId: "train-scheduler-c51bb",
    storageBucket: "train-scheduler-c51bb.appspot.com",
    messagingSenderId: "1001015335893"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var name = $("#train-name").val();
  var des = $("#destination").val();    
  var time = $("#time-start").val();
  var fre = $("#frequency").val();


$(".btn").on("click", function(event) {
    event.preventDefault();

    database.ref().set({
        Trainnameval: name,
        Destinationval: des,
        Frequencyval: fre,
        Timeval: time
      });

      database.ref().on("value", function(value) {
            

      });
    var table = $("<tr>");
    var trainame = $("<td>" + "John " + "</td>");
    var destination = $("<td>" + "John"  + "</td>");
    var frequency = $("<td>" + "John"  + "</td>");
    var arrival = $("<td>" + "John " + "</td>");
    var timeaway = $("<td>" + "John"  + "</td>");
    table.append(trainame);
    table.append(destination);
    table.append(frequency);
    table.append(arrival);
    table.append(timeaway);
    $("tbody").append(table);

})

