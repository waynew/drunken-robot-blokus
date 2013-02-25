var blocks = [
    [
     "One Piece",
     [[1]] 
    ],
    [
     "Two Piece",
     [[1, 1]]
    ],
    [
     "Three Piece",
     [[1, 1, 1]]
    ],
    [
     "Four Piece",
     [[1, 1, 1, 1]]
    ],
    [
     "Five Piece",
     [[1, 1, 1, 1, 1]]
    ],
    [
     "Small Corner",
     [[1, 1],
      [0, 1]]
    ],
    [
     "Big Corner",
     [[1, 1, 1],
      [0, 0, 1],
      [0, 0, 1]]
    ],
    [
     "Little Tee",
     [[1, 1, 1],
      [0, 1, 0]],
    ],
    [
     "Big Tee",
     [[1, 1, 1],
      [0, 1, 0],
      [0, 1, 0]]
    ],
    [
     "Long Tee",
     [[1, 1, 1, 1],
      [0, 1, 0, 0]]
    ], 
    [
     "Block",
     [[1, 1],
      [1, 1]]
    ],
    [
     "Short Ell",
     [[1, 0, 0],
      [1, 1, 1]]
    ], 
    [
     "Long Ell",
     [[1, 0, 0, 0],
      [1, 1, 1, 1]]
    ], 
    [
     "S Piece",
     [[0, 1, 1],
      [1, 1, 0]]
    ], 
    [
     "Long S Piece",
     [[0, 1, 1, 1],
      [1, 1, 0, 0]]
    ], 
    [
     "Big S Piece",
     [[1, 0, 0],
      [1, 1, 1],
      [0, 0, 1]]
    ], 
    [
     "Weird F Piece",
     [[0, 1, 0],
      [1, 1, 1],
      [1, 0, 0]]
    ], 
    [
     "Plus",
     [[0, 1, 0],
      [1, 1, 1],
      [0, 1, 0]]
    ], 
    [
     "Turtle",
     [[1, 1, 1],
      [0, 1, 1]]
    ], 
    [
     "Zig-Zag",
     [[1, 0, 0],
      [1, 1, 0],
      [0, 1, 1]]
    ],
    [
     "Hat",
     [[1, 1, 1],
      [1, 0, 1]]
    ]
];


function do_it(){
    var shapes = [];
    for(var i = 0; i < blocks.length; i++){
        var shape = Shape(blocks[i][0],
                          blocks[i][1]);
        shapes.push(shape);
        document.getElementById("blocks").appendChild(shape.table());
    }
}
