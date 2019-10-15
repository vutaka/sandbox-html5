# めも

## 何をしているものか

* dialog要素を使用したかった

## 感想とか

### Good

* `HTMLDialogElement.showModal()` はフォーカスできる要素がdialog要素内の物になるなどかなり強力なイメージ
* `::backdrop` 擬似要素がdialogごとに指定できる。（ただしモーダルに限定）
* formに専用のmethodがある

### Bad

* まだ草案の内容が結構ある
* 実装時点のFF69では `HTMLDialogElement` 自体使えない。
* `returnValue` の更新タイミングがclose時・・・どう使えってんだ
