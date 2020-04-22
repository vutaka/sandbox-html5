function createRow(index) {
  return '<tr><td>' + index + '</td><td>' + index + '行目</td></tr>';
}

function addRowEachTime() {
  const tableArea = document.getElementById("table");
  for (let index = 0; index < 5000; index++) {
    tableArea.insertAdjacentHTML('beforeend', createRow(index));
    console.log((new Date()) + '@今のindex@' + index);
  }
}

function addRowAtOnce() {
  const tableArea = document.getElementById("table");
  let rowStr = '';
  for (let index = 0; index < 5000; index++) {
    rowStr += createRow(index);
    console.log((new Date()) + '@今のindex@' + index);
  }
  tableArea.insertAdjacentHTML('beforeend', rowStr);
}

window.onload = (function () {
  const eachAddButton = document.getElementById("each_time");
  const atOnceAddButton = document.getElementById("at_once");

  eachAddButton.addEventListener('click', addRowEachTime);
  atOnceAddButton.addEventListener('click', addRowAtOnce);
});
