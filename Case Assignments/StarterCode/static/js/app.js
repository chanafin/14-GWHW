
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("button");

tableData.forEach((sightings) => {
  var row = tbody.append("tr");
  Object.entries(sightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

function DateSearch(){
  tbody.html('');
  var inputField = d3.select("input");
  var inputValue = inputField.property("value");
  var matches = tableData.filter(sighting => sighting.datetime == inputValue);
  matches.forEach((sighting)=> {
   var row = tbody.append("tr");
   Object.entries(sighting).forEach(([key, value])=> {
     var cell = row.append("td");
     cell.text(value);
    })
  })
};

button.on("click", DateSearch);
