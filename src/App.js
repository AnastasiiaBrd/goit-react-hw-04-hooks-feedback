import "./App.css";
import React from "react";
import { render } from "react-dom";
import Statistics from "./components/Statistics.jsx";
import FeedbackOptions from "./components/FeedbackOptions.jsx";
import Section from "./components/Section";

function countTotalFeedback(state) {
  return state.good + state.neutral + state.bad;
}

function countPositiveFeedbackPercentage(state) {
  const percentage = Math.round((state.good / countTotalFeedback(state)) * 100);
  if (isNaN(percentage)) {
    return 0;
  }
  return percentage;
}

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (key) => {
    this.setState((prevState) => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <div className="App">
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleIncrement}
        />

        <Section title="Statistics" />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={countTotalFeedback(this.state)}
          positivePercentage={countPositiveFeedbackPercentage(this.state)}
        />
      </div>
    );
  }
}

export default App;
