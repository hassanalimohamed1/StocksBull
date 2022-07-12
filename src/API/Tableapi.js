import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

async function getData() {
  const url = `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${YOUR_API_KEY_HERE}`;
  let res = await fetch(url);
  let data = await res.json();
  status = res.status;

  return data;
}
export default function useTableAPI() {
  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  if (status === 429 || status === 403 || status === 500) {
    navigate("../Oops", {
      state: {
        Message: "An Error Occured!",
        Discription: `Error Code: ${status}`,
      },
    });
  }

  useEffect(() => {
    (async () => {
      try {
        setTable(await getData());
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);
  return {
    loading,
    table,
    error,
  };
}
