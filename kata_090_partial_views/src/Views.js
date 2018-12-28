import m from 'mithril';

export class MainView {

    constructor() {
        this.model = {
            First: "a",
            setFirst: data => this.model.First = data,
            Second: 1,
            Third: [],
            HidePartialView3: false,
            setHidePartialView3: b => this.model.HidePartialView3 = b,
        }
    }


    view(vnode) {

        return [
            m(".main",
                [
                    <div>
                        <h2>Main view:</h2>
                        <label>Hide/show partial view 3 from main view
                            <input type="checkbox" 
                                checked={this.model.HidePartialView3} 
                                oninput={e => this.model.setHidePartialView3(e.target.checked)}></input>
                        </label>
                        {m(PartialView1, { param1: "My fancy title", model: this.model })}
                        {m(PartialView2, { model: this.model })}
                        {!this.model.HidePartialView3 ? m(PartialView3, { model: this.model }) : null}
                        {m(ModelStateView, { model: this.model })}
                    </div>,
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
                <div>Partial View 1 - includes input field: {this.title}</div>,
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
        return [
            <div class="partialview2">Partial View 2
                <label>Hide/show partial view 2 from main view
                    <input type="checkbox" checked={this.model.HidePartialView3} oninput={e => {
                        this.model.setHidePartialView3(e.target.checked);
                        m.withAttr('checked', this.model.HidePartialView3)
                    }
                    }></input>
                </label>
            </div>
        ]
    }
}

const PartialView3 = {
    oninit: vnode => vnode.state.model = vnode.attrs.model,
    view: vnode => {
        return [
            <div class="partialview3">
                <div>Partial View 3: {vnode.state.model.First}</div>
                <input oninput={e => vnode.state.model.setFirst(e.target.value)} value={vnode.state.model.First}></input>
            </div>
        ];
    }
}

class ModelStateView {

    oninit(vnode) {
        this.model = vnode.attrs.model;
    }

    getModelState() {
        return Object.entries(this.model).map(obj => {
            if (typeof(obj[1]) !== "function")
                return <div><strong>{obj[0]}: </strong>{obj[1]}</div>
          })        
    }
    
    view(vnode) {
        return [
            <div class="modelstateview">
            <h2>Model state:</h2>
                {this.getModelState()}
            </div>
        ];
    }
}

