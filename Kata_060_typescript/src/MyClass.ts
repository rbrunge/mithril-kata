import * as m from 'mithril';

export default class MyClass {

    variable1: number;

    constructor() {
        this.variable1 = 2;
    }

     view(vnodes: any) {
        return [
            m("h1", `Mithril and Typescript class example; value: ${this.variable1}`)
        ];
     }
}
