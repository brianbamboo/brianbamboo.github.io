var app = angular.module('PortfolioApp', []).controller('MainCtrl', ['$scope', function($scope) {
	$scope.projects = [
		{ title : 'An Analysis of City of Chicago Employee Salaries',
		  link  : 'salaries.html',
		  date  : 'July 2017',
		  description : "For this project, I analyzed a dataset on city of Chicago employee salaries, created some data visualizations and learned that there is a person in Chicago that earns an annual salary of $1. For real. It's a thing.",
		  image : 'assets/proj5.png'
		},

		{ title : 'Miyazaki Quote Generator',
		  link  : '../quote-generator/quote-generator.html',
		  date  : 'July 2017',
		  description : 'or this project, we used d3 to create an interactive scatterplot. This project was part of a class at Stanford, CME151A: Interactive Visualization using d3.',
		  image : 'assets/proj4.png'
		},

		{ title : 'The Merger of Memphis City and Shelby County Schools',
		  link  : '#',
		  date  : 'July 2017',
		  description : "I was in Memphis this summer and found myself interested in understanding the politics of the MCS-SCS merger, where the Memphis City and Shelby County Districts merged and six suburban municipalities subsequently broke off to form their own districts.",
		  image : 'assets/proj2.png'
		},

		{ title : 'Visualization of Pokemon Attributes using d3.js',
		  link  : '#',
		  date  : 'May 2017',
		  description : 'For this project, we used d3 to create an interactive scatterplot. This project was part of a class at Stanford, CME151A: Interactive Visualization using d3.',
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