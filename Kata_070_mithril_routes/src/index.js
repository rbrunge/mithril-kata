import * as m from 'mithril';
import * as Pages from './Pages';
import { Layout } from './Layout';

// m.route(document.querySelector('mount-point'), 
//     "/home", {
//         "/home": Pages.Home, // defines `http://localhost/#!/home`
//         "/page1": Pages.Page1,
//         "/edit/:id":  Pages.Edit
//     }
// )

// set to pathname strategy
// m.route.prefix("")

// set to querystring strategy
// m.route.prefix("?")

// set to hash without bang
// m.route.prefix("#")

// set to pathname strategy on a non-root URL
// e.g. if the app lives under `http://localhost/my-app` and something else lives under `http://localhost`
//m.route.prefix("/my-app")



// ----------------------------
// Example with layout
// ----------------------------
m.route(document.querySelector('mount-point'), "/", {
    "/": {
        view: () => m(Layout, m(Pages.Home))
    },
    "/page1": {
        view: () => m(Layout, m(Pages.Page1))
    },
    "/edit/:id": {
        view: () => m(Layout, m(Pages.Edit))
    }
})

