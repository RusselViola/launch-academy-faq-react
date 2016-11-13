import React from 'react';

const Question = props => {

  let optionalAnswer = null;
  let button;

  if (props.display) {
    optionalAnswer = props.answer
    button = "fa fa-minus-square red"
  } else {
    button = "fa fa-plus-square green"
  }

  return(
    <div className="Question-block ">
      <button onClick={props.handleClick}>
      <i className={button} aria-hidden="true"></i>
      </button>
      <h3 className="align">{props.query}</h3>
        <p>{optionalAnswer}</p>
        <hr></hr>
    </div>
  )
}

export default Question;


// .fa-plus-square-o
