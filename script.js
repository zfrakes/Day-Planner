$(document).ready(function() {
  $(".saveBtn").on("click", function() {
    debugger;
    console.log(this);
    var value = $(this)
      .siblings(".description")
      .val();
    // var time = $(this)
    //   .siblings(".hour")
    //   .text();
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

  const currentTime = moment(new Date());
  const currentHour = parseInt(currentTime.format("HH"));
  const currentMins = currentTime.format("mm");

  $("#currentDay").text(currentTime.format("dddd MMMM DD,YYYY"));

  //select all hour divs
  const hourDivs = $("[id^=hour-]");
  $.each(hourDivs, function(index, value) {
    //debugger;
    var color = "grey";
    var id = parseInt(
      $(value)
        .attr("id")
        .replace("hour-", "")
    );
    if (id === currentHour) {
      color = "red";
    }
    if (id > currentHour) {
      color = "green";
    }
    console.log(id, currentHour, color);
    $(value)
      .find("textarea")
      .css("background-color", color);
  });
});