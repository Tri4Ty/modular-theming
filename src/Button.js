import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.css";

const Button = props => {
  let { text } = props;

  return (
    <button
      className={styles.button}
      onClick={() => {
        alert(`you clicked ${text}`);
      }}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string
};

Button.defaultProps = {
  text: "Click Me"
};
