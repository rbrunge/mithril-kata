import m from 'mithril';

export default class PartialView1 {

    oninit(vnode) {
        this.title = vnode.attrs.param1;
        this.model = vnode.attrs.model;
    }

    view(vnode) {
        return [
            m(".partialview1", [
                <div>Partial View 1 - includes input field: {this.title}</div>,
                m('input', {
                    value: this.model.First,
                    oninput: e => this.model.setFirst(e.target.value)
                })
            ])
        ];
    }
}