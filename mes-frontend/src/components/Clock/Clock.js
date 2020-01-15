import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    console.log("this.props", this.props);
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0(num) {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());

    if (time > 0) {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({ days, hours, minutes, seconds });
    } else {
      const seconds = 0;
      const minutes = 0;
      const hours = 0;
      const days = 0;

      this.setState({ days, hours, minutes, seconds });
    }
  }

  render() {
    return (
      <div>
        <div className="clock-days">
          <strong>{this.leading0(this.state.days)}</strong> d{" "}
        </div>

        <div className="clock-hours">
          <strong>{this.leading0(this.state.hours)}</strong> h{" "}
        </div>

        <div className="clock-minutes">
          <strong>{this.leading0(this.state.minutes)}</strong> m{" "}
        </div>

        <div className="clock-seconds">
          <strong>{this.leading0(this.state.seconds)}</strong> s{" "}
        </div>
      </div>
    );
  }
}

export default Clock;
