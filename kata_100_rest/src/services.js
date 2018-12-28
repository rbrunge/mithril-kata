import m from 'mithril';

export class CountryService {

    getInfo(countryCode) {
        return m.request({
            method: "GET",
            url: "https://restcountries.eu/rest/v2/alpha",
            data: {
                codes: countryCode
            }
        })
        // .then(result => {
        //     console.log(result)
        // })      
    }

}