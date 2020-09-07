Ext.define('MyApp.view.employee.EmployeeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employeeController',
    requires:["MyApp.view.formpanel"],
    openEmpPage:function () {
        var window = Ext.create({
            xtype:"window",
            title: 'Hello',
            height: 200,
            width: 400,
            layout: 'fit',
            items: {  // Let's put an empty grid in just to illustrate fit layout
                xtype: 'empformpanel'

            }
        });

        window.show();
    }





});


