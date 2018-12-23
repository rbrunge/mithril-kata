
import m from "mithril";
import MyComponent from './myComponent';

Array.from(document.querySelectorAll('my-component'))
  .forEach(el => m.mount(el, MyComponent))

