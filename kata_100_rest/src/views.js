import m from 'mithril';
import * as services from './services';

var ServiceEnum = Object.freeze({
    None: 0,
    EmployeeService: 1,
});

export class MainView {

    constructor(vnode) {
        this.model = {
            title: "Just a test",
            currentService: ServiceEnum.None,
        };
    }

    view() {
        return [
            <div class="wrapper">
                <div class="box header">Pick a service - click button</div>
                <Sidebar model={this.model}></Sidebar>
                <ContentView currentService={this.model.currentService}></ContentView>
                <div class="box footer">Footer</div>
            </div>
        ]
    }
}

class Sidebar {

    oninit(vnode) {
        this.model = vnode.attrs.model;
    }

    view(vnode) {
        return [
            <div class="box sidebar">
                <ul>
                    <li><button onclick={e => {
                        vnode.state.model.currentService = ServiceEnum.EmployeeService;
                    }}>Employee</button></li>
                </ul>
            </div>
            
        ];
    }
}

class ContentView {

    view(vnode) {
        return [
            <div class="box content">
                {vnode.attrs.currentService == ServiceEnum.EmployeeService ? <EmployeeView></EmployeeView> : null}
            </div>
        ];
    }
}

class EmployeeView {
    oninit(vnode) {
        this.employeeId = "1";
        this.employee = null;
        this.showResult = false;
    }

    view() {
        return [
            <div>
                <label>Type employee number, e.g. 1, 2, 3 ...
                    <input 
                        value={this.employeeId}
                        oninput={e => this.employeeId = e.target.value} 
                        onkeypress={e => this.inputChanged()}
                    ></input>
                </label>
                <button onclick={e => this.getEmployeeInfo()}>Send</button>
                {this.showResult ? this.resultView() : ""}
            </div>
        ];
    }

    inputChanged() {
        if (event && event.keyCode === 13 && this.employeeId !== 'undefined' && this.employeeId != null && this.employeeId.length >= 1) {
            this.getEmployeeInfo();
        }
    }

    getEmployeeInfo() {
        let service = new services.EmployeeService();
        let promise = service.getInfo(this.employeeId);

        promise
            .then(d => {
                this.employee = d;
            })
            .then(e => this.showResult = this.employee !== 'undefined' || this.employee != null)
            .catch(error => {
                // console.log(error);
            });
    }

    resultView() {
        return [
            <h2>Result:</h2>
            ,
            <div>
                {this?.employee?.data != null ?
                    <ul>
                        <li>Name: <strong>{this.employee.data.employee_name}</strong></li>
                        <li>Age: <strong>{this.employee.data.employee_age}</strong></li>
                        <li>Salary: <strong>{this.employee.data.employee_salary}</strong></li>
                    </ul>
                     : ""}
            </div>
        ]
    }
}

