import React from "react";
import PropTypes from "prop-types";

const Loading = ({ isLoading }) => (
  <div className="text-center">
    {isLoading && <div className="spinner-border text-primary" role="status" />}
  </div>
);

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default React.memo(Loading);
