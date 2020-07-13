
var tbody = d3.select('#main-table')
var filterbutton = d3.select('#filter-btn');
var clearbutton = d3.select('#clear-filter-btn')

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
    var id_array = ['datetime','city','state','shape']
    id_array.forEach(ID => {
        var id_Element = d3.select(`#${ID}`)
        var id_Value = id_Element.property('value') 
        if (id_Value !="") {
            filtereddata = filtereddata.filter(sighting =>sighting[`${ID}`] == id_Value)} 
    });  
    filtereddata.forEach(build)
};

function clearfilter(){
    tbody.html("");
    data.forEach(build)
    document.getElementById("my-form").reset();
    filtereddata = []
};

data.forEach(table => {
  build(table)
});
filterbutton.on('click', tablefilter);
clearbutton.on('click', clearfilter);