import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="container1">
      <h1 className="heading1">{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Trivia App",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
