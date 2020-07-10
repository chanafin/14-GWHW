var grades = grades;
var table = d3.select("table");
table.attr("class", "table table-striped");
var tbody = d3.select("tbody");
grades.forEach((studentgrade) => {
    var row = tbody.append("tr");
    var gradeonly = parseInt(studentgrade.grade);
    if (gradeonly <= 60){
      Object.entries(studentgrade).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        cell.classed("bg-danger", true);
      });
    }
    else if (gradeonly >= 60 && gradeonly <= 70){
      Object.entries(studentgrade).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        cell.classed("bg-warning", true);
      });
    }
    else if (gradeonly >= 70){
      Object.entries(studentgrade).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    }
  });

