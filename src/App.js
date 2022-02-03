import "./App.css";
import React, { useState } from "react";
import { render } from "react-dom";
import Statistics from "./components/Statistics.jsx";
import FeedbackOptions from "./components/FeedbackOptions.jsx";
import Section from "./components/Section";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = (key) => {
    switch (key) {
      case "good":
        setGood((prevGood) => {
          return prevGood + 1;
        });
        console.log(good);
        break;
      case "neutral":
        setNeutral((prevNeutral) => {
          return prevNeutral + 1;
        });
        break;
      case "bad":
        setBad((prevBad) => {
          return prevBad + 1;
        });
        break;

      default:
        return;
    }
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const percentage = Math.round(
      (good / countTotalFeedback(good, neutral, bad)) * 100
    );
    if (isNaN(percentage)) {
      return 0;
    }
    return percentage;
  }

  const options = Object.keys({ good, neutral, bad });
  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}
