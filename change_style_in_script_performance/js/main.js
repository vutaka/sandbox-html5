function createRow(index) {
  return '<tr><td>' + index + '</td><td>' + index + '行目</td></tr>';
}

/**
 * 丹精込めてstyleを変更する
 * @param {HTMLElement} table 
 */
function addStyle(table) {
  const tds = table.querySelectorAll('td');
  for (let i = 0; i < tds.length; i++) {
    let td = tds[i];
    td.style.borderRight = 'solid 1px black';
    td.style.borderBottom = 'solid 1px black';
  }
}
/**
 * 丹精込めてstyleを変更する。
 * この場合animationframeでやるのはなんの意味もない。
 * @param {HTMLElement} table 
 */
function addStyleInAnimationFrame(table) {
  window.requestAnimationFrame(
    function () {
      addStyle(table);
    }
  );
}
/**
 * テーブルになんかクラスをつける
 * @param {HTMLElement} table 
 */
function addClass(table) {
  table.setAttribute('class', 'border_on');
}

/**
 * テーブルを初期化する
 * @param {HTMLElement} table 
 */
function init(table) {
  table.innerHTML = '';
  table.setAttribute('class', '');
  let rowStr = '';
  for (let index = 0; index < 5000; index++) {
    rowStr += createRow(index);
  }
  table.insertAdjacentHTML('beforeend', rowStr);
}

(function () {
  const tableArea = document.getElementById("table");

  const addStyleButton = document.getElementById("add_style");
  const addStyleAnimationFrameButton = document.getElementById("add_style_animationframe");
  const addClassButton = document.getElementById("add_class");
  const initButton = document.getElementById("init");

  addStyleButton.addEventListener('click', function () { addStyle(tableArea) });
  addStyleAnimationFrameButton.addEventListener('click', function () { addStyleInAnimationFrame(tableArea) });
  addClassButton.addEventListener('click', function () { addClass(tableArea) });
  initButton.addEventListener('click', function () { init(tableArea) });
  init(table);
}());
