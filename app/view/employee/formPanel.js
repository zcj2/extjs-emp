Ext.define("MyApp.view.formpanel", {
    extend: Ext.form.Panel,
    xtype: 'empformpanel',
    url: "http://www.baidu.com",


    requires: [],
    items: [{
        xtype: 'textfield',
        name: 'name',
        fieldLabel: 'Name'
    }, {
        xtype: 'textfield',
        name: 'email',
        fieldLabel: 'Email'
    }, {
        xtype: 'textfield',
        name: 'password',
        fieldLabel: 'Password'
    }],
    buttons: [
        {xtype: "button", text: "reset"},
        {
            xtype: "button", text: "submit", handler: function () {
                var form = this.up("empformpanel");
                form.submit({
                    url: 'url/to/submit/to',
                    success: function () {
                        Ext.Msg.alert('Form submitted successfully!');
                    }
                });
            }
        }
    ]
});