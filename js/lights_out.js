// cell component
var Cell = {
  template: "#cell",
  methods: {
    process: function(e) {
      var idthis = e.target.id;
      var len = idthis.length;
      var index = idthis.slice(4, len);
      this.$emit('select', index);
    }
  }
};

// main Vue.js application
var main = new Vue ({
  el: "#logame",
  data: {
    title: "Lights Out Game",
    rows: 10,
    cols: 10,
    grid: {}
  },
  components: {
    locell: Cell
  },
  methods: {
    selectCell: function(i) {
      //alert("Cell selected" + i);
      var value = this.grid.arr[i];
      this.$set(this.grid.arr, i, !value);
    },
    toggleNeighboursOfCell: function(pos) {
      var i = pos[0];
      var j = pos[1];
      if(i > 1) {
        var value = this.grid[i-1];
        this.$set(this.grid.arr, i, value);
      }
      if(i < 10) {

      }
      if(j > 1) {

      }
      if(j < 10) {
        
      }
    }
  },
  // initialize the app
  created: function() {
    var newGrid = new Grid(this.rows, this.cols);
    this.grid = newGrid;
  }
});
