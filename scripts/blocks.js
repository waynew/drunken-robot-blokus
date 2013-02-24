var one = [[1]];
var two = [[1,1]];
var vee_three = [[1, 1],
                 [0, 1]];
var double_ewe = [[1, 0, 0],
                  [1, 1, 0],
                  [0, 1, 1]];

var table = document.createElement("table");
table.style.borderCollapse = "collapse";

for (var row = 0;  row < double_ewe.length; row++){
    var row_el = document.createElement("tr");
    for (var col = 0; col < double_ewe[row].length; col++){
        var col_el = document.createElement("td");
        col_el.style.width = "20px";
        col_el.style.height = "20px";
        if (double_ewe[row][col]){
            col_el.style.backgroundColor = "blue";
            col_el.style.borderColor = "lightblue";
            col_el.style.borderStyle = "solid";
            col_el.style.borderWidth = "1";
        }
        row_el.appendChild(col_el);
    }
    table.appendChild(row_el);
}

function do_it(){
    document.getElementById("blocks").appendChild(table);
}
