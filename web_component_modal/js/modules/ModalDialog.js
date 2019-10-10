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
    return document.createElement("div");
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
      top: 20vh;
      left: 10vw;
      width: 80vw;
      min-height: 80vh;
      background-color: white;
    }
    .modal-dialog__window-title {

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
    overlay.addEventListener("click", () => {
      this.remove();
    });
    return overlay;
  }

  createWindowForTemplateString(title) {
    return `
    <div class="modal-dialog__window">
      <div class="modal-dialog__window-title">${title}</div>
    </div>
    `;
  }
}
