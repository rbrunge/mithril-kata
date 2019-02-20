import m from 'mithril';

export const PartialView3 = {
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
