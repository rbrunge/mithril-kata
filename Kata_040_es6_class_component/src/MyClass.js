import m from 'mithril';

export default class MyClass {

    constructor() {
        this.variable1 = 0;
        this.method;
    }

    oninit(vnode) {
        this.method = vnode.attrs.method;
        ++this.variable1;
    }

    view(vnode) {
        return [
            m("h1", `Mithril class example`),
            m("p", `Variable: ${this.variable1}`),
            m("p", `Mithril Method: ${this.method}`)
        ];
    }
}
