import m from 'mithril';
import * as services from './services';

var ServiceEnum = Object.freeze({
    None: 0,
    Country: 1,
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
                        vnode.state.model.currentService = ServiceEnum.Country;
                    }}>Country</button></li>
                </ul>
            </div>
            
        ];
    }
}

class ContentView {

    view(vnode) {
        return [
            <div class="box content">
                {vnode.attrs.currentService == ServiceEnum.Country ? <CountryView></CountryView> : null}
            </div>
        ];
    }
}

class CountryView {
    oninit(vnode) {
        this.countryCode = "dk";
        this.country = null;
        this.showResult = false;
    }

    view() {
        return [
            <div>
                <label>Type country code, e.g. dk, no, us, en
                    <input 
                        value={this.countryCode}
                        oninput={e => this.countryCode = e.target.value} 
                        onkeypress={e => this.inputChanged()}
                    ></input>
                </label>
                <button onclick={e => this.getCountryInfo()}>Send</button>
                {this.showResult ? this.resultView() : ""}
            </div>
        ];
    }

    inputChanged() {
        if (event && event.keyCode === 13 && this.countryCode !== 'undefined' && this.countryCode != null && this.countryCode.length >= 2) {
            this.getCountryInfo();
        }
    }

    getCountryInfo() {
        let countryService = new services.CountryService();
        let promise = countryService.getInfo(this.countryCode);

        promise
            .then(d => {
                this.country = d;
            })
            .then(e => this.showResult = this.country !== 'undefined' || this.country != null)
            .catch(error => {
                // console.log(error);
            });
    }

    resultView() {
        return [
            <h2>Result:</h2>
            ,
            <div>
                {this.country.map(value => {
                    if (value != null)
                        return (
                            <ul>
                                <li>Name: <strong>{value.name}</strong></li>
                                <li>Capital: <strong>{value.capital}</strong></li>
                                <li>Population: <strong>{value.population}</strong></li>
                            </ul>
                        )       
                })}
            </div>
        ]
    }
}

