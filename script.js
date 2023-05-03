// Define variables for the input fields and submit button
const inputField = document.getElementById("input-value");
const maxField = document.getElementById("max-value");
const submitBtn = document.getElementById("submit-btn");
const colorPicker = document.getElementById("color-picker");

// Define variables for the graph containers
const verticalBarGraphContainer = document.getElementById("vertical-bar-graph");
const pieChartContainer = document.getElementById("pie-chart");
const gradientVerticalBarGraphContainer = document.getElementById("gradient-vertical-bar-graph");




// function createVerticalBarGraph(inputValue, maxValue, color) {
// 	const options = {
// 	  chart: {
// 		height: "100%",
// 		type: "bar",
// 		toolbar: {
// 		  show: false
// 		}
// 	  },
// 	  plotOptions: {
// 		bar: {
// 		  horizontal: false,
// 		  columnWidth: "80%",
// 		  endingShape: "flat",
// 		  dataLabels: {
// 			position: "top",
// 		  },
// 		},
// 	  },
// 	  dataLabels: {
// 		enabled: true,
// 		offsetY: -20,
// 		style: {
// 		  fontSize: "14px",
// 		  colors: [color]
// 		}
// 	  },
// 	  stroke: {
// 		show: true,
// 		width: 2,
// 		colors: ["transparent"]
// 	  },
// 	  series: [{
// 		name: "Input Value",
// 		data: [inputValue]
// 	  }, {
// 		name: "Max Value",
// 		data: [maxValue]
// 	  }],
// 	  xaxis: {
// 		categories: ["Value"]
// 	  },
// 	  yaxis: {
// 		max: maxValue,
// 		labels: {
// 		  formatter: function(val) {
// 			return val.toFixed(0);
// 		  }
// 		}
// 	  },
// 	  fill: {
// 		colors: [color],
// 		type: "gradient",
// 		gradient: {
// 		  shade: "dark",
// 		  type: "vertical",
// 		  shadeIntensity: 0.5,
// 		  opacityFrom: 0.5,
// 		  opacityTo: 0.8,
// 		  stops: [0, 100]
// 		}
// 	  }
// 	};
// 	const chart = new ApexCharts(verticalBarGraphContainer, options);
// 	chart.render();
//   }


// function createVerticalBarGraph(inputValue, maxValue, color) {
// 	const percentage = (inputValue / maxValue) * 100;
  
// 	const options = {
// 	  chart: {
// 		height: "100%",
// 		type: "bar",
// 		toolbar: {
// 		  show: false
// 		}
// 	  },
// 	  plotOptions: {
// 		bar: {
// 		  horizontal: false,
// 		  columnWidth: "40%",
// 		  endingShape: "flat",
// 		  dataLabels: {
// 			position: "top",
// 			formatter: function(val) {
// 			  return val.toFixed(0) + "%";
// 			},
// 			offsetY: -20,
// 			style: {
// 			  fontSize: "14px",
// 			  colors: [color]
// 			}
// 		  },
// 		},
// 	  },
// 	  stroke: {
// 		show: true,
// 		width: 2,
// 		colors: ["transparent"]
// 	  },
// 	  series: [{
// 		name: "Input Value",
// 		data: [percentage]
// 	  }],
// 	  xaxis: {
// 		categories: ["Value"]
// 	  },
// 	  yaxis: {
// 		max: 100,
// 		labels: {
// 		  formatter: function(val) {
// 			return val.toFixed(0) + "%";
// 		  }
// 		}
// 	  },
// 	  fill: {
// 		colors: [color],
// 		type: "gradient",
// 		gradient: {
// 		  shade: "dark",
// 		  type: "vertical",
// 		  shadeIntensity: 0.5,
// 		  opacityFrom: 0.5,
// 		  opacityTo: 0.8,
// 		  stops: [0, 100]
// 		}
// 	  }
// 	};
  
// 	const chart = new ApexCharts(verticalBarGraphContainer, options);
// 	chart.render();
//   }
  


