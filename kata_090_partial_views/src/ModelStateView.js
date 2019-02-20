import m from 'mithril';

export default class ModelStateView {

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