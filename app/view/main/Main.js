/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    fullscreen: true,
    tabBarPosition: 'bottom',
    requires:[
        'MyApp.view.employee.list',
        'MyApp.view.employee.employeeViewModel',
        'MyApp.view.formpanel'
    ],

    items: [

        {
            title: '员工管理',
            xtype:'employList',
            bind: {
                store:"{employees}"
            }
        },
        {
            title:"empFormPanel",
            xtype:"empformpanel",
            html:"fjdijai"

        }

    ]


});
