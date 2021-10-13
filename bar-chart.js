//so now we can setup a total width of the grid. and a total width and height of a grid box.

$(init);

function init() {
  const barChart = "#bar-chart";
  $(barChart).css("backgroundColor", "lightblue");
  $("<div>", {
    id: "some-id",
    class: "bar",
    width: "10%", //can manipulate width and height
    height: "100%",
  }).appendTo(barChart); //can add x amount of bars
  $("<div>", {
    id: "p",
    class: "bar",
    width: "10%",
    height: "20%",
  }).appendTo(barChart);

  $("#p").css("background-color", "yellow");
  $(barChart).css("gap", "50%"); //can manipulate spacing
}

//.width() gets or sets width
