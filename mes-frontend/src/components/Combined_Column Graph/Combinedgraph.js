import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

class CombinedLineGraph extends Component {
  constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	
	}

	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
 
  render() { 

    // const options = {
		// 	animationEnabled: true,
		// 	colorSet: "colorSet2",
			
		
		// 	toolTip: {
		// 		shared: true
		// 	},
		// 	legend: {
		// 		cursor: "pointer",
		// 		itemclick: this.toggleDataSeries,
		// 		verticalAlign: "top"
		// 	},
		// 	data: [{
		// 		type: "column",
		// 		name: "Organization",
		// 		showInLegend: true,
		// 		yValueFormatString: "#,##0",
		// 		dataPoints: [
		// 			{ x: new Date(2017, 6), y: 38 },
		// 			{ x: new Date(2017, 12), y: 39 },
		// 			{ x: new Date(2018, 6), y: 78 },
		// 			{ x: new Date(2018, 12), y: 89 },				
		// 		]
		// 	},{
		// 		type: "column",
		// 		name: "Interpersonal Comm.",
		// 		showInLegend: true,
		// 		yValueFormatString: "#,##0",
		// 		dataPoints: [
		// 			{ x: new Date(2017, 6), y: 78 },
		// 			{ x: new Date(2017, 12), y: 39 },
		// 			{ x: new Date(2018, 6), y: 98 },
		// 			{ x: new Date(2018, 12), y: 100 },
				
		// 		]
		// 	},
		// 	{
		// 		type: "column",
		// 		name: "Innovation",
		// 		showInLegend: true,
		// 		yValueFormatString: "#,##0",
		// 		dataPoints: [
		// 			{ x: new Date(2017, 6), y: 56 },
		// 			{ x: new Date(2017, 12), y: 69},
		// 			{ x: new Date(2018, 6), y: 55 },
		// 			{ x: new Date(2018, 12), y: 67 },				
		// 		]
    //   },
    //   {
		// 		type: "column",
		// 		name: "Building & Managing Relat.",
		// 		showInLegend: true,
		// 		yValueFormatString: "#,##0",
		// 		dataPoints: [
		// 			{ x: new Date(2017, 6), y: 53 },
		// 			{ x: new Date(2017, 12), y: 69},
		// 			{ x: new Date(2018, 6), y: 66 },
		// 			{ x: new Date(2018, 12), y: 64 },				
		// 		]
    //   },
    //   {
		// 		type: "column",
		// 		name: "Critical Thinking",
		// 		showInLegend: true,
		// 		yValueFormatString: "#,##0",
		// 		dataPoints: [
		// 			{ x: new Date(2017, 6), y: 80 },
		// 			{ x: new Date(2017, 12), y: 89},
		// 			{ x: new Date(2018, 6), y: 95 },
		// 			{ x: new Date(2018, 12), y: 92 },				
		// 		]
		// 	}
    // ]
		// }
    return ( 

    //   <div>
			
		// 	<CanvasJSChart options = {options} 
		// 		// onRef={ref => this.chart = ref}
		// 	/>
		// 	{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		// </div>

     );
  }
}
 
export default CombinedLineGraph;