import m from 'mithril';

const PartialView3 = {
    oninit: vnode => vnode.state.model = vnode.attrs.model,
    view: vnode => {
        console.log("view", "PartialView3")

        return (
            <div class="partialview3">
                <h1>Partial View 3</h1>

                <div>{vnode.state.model.First}</div>
                <input oninput={e => vnode.state.model.actions.setFirst(e.target.value)} value={vnode.state.model.First}></input>
            </div>
        )
    }
}

export default PartialView3
