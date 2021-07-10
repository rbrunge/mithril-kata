import m from 'mithril';
import Actions from './Actions';

export default class PartialView1 {

    oninit(vnode) {
        console.log("oninit", "PartialView1")
        
        this.title = vnode.attrs.param1;
        this.model = vnode.attrs.model;
        let x = Object.assign(this, vnode.attrs)
    }
    
    view(vnode) {
        console.log("view", "PartialView1")
        
        return [
            m(".partialview1", [
                <h1>Partial View 1</h1>,
                <div>Includes input field: {this.title}</div>,
                m('input', {
                    value: this.model.First,
                    oninput: e => this.model.actions.setFirst(e.target.value)
                })
            ])
        ];
    }
}