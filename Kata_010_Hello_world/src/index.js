
import m from "mithril";

var Example = {
    view: function(vnode) {
        return m("div", "Hello simple 1")
    }
}

let root = document.body
m.render(root, m(Example))