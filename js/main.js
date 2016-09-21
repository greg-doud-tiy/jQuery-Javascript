// function setHeader() {
//   $("h1").text("Something else");
// }
// $(document).ready(setHeader);

var triesLeft = 6;
// Random number between 1 and 100
var answer = Math.floor(Math.random() * 100) + 1;

$(document).ready(function() {
  var tryBox = $("#try-count");
  var resultMessage = $(".result");

  resultMessage.hide();

  // console.log("a");
  $("#record-guess").click(function() {
    console.log("Clicked button");

    triesLeft--;
    tryBox.text("Tries left: " + triesLeft);

    var guess = Number( $("#guess").val() );
    console.log("guess", guess);

    $("#guess").removeClass("invalid");

    var result;
    if (guess > answer) {
      result = "High";
    } else if (guess < answer){
      result = "Low";
    } else if (isNaN(guess)) {
      // Invalid guess
      $("#guess").addClass("invalid");
      // FIXME: don't update tries
    } else {
      result = "Correct";
      resultMessage.text("You win!").show();
    }

    if (triesLeft === 0 && guess !== answer) {
      resultMessage.
        text("You lose. Answer is " + answer + ".").
        show();

      $("#record-guess").attr("disabled", "disabled");
    }

    var newRow = $("<tr><td>" + guess + "</td></tr>");
    var newCell = $("<td>" + result + "</td>");
    newRow.append( newCell );

    // var html = "<tr><td>" + guess + "</td>";
    // html += "<td>" + result + "</td>";
    // html += "</tr>";
    // var newRow = $(html);

    $("table").prepend( newRow );
  });

  tryBox.text("Tries left: " + triesLeft);
});
