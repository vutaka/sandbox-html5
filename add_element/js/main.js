function createRow(index) {
  return '<tr><td>' + index + '</td><td>' + index + '行目</td></tr>';
}

function addRowEachTime(table) {
  for (let index = 0; index < 5000; index++) {
    table.insertAdjacentHTML('beforeend', createRow(index));
  }
}

function addRowEachTimeOnAnimetionFrame(table) {
  window.requestAnimationFrame(function () {
    for (let index = 0; index < 5000; index++) {
      table.insertAdjacentHTML('beforeend', createRow(index));
    }
  });
}

function addRowAtOnce(table) {
  let rowStr = '';
  for (let index = 0; index < 5000; index++) {
    rowStr += createRow(index);
  }
  table.insertAdjacentHTML('beforeend', rowStr);
}

function removeAllChild(table) {
  // 雑実装
  table.innerHTML = '';
}

(function () {
  const tableArea = document.getElementById("table");
  const eachAddButton = document.getElementById("each_time");
  const atOnceAddButton = document.getElementById("at_once");
  const atOnceAddOnAnimationFrameButton = document.getElementById("each_time_on_animation_frame");
  const removeAllButton = document.getElementById("remove_all");

  eachAddButton.addEventListener('click', function () { addRowEachTime(tableArea) });
  atOnceAddButton.addEventListener('click', function () { addRowAtOnce(tableArea) });
  atOnceAddOnAnimationFrameButton.addEventListener('click', function () { addRowEachTimeOnAnimetionFrame(tableArea) });
  removeAllButton.addEventListener('click', function () { removeAllChild(tableArea) });
}());
