import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import resultsj from '.././svg/ms-meme.jpg';
import resultsgood from '.././svg/ms-good.jpg';

function Result(props) {

  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
       <h2> Your service is  <strong>{props.quizResult}</strong>! </h2>
      </div>
      <div>
        {props.quizResult=='Not-A-Microservice' ? <img src={resultsj} className="result-sj" alt="logo" /> : <img src={resultsgood} className="result-sj" alt="logo" />}

      </div>
    </ReactCSSTransitionGroup>
  );

}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
