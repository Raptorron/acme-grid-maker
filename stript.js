const form = document.querySelector('form');
const grid = document.querySelector('#grid');
const message = document.querySelector('#message');
const rowsInput = document.querySelector('[name="rows"]');
const columnsInput = document.querySelector('[name="columns"]');
const rowError = document.querySelector('#rowsError');
const columnError = document.querySelector('#columnsError');
const button = document.querySelector('button');
form.addEventListener('submit', (ev)=>{
  ev.preventDefault();
  let html = '';
  for(let i=0; i<rowsInput.value; i++){
    html += '<div>';
      for(let j=0; j<columnsInput.value; j++){
        html += '<div></div>';
      }
      html += '</div>';
  }
  grid.innerHTML=html;
  message.innerHTML=html;
});

grid.addEventListener('click', (ev)=>{
  const cell = ev.target;
  cell.style.backgroundColor='dodgerBlue';
  const row = cell.parentNode;
  const cidx = [...cell.parentNode.children].indexOf(cell);
  const ridx = [...row.parentNode.children].indexOf(row);
  let html = `ridx: ${ridx} cidx ${cidx}`;
  message.innerHTML=html;
});

rowsInput.addEventListener('keyup', (ev)=>{
  const row = parseInt(ev.target.value);
  if(isNaN(row) || row < 1 || row > 50){
    rowError.innerHTML = 'Row must be between 1 and 50.'
  }else{
    rowError.innerHTML = '';
  }
  disableButton();
});

columnsInput.addEventListener('keyup', (ev)=>{
  const colunm = parseInt(ev.target.value);
  if(isNaN(colunm) || colunm < 1 || colunm > 50){
    columnError.innerHTML= 'Column must be between 1 and 50.';
  }else{
    columnError.innerHTML='';
  }
  disableButton();
});

const disableButton = () =>{
  const disabled = rowError.innerHTML || columnError.innerHTML;
  if(disabled){
    button.setAttribute('disabled', 'disabled');
  }else{
    button.removeAttribute('disabled');
  }
}

