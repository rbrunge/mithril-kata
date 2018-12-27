import m from 'mithril';

export class MainView {

    constructor() {
        this.model = {
            First: "a",
            setFirst: data => this.model.First = data,
            Second: 1,
            Third: []
        }
    }


    view(vnode) {

        return [
            // <div>
            //     <div>Main View {this.model.First}</div>
            // </div>
            m(".main",
            [
                <h1>Main view</h1>,
                m(PartialView1, { param1: "My fancy title", model: this.model }),
                m(PartialView2, { model: this.model }),
                m(PartialView3, { model: this.model })
            ])
        ];
    }
}

class PartialView1 {

    oninit(vnode) {
        this.title = vnode.attrs.param1;
        this.model = vnode.attrs.model;
    }

    view(vnode) {
        return [
            m(".partialview1", [
                <div>Partial View 1 - includes input field: {this.param1}</div>,
                m('input', {
                    value: this.model.First,
                    oninput: e => this.model.setFirst(e.target.value)
                })
            ])
        ];
    }

}

class PartialView2 {

    oninit(vnode) {
        this.model = vnode.attrs.model;
    }

    view(vnode) {
        return <div>Partial View 2: {this.model.First}</div>
    }
}

const PartialView3 = {
    oninit: vnode => vnode.state.model = vnode.attrs.model,
    view: vnode => {
        return [
            <div>Partial View 3: {vnode.state.model.First}</div>,
            <input oninput={e => vnode.state.model.setFirst(e.target.value)} value={vnode.state.model.First}></input>
        ];
    }
}

