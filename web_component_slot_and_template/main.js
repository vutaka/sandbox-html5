customElements.define(
  "my-paragraph-block",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("my-paragraph-block");
      const templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);
