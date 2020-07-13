
var tbody = d3.select('#main-table')

var filterbutton = d3.select('#filter-btn');
filterbutton.on('click', tablefilter);

var clearbutton = d3.select('#clear-filter-btn')
clearbutton.on('click', clearfilter)

function build(table){
    var row = tbody.append('tr')
    var sightingValue = Object.values(table)
    sightingValue.forEach(sighting => {
       var cell = row.append('td')
       cell.text(sighting)
   }); 
};

function tablefilter(){
    tbody.html("");
    var filtereddata = data
/*
    var idarray = ['datetime','city','state','shape']
    idarray.forEach(htmlID => {
        var idElement = d3.select(`#${htmlID}`)
        var idValue = idElement.property('value') 
        console.log(`tabe length before filtering: ${filtereddata.length}`)//debug 
        console.log(`value to be filtered by: ${idValue}`)//debug
        console.log(`object key to use: ${htmlID}`)//debug
        if (idValue !="") {
            filtereddata = filtereddata.filter(sighting => sighting.htmlID == idValue)
            //console.log(`this is the object: ${sighting}`)//debug
            console.log(`table lenght after filtering: ${filtereddata.length}`)//debug
        } 
    })    

    */
    var dateElement = d3.select('#datetime')
    var dateValue = dateElement.property('value')  
    if (dateValue !="") {
        filtereddata = filtereddata.filter(sighting => sighting.datetime == dateValue)
    }

    var cityElement = d3.select('#city')
    var cityValue = cityElement.property('value')
    if (cityValue !=""){
        filtereddata = filtereddata.filter(sighting => sighting.city == cityValue)
    }

    var stateElement = d3.select('#state')
    var stateValue = stateElement.property('value')
    if (stateValue != ""){
        filtereddata = filtereddata.filter(sighting => sighting.state == stateValue)
    }

    var shapeElement = d3.select('#shape')
    var shapeValue = shapeElement.property('value')
    if (shapeValue != ""){
        filtereddata = filtereddata.filter(sighting => sighting.shape == shapeValue)
    } 
    filtereddata.forEach(build)
};

function clearfilter(){
    tbody.html("");
    data.forEach(build)
    document.getElementById("my-form").reset();
    filtereddata = []
};

data.forEach(sightingobjects => {
  build(sightingobjects)
});