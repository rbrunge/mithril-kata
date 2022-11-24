import m from "mithril";

var Example = {
    view: function(vnode) {
        return [
            m("h1", "Hello Webpack!"),
            m("p", "Simple example with component in separate file and webpack is used for packing it up.")
        ]
    }
}

let root = document.body
m.render(root, m(Example))