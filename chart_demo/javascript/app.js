Ext.require(['*']);

Ext.onReady(function(){
	
	var html = '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh, sodales a, '+
	    'porta at, vulputate eget, dui. Pellentesque ut nisl. Maecenas tortor turpis, interdum non, sodales non, iaculis ac, '+
	    'lacus. Vestibulum auctor, tortor quis iaculis malesuada, libero lectus bibendum purus, sit amet tincidunt quam turpis '+
	    'vel lacus. In pellentesque nisl non sem. Suspendisse nunc sem, pretium eget, cursus a, fringilla vel, urna.<br/><br/>'+
	    'Aliquam commodo ullamcorper erat. Nullam vel justo in neque porttitor laoreet. Aenean lacus dui, consequat eu, adipiscing '+
	    'eget, nonummy non, nisi. Morbi nunc est, dignissim non, ornare sed, luctus eu, massa. Vivamus eget quam. Vivamus tincidunt '+
	    'diam nec urna. Curabitur velit. Lorem ipsum dolor sit amet.</p>';
	
    Ext.create('Ext.panel.Panel',
    {
        layout: 'fit',
        renderTo: Ext.getBody(),
		title: 'Basic Panel',
        collapsible:true,
        width:400,
        html: html
    });
	
	var d3Element = Ext.getBody().createChild({cls: 'panel-container'});
	
    Ext.create('Ext.panel.Panel',
    {
        layout: 'fit',
        renderTo: d3Element,
		title: 'd3 Panel',
        collapsible:true,
        width:400,
		listeners: {
			afterrender: function (component) {
				d3Pie.init(component.body.dom);
			}
		}		
    });
	
	var highChartsElement = Ext.getBody().createChild({cls: 'panel-container'});
	
    Ext.create('Ext.panel.Panel',
    {
        layout: 'fit',
        renderTo: highChartsElement,
		title: 'HighCharts Panel',
        collapsible:true,
        width:400,
		listeners: {
			afterrender: function (component) {
				highChartsPie.init(component.body.dom);
			}
		}		
    });
	
});
