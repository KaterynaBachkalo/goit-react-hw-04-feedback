import { useState } from 'react';
import { Statistics } from './components/Statistics/Statistics';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Section } from './components/Section/Section';
import { Notification } from './components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const onLeaveFeedback = status => {
    if (status === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (status === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (status === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const countFeedback = countTotalFeedback();
    return Math.round((good * 100) / countFeedback);
  };

  const totalFeedback = countTotalFeedback();

  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
