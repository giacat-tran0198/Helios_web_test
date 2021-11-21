import React, { useState } from "react";
import Item from "./Item";
import List from "./List";

const Staff = () => {
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useState(null);

  const onHideModal = () => setIsShow(false);
  const onShowData = (value) => {
    setData(value);
    setIsShow(true);
  };

  return (
    <>
      <Item isShow={isShow} onHideModal={onHideModal} data={data} />
      <List onShowData={onShowData} />
    </>
  );
};

export default React.memo(Staff);
