export class AddElementButton extends HTMLElement {
  constructor() {
    super();
    // Create a shadow root
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(this.createNode());
  }

  /**
   * ノードを作成する。
   */
  createNode() {
    const tmpElem = document.createElement("div");
    tmpElem.innerHTML = `
      <template>
        <button>
          ${this.getAttribute("label")}
        </button>
      </template>
    `;
    const node = tmpElem.querySelector("template").content;
    // template要素内にquerySelectorを使いたいのでnodeをちゃんと作ってからにしましょう。
    node.querySelector("button").addEventListener("click", () => {
      this.appendElement();
    });
    return node;
  }

  appendElement() {
    document.body.insertAdjacentElement(
      "beforeend",
      this.querySelector("[slot='target']").cloneNode(true)
    );
  }
}
