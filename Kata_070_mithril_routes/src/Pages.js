import * as m from 'mithril';


var Menu = {
    view: function() {
        return m("nav", [
            m("a[href=/]", {oncreate: m.route.link}, "Home"),
            m("a[href=/page1]", {oncreate: m.route.link}, "Page 1"),
            m("a[href=/edit/123]", {oncreate: m.route.link}, "Edit 123"),
            m("a[href=/edit/456]", {oncreate: m.route.link}, "Edit 456"),
        ])
    }
}

export const Home = {
    view: function() {
        return [
            m(Menu),
            m("h1", "Home")
        ]
    }
}

export const Page1 = {
    view: function() {
        return [
            m(Menu),
            m("h1", "Page 1")
        ]
    }
}

export const Edit = {
    view: function(vnode) {
        return [
            m(Menu),
            m("h1", "Editing id: " + vnode.attrs.id)
        ]
    }
}