var generateStars = function() {

	var numStars = 200;

	for (var i = 0; i < numStars; i++) {
		var width = $(".star-container").width();
		var height = $(".star-container").height();

		d3.select("#star-svg")
			.append("circle")
			.attr("class", "star")
			.attr("r", 2)
			.attr("cx", Math.random() * width)
			.attr("cy", Math.random() * height);
	}

	return;
}

var starFall = function() {
	var width = $(".star-container").width();
	var height = $(".star-container").height();


	d3.selectAll("circle")
		.transition()
		.delay(function(d, i) {
			return i * 5;
		})
		.attr("cy", 510);

	d3.selectAll("circle")
		.transition()
		.delay(function(d, i) {
			return i * 100;
		})
		.on("start", function() {
			d3.select(this)
			.attr("cx", Math.random() * width)
			.attr("cy", Math.random() * height);
		});
}

$(document).ready(function() {
	/* Initialize star-container to size of window */
	$(".star-container").width($(window).width());
	$(".star-container").height($(window).height());

	/* Initialize stars */
	generateStars();

	/* As window resizes, change star-container to size of window
	and regenerate stars */
	$(window).resize(function() {
		$(".star-container").width($(window).width());
		$(".star-container").height($(window).height());

		d3.selectAll("circle")
			.remove();

		generateStars();
	});

	/* On click, regenerate stars */
	$("#regenerate").on("click", function() {
		d3.selectAll("circle")
			.remove();

		generateStars();
	})

	$("#starfall").on("click", function() {
		starFall();
	})
});