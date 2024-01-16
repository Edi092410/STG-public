import PropTypes from 'prop-types'
import cn from 'classnames'

import classes from "./Button.module.css";
import '../index.css'

const Button = ({ children, onClick, className, disabled, theme='dark', ...attrs }) => {
  const btn_classes = cn(classes.button, classes[theme], className) 
  
  return (
    <button
      {...attrs}
      className={btn_classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.string
}

Button.defualtProps = {
  children: 'Button',
  onClick: () => {},
  className: '',
  disabled: false,
  theme: 'dark'  
}

export default Button;