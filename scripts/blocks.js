var one = [[1]];
var two = [[1,1]];
var vee_three = [[1, 1],
                 [0, 1]];
var el_three = [[1, 1, 1]];
var tee_four = [[0, 1, 0],
                [1, 1, 1]];
var oh = [[1, 1],
          [1, 1]];
var big_el_four = [[1, 0 ,0],
                   [1, 1, 1]];
var el_four = [[1, 1, 1, 1]];
var zee_four = [[1, 0],
                [1, 1],
                [0, 1]];
var eff = [[0, 1, 0],
           [1, 1, 1],
           [1, 0, 0]];
var eggs = [[0, 1, 0],
            [1, 1, 1],
            [0, 1, 0]];
var pee = [[1, 1],
           [1, 1],
           [1, 0]];
var double_ewe = [[1, 0, 0],
                  [1, 1, 0],
                  [0, 1, 1]];
var zee_five = [[1, 0, 0],
                [1, 1, 1],
                [0, 0, 1]];
var why = [[1, 1, 1, 1],
           [0, 1, 0, 0]];
var big_el_five = [[1, 1, 1, 1],
                   [1, 0, 0, 0]];
var ewe = [[1, 1, 1],
           [1, 0, 1]];
var tee_five = [[0, 1, 0],
                [0, 1, 0],
                [1, 1, 1]];
var vee_five = [[1, 0, 0],
                [1, 0, 0],
                [1, 1, 1]];
var en = [[0, 1, 1, 1],
          [1, 1, 0, 0]];
var el_five = [[1, 1, 1, 1, 1]];

var table = document.createElement("table");
table.style.borderCollapse = "collapse";

function add_shape(shape, table, color, bordercolor){
    color = color || 'blue';
    bordercolor = bordercolor || "lightblue";
    for (var row = 0;  row < shape.length; row++){
        var row_el = document.createElement("tr");
        for (var col = 0; col < shape[row].length; col++){
            var col_el = document.createElement("td");
            col_el.style.width = "20px";
            col_el.style.height = "20px";
            if (shape[row][col]){
                col_el.style.backgroundColor = color;
                col_el.style.borderColor = bordercolor;
                col_el.style.borderStyle = "solid";
                col_el.style.borderWidth = "1";
            }
            row_el.appendChild(col_el);
        }
        table.appendChild(row_el);
    }
}

var shapes = [
     one ,
     two ,
     vee_three ,
     el_three ,
     tee_four ,
     oh ,
     big_el_four ,
     el_four ,
     zee_four ,
     eff ,
     eggs ,
     pee ,
     double_ewe ,
     zee_five ,
     why ,
     big_el_five ,
     ewe ,
     tee_five ,
     vee_five ,
     en ,
     el_five ,
     ];

function do_it(){
    for(var i = 0; i < shapes.length; i++){
        var table = document.createElement("table");
        table.style.borderCollapse = "collapse";
        add_shape(shapes[i], table, 'red', 'pink');
        document.getElementById("blocks").appendChild(table);
        document.getElementById("blocks").appendChild(document.createElement('hr'));
    }
}
