const dialog = document.getElementById("first-dialog");
const openButton = document.getElementById("open");
const openModalButton = document.getElementById("open-modal");

openButton.addEventListener("click", () => {
  dialog.show();
  // 前回押したボタンのvalueが入る・・・
  console.log(dialog.returnValue);
});

openModalButton.addEventListener("click", () => {
  dialog.showModal();
  // 前回押したボタンのvalueが入る・・・
  console.log(dialog.returnValue);
});
