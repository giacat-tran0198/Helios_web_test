import React, { Suspense } from "react";
import PropTypes from "prop-types";
import ItemDetail from "../../layout/staff/ItemDetail";

const Modal = React.lazy(() => import("../modal"));

const Item = ({ data, isShow, onHideModal }) => (
  <Suspense fallback={null}>
    <Modal isShow={isShow} onHideModal={onHideModal}>
      {data && <ItemDetail {...data} />}
    </Modal>
  </Suspense>
);

Item.propTypes = {
  data: PropTypes.object,
  isShow: PropTypes.bool.isRequired,
  onHideModal: PropTypes.func.isRequired,
};

export default React.memo(Item);
