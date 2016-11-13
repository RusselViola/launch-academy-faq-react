import React from 'react'
import Question from './Question';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedQuestionId: null}
    this.handleQuestionClick = this.handleQuestionClick.bind(this)
  }

  handleQuestionClick(id) {
    if (id === this.state.selectedQuestionId){
      this.setState({selectedQuestionId: null})
    } else {
      this.setState({selectedQuestionId: id})
    }
  }

  render() {
    let questions = this.props.questions.map(question => {
      let display = false;

      if (question.id === this.state.selectedQuestionId) {
        display = true;
      }

      let onQuestionClick = () => this.handleQuestionClick(question.id);

      return (
        <Question
          key={question.id}
          query={question.question}
          answer={question.answer}
          handleClick={onQuestionClick}
          display={display}
        />
      )
    });

    return (
      <ul>
        {questions}
      </ul>
    )
  }
}

export default QuestionList;
