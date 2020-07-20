import { ToyReact, Component } from "./ToyReact";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>Hello</span>
        <span>World</span>
        <span>!!!</span>
        <div>{this.children}</div>
      </div>
    );
  }
}

let a = (
  <MyComponent name="a" id="ida">
    <div>13123213</div>
  </MyComponent>
);
console.log(a);
ToyReact.render(a, document.body);
