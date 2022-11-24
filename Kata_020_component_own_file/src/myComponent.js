import m from 'mithril';

const MyComponent = {
    view: function(vnode) {
        return [
            m("h2", "Hello says my component"),
            m("p", "Module in separate file, build using webpack")
        ]
    }
}

export default MyComponent;