
const grid = [{block: 'one'},{block: 'two'},{block: 'three'},{block: 'four'},{block: 'five'},{block: 'six'},{block: 'seven'},{block: 'eight'},{block: 'nine'},{block: 'ten'}];

const blockss = document.querySelector('#blocks')

const html = (grid)=>{
     return grid.map(tile =>
       `<div class='peices'>${tile.aBlock}</div>`
     ).join('');
   }

   const render=()=>{
     blockss.innerHTML = html(grid);
   }
render();
