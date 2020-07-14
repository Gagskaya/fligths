import React from "react";
import "./App.scss";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { connect } from "react-redux";
import { setData } from "./actions/setData";
import { useEffect } from "react";
import axios from "axios";
import { orderBy } from "lodash";
import { sortData } from "./actions/sortData";
const sortFlights = (flights, sortBy) => {
  switch (sortBy) {
    case "high-price":
      return orderBy(flights, "flight.price.total.amount", "asc");
    case "low-price":
      return orderBy(flights, "flight.price.total.amount", "desc");
    case "time":
      return orderBy(flights, "flight.legs[0].segments[0].travelDuration", "asc");
    default:
      return orderBy(flights, "flight.price.total.amount", "asc");
  }
};
function App(props) {
  const { setData, flights, sortData } = props;
  useEffect(() => {
    axios.get("flights.json").then(({ data }) => {
      setData(data);
    });
  }, [setData]);

  return (
    <div className="app">
      <Sidebar sortData={sortData} />
      <Main flights={flights} />
    </div>
  );
}
const mapStateToProps = ({ data, sort }) => ({
  flights: data.data && sortFlights(data.data.result.flights,sort.sortBy),
});
export default connect(mapStateToProps, { setData, sortData })(App);
