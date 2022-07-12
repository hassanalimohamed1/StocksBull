import React, { useState } from "react";
import DatePicker from "react-date-picker";
import DateConverter from "../Utils/DateConverter";
import "react-datepicker/dist/react-datepicker.css";

export default function Datepicker(props) {
  const [value, onChange] = useState(new Date());

  //empty array to store the past 100 dates
  let dates = [];

  //Pushing dates to an array
  Object.entries(props.graph).map((row) => dates.push(row));

  //Storing latest and most recent prices for date range
  let latestDate = dates[0]["0"];
  let recentDate = dates[dates.length - 1]["0"];

  return (
    <span>
      <p>Search from:</p>
      <DatePicker
        aria-label="DatePicker"
        aria-required="true"
        htmlFor="DatePicker"
        value={value}
        selected={props.startDate}
        onChange={(date) => {
          date === null
            ? props.setSearch("")
            : props.setSearch(DateConverter(date));
          onChange(date);
        }}
        minDate={new Date(recentDate)}
        maxDate={new Date(latestDate)}
      />
  </span>
  );
}
