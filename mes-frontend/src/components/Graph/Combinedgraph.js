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

    const options = {
			animationEnabled: true,
			colorSet: "colorSet1",

			axisX: {
				interval: 1
			},
			
		
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries,
				verticalAlign: "top"
			},
			data: [
				{
				type: "column",
				name: "Organization",
				showInLegend: true,
				yValueFormatString: "#,##0",
				dataPoints: [
					{ y: 38, label: "First Quarter"},
					{ y: 38, label: "Second Quarter"},
					{ y: 78, label: "Third Quarter"},
					{ y: 88, label: "Last Quarter"}				
				]
			},
			{
				type: "column",
				name: "Interpersonal Comm.",
				showInLegend: true,
				yValueFormatString: "#,##0",
				dataPoints: [
					{ y: 78, label: "First Quarter"},
					{ y: 48, label: "Second Quarter"},
					{ y: 88, label: "Third Quarter"},
					{ y: 100, label: "Last Quarter"}			
				]
			},
			{
				type: "column",
				name: "Innovation",
				showInLegend: true,
				yValueFormatString: "#,##0",
				dataPoints: [
					{ y: 46, label: "First Quarter"},
					{ y: 68, label: "Second Quarter"},
					{ y: 44, label: "Third Quarter"},
					{ y: 67, label: "Last Quarter"}				
				]
      },
      {
				type: "column",
				name: "Building & Managing Relat.",
				showInLegend: true,
				yValueFormatString: "#,##0",
				dataPoints: [
					{ y: 43, label: "First Quarter"},
					{ y: 65, label: "Second Quarter"},
					{ y: 66, label: "Third Quarter"},
					{ y: 64, label: "Last Quarter"}				
				]
      },
      {
				type: "column",
				name: "Critical Thinking",
				showInLegend: true,
				yValueFormatString: "#,##0",
				dataPoints: [
					{ y: 80, label: "First Quarter"},
					{ y: 88, label: "Second Quarter"},
					{ y: 84, label: "Third Quarter"},
					{ y: 81, label: "Last Quarter"}			
				]
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