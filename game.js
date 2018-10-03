$(".btn").on("click", function(event) {
    event.preventDefault();
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