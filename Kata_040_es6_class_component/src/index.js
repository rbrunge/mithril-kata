import m from "mithril";
import MyClass from './MyClass'

m.render(document.querySelector('#out-render'), m(MyClass, {method: "render"}));

m.mount(document.querySelector('#out-mount'), {
    view: () => m(MyClass, {method: "mount"})
})

