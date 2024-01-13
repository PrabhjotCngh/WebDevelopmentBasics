import PropTypes from "prop-types";
import styles from "./Button.module.css";

Button.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
