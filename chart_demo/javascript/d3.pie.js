(function(context) {
	
	var width = 400,
	    height = 400,
	    radius = Math.min(width, height) / 2,
	    data = d3.range(10).map(Math.random).sort(d3.descending),
	    color = d3.scale.category20(),
	    arc = d3.svg.arc().outerRadius(radius),
	    donut = d3.layout.pie();
	
	function init(element) {
		var vis = d3.select(element).append("svg")
		    .data([data])
		    .attr("width", width)
		    .attr("height", height);

		var arcs = vis.selectAll("g.arc")
		    .data(donut)
		  .enter().append("g")
		    .attr("class", "arc")
		    .attr("transform", "translate(" + radius + "," + radius + ")");

		var paths = arcs.append("path")
		    .attr("fill", function(d, i) { return color(i); });

		paths.transition()
		    .ease("bounce")
		    .duration(2000)
		    .attrTween("d", tweenPie);

		paths.transition()
		    .ease("elastic")
		    .delay(function(d, i) { return 2000 + i * 50; })
		    .duration(750)
		    .attrTween("d", tweenDonut);
	}

	function tweenPie(b) {
	  b.innerRadius = 0;
	  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
	  return function(t) {
	    return arc(i(t));
	  };
	}

	function tweenDonut(b) {
	  b.innerRadius = radius * .6;
	  var i = d3.interpolate({innerRadius: 0}, b);
	  return function(t) {
	    return arc(i(t));
	  };
	}
	
	context['d3Pie'] = {
		init: init
	};
	
})(this);