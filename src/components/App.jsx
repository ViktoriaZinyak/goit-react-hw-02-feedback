import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  plusGoodPoint = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  plusNeutralPoint = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  plusBadPoint = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <section>
          <h2>Please leave feedback</h2>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={{
              onPlus: this.plusGoodPoint,
              onNeutral: this.plusNeutralPoint,
              onBad: this.plusBadPoint,
            }}
          />
        </section>
        <section>
          <h2>Statistics</h2>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            //total={total}
            positivePercentage={null}
          />
          {/* <div>
            <p>
              Good: <span>{this.state.good}</span>
            </p>
            <p>
              Neutral: <span>{this.state.neutral}</span>
            </p>
            <p>
              Bad: <span>{this.state.bad}</span>
            </p>
            <p>Total </p>
            <p>Positive feedback: </p>
          </div> */}
        </section>
      </div>
    );
  }
}

export default App;
