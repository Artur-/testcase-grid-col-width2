import "@vaadin/vaadin-grid";
import {
  css,
  customElement,
  html,
  internalProperty,
  LitElement,
} from "lit-element";

@customElement("grid-view")
export class AboutView extends LitElement {
  @internalProperty()
  private items: any[] = [];

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html` <vaadin-grid style="width: 200px" .items=${this.items}>
      <vaadin-grid-column auto-width path="last"></vaadin-grid-column>
      <vaadin-grid-column auto-width path="first"></vaadin-grid-column>
    </vaadin-grid>`;
  }
  connectedCallback() {
    super.connectedCallback();
    const setItems = () => {
      this.items = [
        { first: "bbb", last: "222" },
        {
          first: "aaaaaaaaaa",
          last: "111",
        },
        { first: "ccc", last: "333" },
      ];
    };

    const immediately = false;
    if (immediately) {
      setItems();
    } else {
      setTimeout(setItems, 1);
    }
  }
}
