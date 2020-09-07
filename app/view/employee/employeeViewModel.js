Ext.define("MyApp.view.employee.employeeViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.employeeViewModel",
    requires: [
        "MyApp.model.employee"
    ],

    stores: {
        employees: {
            model: 'MyApp.model.employee',
            proxy: {
                type: "ajax",
                url: "employees.json",
                reader:{
                    type:"json",
                    totalProperty: "total",
                    rootProperty: "employees"
                }
            },
            pageSize:2,
            autoLoad: true
        }
    }
});
