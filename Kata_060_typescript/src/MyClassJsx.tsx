import * as m from 'mithril';


export default class MyClassJsx {

     view(vnodes: any) {
        return [
            m("h1", `Mithril and Typescript and jsx`),
            <p>Also works with JSX</p>
        ];
     }
}
