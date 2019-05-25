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
var vm = new Vue ({
  el: "#logame",
  data: {
    title: "Lights Out Game",
    rows: 10,
    cols: 10,
    grid: {},
    i: 1,
    j: 1
  },
  components: {
    locell: Cell
  },
  methods: {
    selectCell: function(i) {
      var currentPosition = this.grid.indexToPos(i);
      this.i = currentPosition[0];
      this.j = currentPosition[1];
      toggleNeighboursOfCell(this.i, this.j);
    }
  },
  // initialize the app
  created: function() {
    var newGrid = new Grid(this.rows, this.cols);
    this.grid = newGrid;
  }
});


function toggleNeighboursOfCell(i, j) {
  if(i > 1) {
    toggleCell((i-1), j);
  }
  if(i < 10) {
    toggleCell((i+1), j);
  }
  if(j > 1) {
    toggleCell(i, (j-1));
  }
  if(j < 10) {
    toggleCell(i, (j+1));
  }
}

function toggleCell(i, j) {
  var index = vm.grid.posToIndex([i, j]);
  var value = vm.grid.arr[index];
  vm.$set(vm.grid.arr, index, !value);
}
