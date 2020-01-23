import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

class CombinedLineGraph extends Component {




  constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
		this.addSymbols = this.addSymbols.bind(this);
	
	}
	

	addSymbols(e) {
		var suffixes = ["", "K", "M", "B",];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if (order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}

	getRating(x){
		if(x < 60){
			return "Foundational"
		}
		else if(x < 90){
			return "Profecient"
		}
		else{
			return "Exemplary"
		}
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

		console.log("Rating", this.getRating(80))

    const options = {
			animationEnabled: true,
			colorSet: "colorSet1",

			axisX: {
				interval: 1
			},		
			toolTip: {
				shared: true,
				animationEnabled: true ,
				cornerRadius: 5,
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries,
				verticalAlign: "bottom"
			},
			data: [
				{
				
				toolTipContent: "<strong>{name}:</strong> {y}  ({rating})",
				type: "column",
				name: "Organization",
				showInLegend: true,
				yValueFormatString: "#,##0",
				dataPoints: [
					{ y: 38, label: "First Quarter", rating: this.getRating(38)},
					{ y: 38, label: "Second Quarter", rating: this.getRating(38)},
					{ y: 78, label: "Third Quarter", rating: this.getRating(78)},
					{ y: 88, label: "Last Quarter", rating: this.getRating(88)}				
				]
			},
			{
				toolTipContent: "<strong>{name}:</strong> {y}  ({rating})",
				type: "column",
				name: "Interpersonal Communication",
				showInLegend: true,
				yValueFormatString: "#,##0",
				dataPoints: [
					{ y: 78, label: "First Quarter", rating: this.getRating(78)},
					{ y: 48, label: "Second Quarter", rating: this.getRating(48)},
					{ y: 88, label: "Third Quarter", rating: this.getRating(88)},
					{ y: 100, label: "Last Quarter", rating: this.getRating(100)}			
				]
			},
			{
				toolTipContent: "<strong>{name}:</strong> {y}  ({rating}) ",
				type: "column",
				name: "Innovation",
				showInLegend: true,
				yValueFormatString: "#,##0",
				dataPoints: [
					{ y: 46, label: "First Quarter", rating: this.getRating(46)},
					{ y: 68, label: "Second Quarter", rating: this.getRating(68)},
					{ y: 44, label: "Third Quarter", rating: this.getRating(44)},
					{ y: 67, label: "Last Quarter", rating: this.getRating(67)}				
				]
      },
      {
				toolTipContent: "<strong>{name}:</strong> {y}  ({rating}) ",
				type: "column",
				name: "Building & Managing Relations",
				showInLegend: true,
				yValueFormatString: "#,##0",
				dataPoints: [
					{ y: 43, label: "First Quarter", rating: this.getRating(43)},
					{ y: 65, label: "Second Quarter", rating: this.getRating(65)},
					{ y: 66, label: "Third Quarter", rating: this.getRating(66)},
					{ y: 64, label: "Last Quarter", rating: this.getRating(64)}				
				]
      },
      {
				toolTipContent: "<strong>{name}:</strong> {y}  ({rating})",
				type: "column",
				name: "Critical Thinking",
				showInLegend: true,
				yValueFormatString: "#,##0",
				dataPoints: [
					{ y: 80, label: "First Quarter", rating: this.getRating(80)},
					{ y: 88, label: "Second Quarter", rating: this.getRating(88)},
					{ y: 84, label: "Third Quarter", rating: this.getRating(84)},
					{ y: 81, label: "Last Quarter", rating: this.getRating(81)}			
				],
			
			}
    ]
		}
    return ( 

			

      <div>
			
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>

     );
  }
}
 
export default CombinedLineGraph;