import m from 'mithril';

export default class PartialView2 {

    oninit(vnode) {
        console.log("oninit", "PartialView2")

        this.model = vnode.attrs.model;
    }

    view(vnode) {
        console.log("view", "PartialView2")

        return [
            <div class="partialview2">
                <h1>Partial View 2</h1>
                <label>Hide/show <strong>partial view 3</strong> from <strong>partial view 2</strong>
                    <input type="checkbox" checked={this.model.HidePartialView3} oninput={e => {
                        this.model.actions.togglePartialView3();
                        m.withAttr('checked', this.model.HidePartialView3)
                    }
                    }></input>
                </label>
            </div>
        ]
    }
}