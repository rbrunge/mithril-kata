import m from 'mithril';

export const Layout = {
    view: function(vnode) {
        return m(".layout", vnode.children)
    }
}
