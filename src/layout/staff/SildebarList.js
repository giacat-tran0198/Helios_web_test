import React from "react";
import PropTypes from "prop-types";
import Loading from "../../components/loading";

const SilderbarList = ({ children, isLoading }) => (
  <div className="card mx-6">
    <div className="card-header">liste des employés</div>
    <div className="card-body">
      <table className="table table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Hire date</th>
            <th className="text-center" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      <Loading isLoading={isLoading} />
    </div>
  </div>
);

SilderbarList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default React.memo(SilderbarList);
