import React, { Component } from "react";
import PropTypes from "prop-types";
import QuizQuestionButton from "./QuizQuestionButton.js";

export default class QuizQuestion extends Component {
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {/* <li>{this.props.quiz_question.answer_options[0]}</li> */}
            <li>
              <QuizQuestionButton
                button_text={this.props.quiz_question.answer_options[0]}
              />
            </li>
          </ul>
        </section>
      </main>
    );
  }
}

QuizQuestion.propsTypes = {
  quiz_question: PropTypes.object.isRequired,
};
