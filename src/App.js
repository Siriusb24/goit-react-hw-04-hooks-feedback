import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from 'components/Section/Section';
import './App.css';

export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  const countTotalFeedback = good + bad + neutral;
  //console.log(countTotalFeedback)


  const countPositiveFeedbackPercentage = Math.round((good * 100) / countTotalFeedback);
  //console.log(countPositiveFeedbackPercentage)


  const handleChange = event => {
    const {textContent} = event.target;

    //console.log(event.target.textContent)
    
    switch(textContent){
      case 'good':
        setGood(prevState => prevState+1);
        break;
      case 'bad':
        setBad(prevState => prevState+1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState+1);
        break;
      default:
        return;
    }
  };

    return (
      <>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleChange}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            totalCounter={countTotalFeedback}
            totalPercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
}
