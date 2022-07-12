import React, { useLayoutEffect } from "react";
import checkPrice from "../Utils/checkPrice";
import Arrows from "../Utils/Arrows";
import Spelling from "../Utils/Spelling";
import useState from "react-usestateref";

export default function HistoryContent(props) {

  /* UseStateRef combines React’s useState and useRef. 
     UseStateRef was created as an answer to solve people’s dilemmas when using useState and its asynchronous nature.
     GitHub: https://github.com/Aminadav/react-useStateRef#readme  */

  const [filteredDates1, setFilteredDates1, filteredDates1ref] = useState([]);
  const [latestprice1, setLatestprice1, latestprice1ref] = useState(0);
  const [recentprice1, setRecentprice1, recentprice1ref] = useState(0);
  const [pricechange1, setPricechange1, pricechange1ref] = useState(0);
  const [pricechangepct1, setPricechangepct1, pricechangepct1ref] = useState(0);

  useLayoutEffect(() => {
    //empty array to store filtered dates to retreive the lastest and current dates
    let arrayDates = [];

    //Filtering the dates by seatch
    setFilteredDates1(
      Object.entries(props.graph).filter((row) => row["0"] >= props.search)
    );
    
    //Storing the filtered array to get the price changes
    filteredDates1ref.current.map((row) =>  arrayDates.push(row));

    setLatestprice1(Number(arrayDates[0]["1"]["4. close"]).toFixed(2));
    setRecentprice1(Number(arrayDates[arrayDates.length - 1]["1"]["4. close"]).toFixed(2));
    setPricechange1(
      Number(latestprice1ref.current - recentprice1ref.current).toFixed(2)
    );

    setPricechangepct1(
      Number(
        (latestprice1ref.current / recentprice1ref.current) * 100 - 100
      ).toFixed(2)
    );
    // //Setting the price which will determine the colour of the graph
    props.setChanges(pricechange1ref.current);
  }, [props.search]);

  return (
<span>
      <h1>Stock history of {props.profile.Name}</h1>
      <div>
        <ul>
          <li>
            <h3>{props.profile.Name}</h3>
          </li>
          <li>
            <h3>{`(${props.profile.Symbol})`}</h3>
          </li>
          <li>
            <h3>{`$${latestprice1}`}</h3>
          </li>
          <li>
            <h3 style={{ color: checkPrice(pricechange1) }}>{pricechange1}</h3>
          </li>
          <li>
            <h3
              style={{ color: checkPrice(pricechangepct1) }}
            >{`${pricechangepct1}%`}</h3>
          </li>
          <li>
            <h3>
              {Arrows(pricechange1)} Past {filteredDates1.length}{" "}
              {Spelling(filteredDates1)}
            </h3>
          </li>
        </ul>
      </div>
      <br />
      </span>
  );
}
