import React from "react";
import PropTypes from "prop-types";
import { convertDateToString } from "../../utils/Utils";

const Item = ({ index, onShowData, ...data }) => (
  <tr className="text-capitalize">
    <th scope="row">
      <p className="pt-2">{index + 1}</p>
    </th>
    <td className="d-flex flex-row">
      <img
        className="rounded-circle me-2"
        src={data.picture.thumbnail}
        alt="thumbnail"
      />
      <div className="mt-2">
        {data.name.title}. <b>{data.name.last}</b> {data.name.first}
      </div>
    </td>
    <td>
      <p className="pt-2">{convertDateToString(data.registered.date)}</p>
    </td>
    <td className="text-center">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onShowData(data)}
      >
        Détail
      </button>
    </td>
  </tr>
);

Item.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.shape({
    name: PropTypes.exact({
      title: PropTypes.string.isRequired,
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    registered: PropTypes.shape({
      date: PropTypes.string.isRequired,
    }).isRequired,
    picture: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  }),
  onShowData: PropTypes.func.isRequired,
};

export default React.memo(Item);
