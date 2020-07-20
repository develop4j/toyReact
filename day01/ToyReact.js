class ElementWrapper extends Component{
    constructor(type){
        this.root = document.createElement(type);
    }

    // setAttribute(name,value){
    //     this.root.setAttribute(name,value);
    // }

    appendChild(vchild){
        vchild.mountTo(this.root);
    }

    // mountTo(parent){
    //     parent.appendChild(this.root);
    // }
}

class TextWrapper extends Component{
    constructor(content){
        this.root = document.createTextNode(content);
    }

    // mountTo(parent){
    //     let vdom = this.render();
    //     parent.appendChild(parent);
    // }
}

export class Component{
    setAttribute(name,value){
        this.root.setAttribute(name,value);
    }
    mountTo(parent){
        let vdom = this.render();
        vdom.mountTo(parent);
    }
}

export let ToyReact = {
  createElement:(type, attributes, ...children) => {
      console.log(arguments)
    // debugger;
    let element;
    if (typeof type === "string") {
        element = new ElementWrapper(type);
    } else {
        element = new type;
    }
    for (let name in attributes) {
      element.setAttribute(name, attributes[name]);
    }

    let insertChild = (child) => {
        for (let child of children) {
            if (typeof child === "object" && child instanceof Array) {
                insertChild(child);
            }else{
                if(children instanceof Component){
                    child = String(child);
                }
                if(typeof child === "string"){
                    child = new TextWrapper(child);
                }
                element.appendChild(child);
            }
          }
    }
    insertChild(children);
    return element;
  },
  render(vdom,element){
    vdom.mountTo(element);
  }
};
