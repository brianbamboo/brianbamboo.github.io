var app = angular.module('PortfolioApp', []).controller('MainCtrl', ['$scope', function($scope) {
	$scope.projects = [
		{ title : 'An Analysis of Public Wi-Fi in NYC',
		  link  : 'projects/nyc-wifi.html',
		  date  : 'Sep 2017',
		  description: "I don't use Python for data analysis as much as I do in R, so I decided to perform this simple analysis on Wi-Fi hotspots in NYC using Jupyter Notebook. Data processing in pandas, visualizations with seaborn, and regression with statsmodels.",
		  image : 'assets/proj8.png'
		},

		{ title : 'An Analysis of City Trees in SF',
		  link  : 'projects/sf_trees.html',
		  date  : 'Sep 2017',
		  description: "It's been a while since I've mapped something, so it was pretty cool to create this density map of city trees in San Francisco, along with learning some information through some simple tabulations and graphs. Mapping done with ggmap.",
		  image : 'assets/proj7.png'
		},

		{ title : 'An Analysis of Airplane Crashes since 1908',
		  link  : 'projects/airplanes.html',
		  date  : 'Aug 2017',
		  description: "Picked up this dataset off kaggle, and created a bunch of visualizations. Learned that there were a lot of airplane crashes in WWII. The Germans crashed a lot less than the Americans. Also, don't fly Aeroflot.",
		  image : 'assets/proj6.png'
	    },

		{ title : 'An Analysis of City of Chicago Employee Salaries',
		  link  : 'projects/salaries.html',
		  date  : 'July 2017',
		  description : "For this project, I analyzed a dataset on city of Chicago employee salaries, created some data visualizations and learned that there is a person in Chicago that earns an annual salary of $1. For real. It's a thing.",
		  image : 'assets/proj5.png'
		},

		{ title : 'Visualization of Pokemon Attributes using d3.js',
		  link  : '#',
		  date  : 'May 2017',
		  description : 'For this project, we used d3 to create an interactive scatterplot. This project was part of a class at Stanford, CME151A: Interactive Visualization using d3.',
		  image : 'assets/proj2.png'
		},

		{ title : 'Miyazaki Quote Generator',
		  link  : '../quote-generator/quote-generator.html',
		  date  : 'July 2017',
		  description : 'For this project, we used d3 to create an interactive scatterplot. This project was part of a class at Stanford, CME151A: Interactive Visualization using d3.',
		  image : 'assets/proj4.png'
		},

		{ title : 'The Merger of Memphis City and Shelby County Schools',
		  link  : '#',
		  date  : 'July 2017',
		  description : "I was in Memphis this summer and found myself interested in understanding the politics of the MCS-SCS merger, where the Memphis City and Shelby County Districts merged and six suburban municipalities subsequently broke off to form their own districts.",
		  image : 'assets/proj2.png'
		},

		{ title : 'Visualization of Student Alcohol Consumption',
		  link  : '#',
		  date  : 'April 2017',
		  description : "For this project, I used d3 to create an interactive barplot. This project was part of a class at Stanford, CME151A: Interactive Visualization using d3.",
		  image : 'assets/proj1.png'
		}
		  ];
		}
]);