import PropTypes from "prop-types";

function Error({ message }) {
  return <div className=" text-[14px] font-bold text-red-700">{message}</div>;
}
Error.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Error;
