import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


let status = null;

async function getData() {
  const url = `https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${YOUR_API_KEY_HERE}`;
  let res = await fetch(url);
  let data = await res.json();
  status = res.status;

  return data;
}
export default function usePopularStocksAPI() {
  const navigate = useNavigate();

  if (status === 429 || status === 403 || status === 500) {
    navigate("../Oops", {
      state: {
        Message: "An Error Occured!",
        Discription: `Error Code: ${status}`,
      },
    });
  }

  const [loading, setLoading] = useState(true);
  const [popular, setPopular] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setPopular(await getData());
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);
  return {
    loading,
    popular,
    error,
  };
}
