/*              Author: Richard Myatt
                Date: 26 May 2019

                An implementation of the Lights Out game - please see
                https://en.wikipedia.org/wiki/Lights_Out_(game)
*/

// Constructor function for two dimensional grid to hold the cells for the game
function Grid(rows, cols) {
  this.rows = rows;
  this.cols = cols;
  this.arr  = Array(rows * cols).fill(false);   // single dimension array starting at 0
}

// Method to convert the index of the grid arr to a position in the visual array
// Please note that grid positions start at [1, 1] and are held in an array of two
Grid.prototype.indexToPos = function(i) {
  var pos = [];
  var r, c;
  r = parseInt(i / this.cols) + 1;
  c = i % this.cols + 1;
  return [r, c];
};

// Method to convert the position in the visual array to the index in the grid arr
// Please note that grid positions start at [1, 1] and are held in an array of two
Grid.prototype.posToIndex = function(pos) {
  var r = pos[0];
  var c = pos[1];
  var index = (r - 1) * this.cols + c - 1;
  return index;
};
