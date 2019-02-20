import m from 'mithril';
import PartialView1 from './PartialView1';
import PartialView2 from './PartialView2';
import PartialView3 from './PartialView2';
import ModelStateView from './ModelStateView';

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


