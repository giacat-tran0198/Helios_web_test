import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {
  API_URL,
  API_PARA_NAT,
  API_PARA_PAGE,
  API_PARA_RESULT,
  API_PARA_SEED,
} from "../../utils/Config";
import SilderbarList from "../../layout/staff/SildebarList";
import ItemLayout from "../../layout/staff/Item";

const List = ({ onShowData }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(API_PARA_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isLoading
      )
        return;
      setIsLoading(true);
    };
    window.addEventListener("scroll", handleScroll);
    fetchMoreListItems();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isLoading) return;
    fetchMoreListItems();
  }, [isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchMoreListItems = useCallback(() => {
    axios
      .get(API_URL, {
        params: {
          nat: API_PARA_NAT,
          page: page,
          results: API_PARA_RESULT,
          seed: API_PARA_SEED,
        },
      })
      .then((data) => {
        setData((oldEles) => [...oldEles, ...data.data.results]);
        setPage((ele) => ele + 1);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, [page]);

  return (
    <>
      <SilderbarList isLoading={isLoading}>
        {data.map((item, index) => (
          <ItemLayout
            key={item.login.uuid}
            index={index}
            {...item}
            onShowData={onShowData}
          />
        ))}
      </SilderbarList>
    </>
  );
};

List.propTypes = {
  onShowData: PropTypes.func.isRequired,
};

export default React.memo(List);
