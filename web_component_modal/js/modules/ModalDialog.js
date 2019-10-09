export class ModalDialog extends HTMLElement {
  constructor() {
    super();
    // 背景になった要素にフォーカスを当たらないようにする
    document.querySelector("body").set;

    // Create a shadow root
    const shadowRoot = this.attachShadow({ mode: "open" });

    // Create layer
    const overlay = document.createElement("span");
    overlay.setAttribute("tabindex", "1");
    overlay.setAttribute("class", "overlay");

    const style = document.createElement("style");
    console.log(style.isConnected);

    style.textContent = `
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
      }
    `;

    // Attach the created elements to the shadow dom
    shadowRoot.appendChild(style);
    console.log(style.isConnected);
    shadowRoot.appendChild(overlay);

    // オーバーレイのクリックでモーダルを閉じる
    overlay.addEventListener("click", () => {
      this.remove();
    });

    // モーダル内でTabを循環させるたい。tabindex順の要素を取得するのが難しいのでモーダル以外フォーカス不可にするかも
    // this.addEventListener("keydown", evt => {
    //   if (evt.key === "Tab") {
    //     evt.preventDefault();
    //     evt.target.nextElementSibling.tabIndex
    //   }
    // });
  }
}
