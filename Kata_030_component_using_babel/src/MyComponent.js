import m from 'mithril';

const MyComponent = {
    view: () => {
        return m("main", [
            m("h2", { class: "title" }, "Kata: component using babel"),
            m("p", "Just some text"),
        ])
    }
}

export default MyComponent;