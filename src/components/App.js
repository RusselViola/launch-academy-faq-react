import React from 'react';
import QuestionList from './QuestionList'
const App = props => {
  return (
    <div className="app">
      <div className="small-8 small-centered columns">
        <h1 className="title text-center">We're Here to Help</h1>
      </div>
      <QuestionList
        questions={props.data}
      />
    </div>
  )
};
export default App;
