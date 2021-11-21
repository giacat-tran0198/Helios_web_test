import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Modal = ({ children, isShow, onHideModal }) => (
  <div className={`modal ${isShow ? " modal-show" : ""}`}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Le détail d'employée</h5>
          <button type="button" className="btn-close" onClick={onHideModal} />
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onHideModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node,
  isShow: PropTypes.bool.isRequired,
  onHideModal: PropTypes.func.isRequired,
};

export default React.memo(Modal);
