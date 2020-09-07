Ext.define('MyApp.view.employee.list',{
    extend:'Ext.grid.Panel',
    xtype: 'employList',
    title: '员工管理',
    icon:"https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2417586904,2120716092&fm=26&gp=0.jpg",

    tbar: [
        {
            icon:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2717881047,842144253&fm=26&gp=0.jpg",
            xtype: 'button',
            text: '添加',
            listeners:{
                click:"openEmpPage"
            }
        }
    ],
    bbar:{xtype:"pagingtoolbar",displayInfo:true},
    viewModel:{type:"employeeViewModel"},
    controller:"employeeController",

    columns: [{
        text: 'Name',
        dataIndex: 'name',
        editor: {
            xtype: 'textfield',
            allowBlank: false
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        flex: 1,
        editor: {
            xtype: 'textfield',
            allowBlank: false
        }
    }, {
        text: 'Phone',
        dataIndex: 'phone',
        editor: {
            xtype: 'textfield',
            allowBlank: false
        }
    }],
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },
    selModel: {
        type: 'spreadsheet'
    }

});