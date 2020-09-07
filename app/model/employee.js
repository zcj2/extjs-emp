Ext.define("MyApp.model.employee",{
    extend: "Ext.data.Model",

    fields: [
        {name: 'name',  type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'phone', type: 'string'}
    ]
});