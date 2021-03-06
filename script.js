$(document).ready(function() {
  $(".saveBtn").on("click", function() {
    console.log(this);
    var value = $(this)
      .siblings(".description")
      .val();

    var time = $(this)
      .parent()
      .attr("id");
    localStorage.setItem(time, value);
  });

  Object.keys(localStorage).forEach(function(id) {
    const row = $("#" + id);
    if (row.length) {
      $(row)
        .find("textarea")
        .val(localStorage.getItem(id));
    }
  });

  var currentTime = moment(new Date());
  var currentHour = parseInt(currentTime.format("HH"));
  var currentMins = currentTime.format("mm");

  $("#currentDay").text(currentTime.format("dddd MMMM DD,YYYY"));

  //select all hour divs
  var hourDivs = $("[id^=hour-]");
  $.each(hourDivs, function(index, value) {
    
    var color = "dddddd";
    var id = parseInt(
      $(value)
        .attr("id")
        .replace("hour-", "")
    );
    if (id === currentHour) {
      color = "e89da2";
    }
    if (id > currentHour) {
      color = "d4ebd0";
    }
    console.log(id, currentHour, color);
    $(value)
      .find("textarea")
      .css("background-color", color);
  });
});