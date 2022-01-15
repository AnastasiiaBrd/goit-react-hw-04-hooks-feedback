import react from "react";
import propTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <div>
      <h1> {title}</h1>
      {children}
    </div>
  );
};
export default Section;

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.string.isRequired,
};
