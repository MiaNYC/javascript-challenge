// from data.js
var tableData = data;

// YOUR CODE HERE!
function tableDisplay(ufoSightings) {
  var tbody = d3.select("tbody");
  ufoSightings.forEach((ufoRecord) => {
    var row = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};


function deleteTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};


console.log(tableData);
tableDisplay(tableData);