function createVerticalBarGraph(inputValue, maxValue, color) {
	const percentage = (inputValue / maxValue) * 100;
  
	const options = {
	  chart: {
		height: "100%",
		type: "bar",
		toolbar: {
		  show: false
		}
	  },
	  plotOptions: {
		bar: {
		  horizontal: false,
		  columnWidth: "40%",
		  endingShape: "flat",
		  dataLabels: {
			position: "top",
			formatter: function(val) {
			  return val.toFixed(0) + "%";
			},
			offsetY: -20,
			style: {
			  fontSize: "14px",
			  colors: [color]
			}
		  },
		},
	  },
	  stroke: {
		show: true,
		width: 2,
		colors: ["transparent"]
	  },
	  series: [{
		name: "Input Value",
		data: [percentage]
	  }],
	  xaxis: {
		categories: ["Value"]
	  },
	  yaxis: {
		max: 100,
		labels: {
		  formatter: function(val) {
			return val.toFixed(0) + "%";
		  }
		}
	  },
	  fill: {
		colors: [color],
		type: "gradient",
		gradient: {
		  shade: "dark",
		  type: "vertical",
		  shadeIntensity: 0.5,
		  opacityFrom: 0.5,
		  opacityTo: 0.8,
		  stops: [0, 100]
		}
	  }
	};
  
	const chart = new ApexCharts(verticalBarGraphContainer, options);
	chart.render();
  }
  







  
// pie chart.......



function createPieChart(inputValue, maxValue, color) {
	const options = {
	  chart: {
		height: "100%",
		type: "pie",
		toolbar: {
		  show: false
		}
	  },
	  plotOptions: {
		pie: {
		  dataLabels: {
			show: true,
			name: {
			  fontSize: "16px",
			  fontFamily: "Helvetica, Arial, sans-serif",
			  color: undefined,
			  offsetY: -10
			},
			value: {
			  fontSize: "28px",
			  fontFamily: "Helvetica, Arial, sans-serif",
			  color: undefined,
			  offsetY: 5,
			  formatter: function(val) {
				return val.toFixed(0) + "%";
			  }
			},
			total: {
			  show: true,
			  label: "Max Value",
			  fontSize: "16px",
			  fontFamily: "Helvetica, Arial, sans-serif",
			  color: "#888",
			  offsetY: 40
			}
		  }
		}
	  },
	  fill: {
		colors: [color]
	  },
	  series: [inputValue / maxValue * 100]
	};
  
	const chart = new ApexCharts(pieChartContainer, options);
	chart.render();
  }
  
	
	// //////////////////////

	
	function createGradientVerticalBarGraph(inputValue, maxValue, color) {
	const options = {
	chart: {
	height: "100%",
	type: "bar",
	toolbar: {
	show: false
	}
	},
	plotOptions: {
	bar: {
	horizontal: false,
	columnWidth: "80%",
	endingShape: "flat",
	dataLabels: {
	position: "top",
	},
	},
	},
	dataLabels: {
	enabled: true,
	offsetY: -20,
	style: {
	fontSize: "14px",
	colors: [color]
	}
	},
	stroke: {
	show: true,
	width: 2,
	colors: ["transparent"]
	},
	series: [{
	name: "Input Value",
	data: [inputValue]
	}, {
	name: "Max Value",
	data: [maxValue]
	}],
	xaxis: {
	categories: ["Value"]
	},
	yaxis: {
	max: maxValue,
	labels: {
	formatter: function(val) {
	return val.toFixed(0);
	}
	}
	},
	fill: {
	colors: [color],
	type: "gradient",
	gradient: {
	shade: "dark",
	type: "vertical",
	shadeIntensity: 0.5,
	opacityFrom: 0.5,
	opacityTo: 0.8,
	stops: [0, 100]
	}
	}
	};
const chart = new ApexCharts(gradientVerticalBarGraphContainer, options);
chart.render();
}
// Define function for handling the submit button click event
function handleInput() {
	// Get the values from the input fields
	const inputValue = Number(inputField.value);
	const maxValue = Number(maxField.value);
	const color = colorPicker.value;
	// Check if the input value is greater than the max value
if (inputValue > maxValue) {
	alert("Input Value cannot be greater than Max Value!");
	return;
}

// Create the graphs with the input values and max value
createVerticalBarGraph(inputValue, maxValue, color);
createPieChart(inputValue, maxValue, color);
createGradientVerticalBarGraph(inputValue, maxValue, color);
}

// Attach event listener to the submit button
submitBtn.addEventListener("click", handleInput);










