import react from "react";
import reactDom from "react-dom";
import propTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((el) => (
    <button
      className="button"
      key={el}
      type="button"
      onClick={() => onLeaveFeedback(el)}
    >
      {el}
    </button>
  ));
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired),
  onLeaveFeedback: propTypes.func.isRequired,
};
