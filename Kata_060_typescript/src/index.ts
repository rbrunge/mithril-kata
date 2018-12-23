import * as m from "mithril";
import MyClass from './MyClass'
import MyClassJsx from './MyClassJsx'

export class App {
	view() {
		return m(MyClass);
	}
}

if (document.querySelector("#out-myclass") !== null)
    m.mount(document.querySelector("#out-myclass"), MyClass);

if (document.querySelector("#out-myclass-jsx") !== null)
    m.mount(document.querySelector("#out-myclass-jsx"), MyClassJsx);