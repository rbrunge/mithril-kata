import m from 'mithril';

export class EmployeeService {

    getInfo(employeeId) {
        return m.request({
                method: "GET",
                url: "https://dummy.restapiexample.com/api/v1/employee/" + employeeId,
            })
            // .then(result => {
            //     console.log(result)
            // })
    }

}