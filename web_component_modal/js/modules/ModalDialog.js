export class ModalDialog extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    const shadowRoot = this.attachShadow({ mode: "open" });
    const wrapper = this.createWrapper();

    shadowRoot.appendChild(wrapper);

    // Attach the created elements to wrapper
    wrapper.appendChild(this.createStyle());
    wrapper.appendChild(this.createOverlay());
    const windowTitle = this.getAttribute("title");
    wrapper.insertAdjacentHTML(
      "beforeend",
      this.createWindowForTemplateString(windowTitle)
    );
  }

  createWrapper() {
    const wrapper = document.createElement("div");
    // エスケープ絶対殺すマン
    wrapper.addEventListener(
      "keydown",
      event => {
        if (event.key == "Escape") this.close();
      },
      true
    );
    return wrapper;
  }

  createStyle() {
    const style = document.createElement("style");
    style.textContent = `
    .modal-dialog__overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(100, 100, 100, 0.8);
    }
    .modal-dialog__window {
      position: absolute;
      top: 10vh;
      left: 10vw;
      width: 80vw;
      min-height: 80vh;
      background-color: white;
      display: flex;
      flex-direction: column;
    }
    .modal-dialog__window-title {

    }
    .modal-dialog__content {

    }
    `;
    return style;
  }

  /**
   * オーバーレイを作成する。
   */
  createOverlay() {
    const overlay = document.createElement("div");
    overlay.setAttribute("class", "modal-dialog__overlay");
    // オーバーレイはラッパーに加えるのでウィンドウをクリックされても問題ない。
    overlay.addEventListener("click", () => this.close());
    return overlay;
  }

  /**
   * いっそTemplateStringでモーダルを作ってみる。
   * @param {String} title モーダルダイアログ本体に表示するタイトル
   */
  createWindowForTemplateString(title) {
    return `
      <div class="modal-dialog__window">
        <div class="modal-dialog__window-title" tabindex="0">${title}</div>
        <div class="modal-dailog__content">
          ${this.innerHTML}
        </div>
      </div>
    `;
  }

  /**
   * さよなら
   */
  close() {
    this.remove();
  }
}
