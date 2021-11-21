import React from "react";
import PropTypes from "prop-types";
import { convertDateToString } from "../../utils/Utils";

const ItemDetail = ({
  picture,
  name,
  dob,
  registered,
  phone,
  email,
  location,
}) => (
  <div className="card text-capitalize">
    <img className="card-img-top" src={picture.large} alt={name.first + " " + name.last} />
    <div className="card-body">
      <h5 className="card-title text-center">
        {name.title}. {name.first} {name.last}
      </h5>
      <table className="card-table table">
        <tbody>
          <tr>
            <th scope="row">Hire date</th>
            <td>{convertDateToString(registered.date)}</td>
          </tr>
          <tr>
            <th scope="row">Naissance</th>
            <td>{convertDateToString(dob.date)}</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>
              <a href={"mailto:" + email}>{email}</a>
            </td>
          </tr>
          <tr>
            <th scope="row">Tell</th>
            <td>
              <a href={"tel:" + phone}>{phone}</a>
            </td>
          </tr>
          <tr>
            <th scope="row">Location</th>
            <td>
              N°{location.street.number} {location.street.name}, {location.city}{" "}
              {location.postcode}, {location.country}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

ItemDetail.propTypes = {
  picture: PropTypes.shape({
    large: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.exact({
    title: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }).isRequired,
  registered: PropTypes.shape({
    date: PropTypes.string.isRequired,
  }).isRequired,
  dob: PropTypes.shape({
    date: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.shape({
    street: PropTypes.exact({
      number: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    city: PropTypes.string.isRequired,
    postcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(ItemDetail);
