import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { orderBy } from "lodash";
import { connect } from "react-redux";

import "./App.scss";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { setData } from "./actions/setData";
import { setMaxPrice } from "./actions/setMaxPrice";
import { setMinPrice } from "./actions/setMinPrice";
import { sortData } from "./actions/sortData";
const sortFlights = (flights, sortBy) => {
  switch (sortBy) {
    case "high-price":
      return orderBy(flights, "flight.price.total.amount", "asc");
    case "low-price":
      return orderBy(flights, "flight.price.total.amount", "desc");
    case "time":
      return orderBy(
        flights,
        "flight.legs[0].segments[0].travelDuration",
        "asc"
      );
    default:
      return orderBy(flights, "flight.price.total.amount", "asc");
  }
};
const filterFlights = (flights, byMaxPrice, byMinPrice) => {
  return (
    flights &&
    flights.filter((item) => {
      if (byMaxPrice > 0)   {
        return (
          item.flight.price.passengerPrices[0].singlePassengerTotal.amount >=
            byMinPrice &&
          item.flight.price.passengerPrices[0].singlePassengerTotal.amount <=
            byMaxPrice
        );
      }
      return flights;
    })
  );
};
const searchFlights = (flights, byMaxPrice, byMinPrice, sortBy) => {
  return sortFlights(filterFlights(flights, byMaxPrice, byMinPrice), sortBy);
};
function App(props) {
  const {
    setData,
    flights,
    sortData,
    byMaxPrice,
    byMinPrice,
    setMaxPrice,
    setMinPrice,
  } = props;
  useEffect(() => {
    axios.get("flights.json").then(({ data }) => {
      setData(data);
    });
  }, [setData]);

  return (
    <div className="app">
      <Sidebar
        sortData={sortData}
        byMaxPrice={byMaxPrice}
        setMaxPrice={setMaxPrice}
        byMinPrice={byMinPrice}
        setMinPrice={setMinPrice}
      />
      <Main flights={flights} />
    </div>
  );
}
const mapStateToProps = ({ data, sort, maxPrice, minPrice }) => ({
  flights:
    data.data &&
    searchFlights(
      data.data.result.flights,
      maxPrice.byMaxPrice,
      minPrice.byMinPrice,
      sort.sortBy
    ),
  byMaxPrice: maxPrice.byMaxPrice,
  byMinPrice: minPrice.byMinPrice,
});
export default connect(mapStateToProps, {
  setData,
  sortData,
  setMaxPrice,
  setMinPrice,
})(App);
