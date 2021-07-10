import m from 'mithril';
import PartialView1 from './PartialView1';
import PartialView2 from './PartialView2';
import PartialView3 from './PartialView3';
import ModelStateView from './ModelStateView';
import Actions from './Actions';

export class MainView {

    constructor() {
        console.log("ctor", "MainView")
        
        this.model = {
            First: "a",
            Second: 1,
            Third: [],
            HidePartialView3: false
        }
        this.model.actions = new Actions(this.model)
        
    }

    view(vnode) {
        console.log("view", "MainView")

        return [
            m(".main",
                [
                    <div>
                        <h1>Main view</h1>
                        <label>Hide/show partial view 3 from main view
                            <input type="checkbox" 
                                checked={this.model.HidePartialView3} 
                                oninput={e => e.target.checked ? this.model.actions.hidePartialView3() : this.model.actions.showPartialView3()}></input>
                        </label>
                        {m(PartialView1, { param1: "View 1: My fancy title", model: this.model })}
                        {m(PartialView2, { model: this.model })}
                        {!this.model.HidePartialView3 ? m(PartialView3, { model: this.model }) : null}
                        {m(ModelStateView, { model: this.model })}
                    </div>,
                ])
        ];
    }
}


