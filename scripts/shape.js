function Shape(name, shape, color, bordercolor){
    this.name = name;
    this.shape = shape;
    this.color = color || "blue";
    this.bordercolor = bordercolor || "lightblue";

    this.table = function(){
        var table = document.createElement("table");
        table.style.borderCollapse = "collapse";
        for (var row = 0;  row < this.shape.length; row++){
            var row_el = document.createElement("tr");
            for (var col = 0; col < this.shape[row].length; col++){
                var col_el = document.createElement("td");
                col_el.style.width = "20px";
                col_el.style.height = "20px";
                if (this.shape[row][col]){
                    col_el.style.backgroundColor = this.color;
                    col_el.style.borderColor = this.bordercolor;
                    col_el.style.borderStyle = "solid";
                    col_el.style.borderWidth = "1";
                }
                row_el.appendChild(col_el);
            }
            table.appendChild(row_el);
        }
        return table;
    }
    return this;
}
