import React, { Component } from "react";
import PropTypes from "prop-types";

export default class QuizQuestionButton extends Component {
  render() {
    return (
      <li>
        <button>{this.props.button_text}</button>
      </li>
    );
  }
}

QuizQuestionButton.propTypes = {
  button_text: PropTypes.string.isRequired,
};
