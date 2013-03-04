Ext.Loader.setConfig({enabled: true});
Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit', 'Ext.window.MessageBox']);
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.grid.Panel'
]);

Ext.require(['*']);

Ext.define('Alerts', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'occurTime',  type: 'string'},
        {name: 'resetTime',   type: 'string'},
        {name: 'faultCode', type: 'string'},
        {name: 'incidentDescription', type: 'string'},
		{name: 'latLon', type:'string'},
		{name: 'mph', type:'string'},
		{name: 'engineSpeed', type:'string'},
		{name: 'TACVolts', type:'string'},
		{name: 'TACCurrent', type:'string'},
		{name: 'Bra', type:'string'},
		{name: 'locoStat', type:'string'},
    ],
});


Ext.onReady(function() {
    
	var data = [];
	for( var i=0; i<100; ++i ) {
		data.push({
			"id": i,
			"occurTime": "04/07/2011 14:00",
			"resetTime": "04/07/2011 14:00",
			"faultCode": "10-0305",
			"incidentDescription": "TMC Network Status",
			"latLon": "66° / 145°",
			"mph": "42.41",
			"engineSpeed": "587",
			"TACVolts": "9",
			"TACCurrent": "0",
			"Bra": "1.3",
			"locoStat": "1"
		});
	}
    var store = Ext.create('Ext.data.Store', {
        // store configs
        autoDestroy: true,
        model: 'Alerts',
		data: data
        // proxy: {
        //     type: 'ajax',
        //     url: 'data.json',
        //     reader: {
        //         type: 'json',
        //         idProperty: 'id',
        //         // totalProperty: 'total'
        //     }
        // }
    });
    
    
    var container = Ext.create('Ext.container.Container', {
        // width: 400,
        // height: 400,
        renderTo: 'content',
        // style: "border: 1px solid red",
        layout: {
            type: 'vbox',
            align: 'stretch',
            padding: 12,
            defaultMargins: 6
        },
        items: [
            {
                xtype: 'toolbar',
                // style: "border: 1px dotted red",
                height: 50,
                items: [
                    'DATA SET',
                    {
                        text: 'Expert On Alert',
                        menu: {
                            items: [ 'one', 'two', 'three' ]
                        }
                    },
                    {
                        // TODO + image
                        text: '+'
                    },
                    '-',
                    'DISPLAY ONLY',
                    {
                        text: 'Rule 34523',
                        menu: {
                            items: [ 'one', 'two', 'three' ]
                        }
                    },
                    {
                        text: 'Filter'
                    },
                    '->',
                    {
                        text: 'v'
                    },
                    {
                        text: '[-'
                    },
                    {
                        text: 'x'
                    }
                ]
            },
            {
                xtype: 'grid',
                height: 400,
                // html: 'when I grow up I want to be a grid'
                columns: [
                    {
                        dataIndex: 'occurTime',
                        text: 'Occur Time',
                        locked: true
                    },
                    {
                        dataIndex: 'resetTime',
                        text: 'Reset Time',
                        locked: true
                    },
                    {
                        dataIndex: 'faultCode',
                        text: 'Fault Code',
                        locked: true
                    },
                    {
                        dataIndex: 'incidentDescription',
                        text: 'Incident Description'
                    },
                    {
                        dataIndex: 'latLon',
                        text: 'Lat/Lon'
                    },
                    {
                        dataIndex: 'mph',
                        text: 'Loco mph'
                    },
                    {
                        dataIndex: 'engineSpeed',
                        text: 'Engine Speed'
                    },
                    {
                        dataIndex: 'TACVolts',
                        text: 'TAC Volts'
                    },
                    {
                        dataIndex: 'TACCurrent',
                        text: 'TAC Current'
                    },
                    {
                        dataIndex: 'Bra',
                        text: 'Bra… %'
                    },
                    {
                        dataIndex: 'locoStat',
                        text: 'Loco Stat'
                    },
                ],
                store: store,
                loadMask: true,
                emptyText: 'No Matching Records'
            }
        ]
    });
    
    store.load();
});

