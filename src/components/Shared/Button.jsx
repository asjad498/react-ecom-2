import PropTypes from "prop-types";

const Button = ({ text, bgColor, textColor, handler = () => {} }) => {
  return (
    <button
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
      onClick={handler}
    >
      {text}
    </button>
  );
};

// Define PropTypes
Button.propTypes = {
  text: PropTypes.string.isRequired, // text must be a string and is required
  bgColor: PropTypes.string, // bgColor must be a string
  textColor: PropTypes.string, // textColor must be a string
  handler: PropTypes.func, // handler must be a function
};

// Default Props (optional)
// Button.defaultProps = {
//   bgColor: 'bg-blue-500',                  // default background color
//   textColor: 'text-white',                 // default text color
// };

export default Button;
