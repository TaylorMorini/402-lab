import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {
  //this code is for visuals
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }
//(below) I think is to declare the types but I have not used this syntax before
  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

//This constructor is calling super(), which is going to be the parent class
//basically, it allows access to the parent class
//after that the "this.title" and "this.counter" are just setting default values
  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }
//this is incrementing the counter that was already defined by 1
  __increment() {
    this.counter += 1;
  }
//this is responsible for rendering the code in html format
//the "<h2> tags are the html tags, they're displaying the counter/the title"
//the "<button> tags display a button/act as event listeners. When they are clicked the counter is incremented."
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
