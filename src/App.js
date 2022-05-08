import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from 'components/Section/Section';
import './App.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const value = event.target.textContent;

    this.setState(prevState => ({ [value]: (prevState[value] += 1) }));
    //console.log(this.state)
    //console.log(event)
  };

  countTotalFeedback = () => {
    const total = Object.keys(this.state).reduce(
      (sum, value) => sum + this.state[value],
      0,
    );
    //console.log(total)
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positivPercent = Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );

    return positivPercent;
  };

  render() {
    const { good, neutral, bad } = this.state;
    //console.log(Object.keys(this.state))
    return (
      <>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            totalCounter={this.countTotalFeedback}
            totalPercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}
