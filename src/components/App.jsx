import React from 'react';

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
          <div>
            <button onClick={this.plusGoodPoint}>Good</button>
            <button onClick={this.plusNeutralPoint}>Neutral</button>
            <button onClick={this.plusBadPoint}>Bad</button>
          </div>
        </section>
        <section>
          <h2>Statistics</h2>
          <div>
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
          </div>
        </section>
      </div>
    );
  }
}

export default App;
