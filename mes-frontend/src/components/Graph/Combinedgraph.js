import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import CompetencyService from '../../services/CompetencyService';



const competencyService = new CompetencyService();




var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

class CombinedLineGraph extends Component {

  constructor(props) {
		super(props);


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
    const label = ['First Quarter','Second Quarter','Third Quarter', 'Fourth Quarter'];

    const organizationDataPoints = this.props.results.map((quater, index) => (
       {'y':quater.results.organization, 'label':label[index] }
    ));

    const innovationDataPoints = this.props.results.map((quater, index) => (
       {'y':quater.results.innovation, 'label':label[index] }
    ));

    const ctDataPoints = this.props.results.map((quater, index) => (
       {'y':quater.results.critical_thinking, 'label':label[index] }
    ));

    const ipPoints = this.props.results.map((quater, index) => (
       {'y':quater.results.interpersonal_communication, 'label':label[index] }
    ));

    const relDataPoints = this.props.results.map((quater, index) => (
       {'y':quater.results.relationships, 'label':label[index] }
    ));






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
				dataPoints: organizationDataPoints,
			},
			{
				toolTipContent: "<strong>{name}:</strong> {y}  ({rating})",
				type: "column",
				name: "Interpersonal Communication",
				showInLegend: true,
				yValueFormatString: "#,##0",
				dataPoints:ipPoints,
			},
			{
				toolTipContent: "<strong>{name}:</strong> {y}  ({rating}) ",
				type: "column",
				name: "Innovation",
				showInLegend: true,
				yValueFormatString: "#,##0",

				dataPoints:innovationDataPoints,
      },
      {
				toolTipContent: "<strong>{name}:</strong> {y}  ({rating}) ",
				type: "column",
				name: "Building & Managing Relations",
				showInLegend: true,
				yValueFormatString: "#,##0",
				dataPoints: relDataPoints,
      },
      {
				toolTipContent: "<strong>{name}:</strong> {y}  ({rating})",
				type: "column",
				name: "Critical Thinking",
				showInLegend: true,
				yValueFormatString: "#,##0",
				dataPoints: ctDataPoints,
			}
    ]
		}
    return (

			

      <div>

			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref}
			/>

    </div>

     );
  }
}

export default CombinedLineGraph;
