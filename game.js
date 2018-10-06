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
var name = "";
var des = "";
var time = "";
var fre = "";


$(".btn").on("click", function (event) {
    event.preventDefault();
    name = $("#train-name").val();
    des = $("#destination").val();
    time = $("#time-start").val();
    fre = $("#frequency").val();
    var newTrain = {
        Trainnameval: name,
        Destinationval: des,
        Frequencyval: fre,
        Timeval: time,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    };
    database.ref().push(newTrain);
    alert("New Train successfully added");
    $("#train-name").val("");
    $("#destination").val("");
    $("#time-start").val("");
    $("#frequency").val("");
})
database.ref().on("child_added", function (value) {
    var tFrequency = value.val().Frequencyval;
    var firstTime = value.val().Timeval;
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    var currentTime = moment(value.val().dateAdded).format("hh:mm");
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    var tRemainder = diffTime % tFrequency;
    var tMinutesTillTrain = tFrequency - tRemainder;
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");

    var table = $("<tr>");
    var trainame = $("<td>" + value.val().Trainnameval + "</td>");
    var destination = $("<td>" + value.val().Destinationval + "</td>");
    var frequency = $("<td>" + tFrequency + "</td>");
    var arrival = $("<td>" + moment(nextTrain).format("HH:mm") + "</td>");
    var timeaway = $("<td>" + tMinutesTillTrain + "</td>");
    table.append(trainame);
    table.append(destination);
    table.append(frequency);
    table.append(arrival);
    table.append(timeaway);
    $("tbody").append(table);
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
