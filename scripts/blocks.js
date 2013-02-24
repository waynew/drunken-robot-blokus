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
     ["One Piece", one],
     ["Two Piece", two ],
     ["Three L", vee_three ],
     ["Three Piece", el_three ],
     ["Small T", tee_four ],
     ["Block", oh ],
     ["Little L", big_el_four ],
     ["Four Piece", el_four ],
     ["S Piece", zee_four ],
     ["Weird F Piece", eff ],
     ["Plus", eggs ],
     ["Turtle", pee ],
     ["Zig-zag", double_ewe ],
     ["Big S", zee_five ],
     ["That one piece", why ],
     ["Long L", big_el_five ],
     ["Hat", ewe ],
     ["Big T", tee_five ],
     ["Big L", vee_five ],
     ["Long S", en ],
     ["Five Piece", el_five ],
     ];

function do_it(){
    for(var i = 0; i < shapes.length; i++){
        var table = document.createElement("table");

        var heading = document.createElement('h3');
        heading.innerText = shapes[i][0];
        document.getElementById("blocks").appendChild(heading);

        table.style.borderCollapse = "collapse";
        add_shape(shapes[i][1], table, 'red', 'pink');
        document.getElementById("blocks").appendChild(table);
    }
}
