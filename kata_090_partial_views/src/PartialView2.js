import m from 'mithril';

export default class PartialView2 {

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